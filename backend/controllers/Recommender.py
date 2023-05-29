from dataclasses import dataclass
from flask import jsonify, request, Response

from typing import Any, Dict, Iterable, List, Optional, Tuple

import numpy as np
import pandas as pd
from rake_nltk import Rake
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer

from models.AttractionActivity import AttractionActivity
from models.AttractionActivityTag import AttractionActivityTag
from models.UserFavourite import UserFavourite
from models.User import User

REST_Response = Tuple[Response, Optional[int]]


@dataclass
class Recommender:
    @classmethod
    def get_activities(cls, is_internal: bool = False) -> REST_Response:
        result: List[Dict[str, Any]] = []
        activities: Iterable = CharityActivity.query.all()
        for activity in activities:
            activity_dict: Dict[str, Any] = activity.jsonable
            tags: Iterable = CharityActivityTag.query.filter_by(activity_id=activity_dict["id"]).all()
            tags_arr: List[str] = []
            for tag in tags:
                tags_arr.append(tag["tag"])
            activity_dict["tags"]: List[str] = tags_arr
            result.append(activity_dict)

        if is_internal:
            return result
        else:
            return jsonify({
                "code": 200,
                "data": result
            })

    @classmethod
    def get_user_fav(cls, id: int, is_internal: bool = False) -> REST_Response:
        user_id: int = id
        favs: List = list(UserFavourite.query.filter_by(user_id=user_id).all())

        if is_internal:
            return favs
        else:
            return jsonify({
                "code": 200,
                "data": favs
            })

    @classmethod
    def get_recommendations(cls, id: int) -> REST_Response:
        user_id: int = id

        activity_data: List[Dict[str, Any]] = cls.get_activities(is_internal=True)
        activity_df: pd.DataFrame = pd.DataFrame(activity_data)

        for idx, row in activity_df.iterrows():
            r = Rake()
            r.extract_keywords_from_text(row["description"])
            desc_key_words_dict_scores = r.get_word_degrees()

            r = Rake()
            r.extract_keywords_from_text(row["title"])
            title_key_words_dict_scores = r.get_word_degrees()

            row["keywords"] = ' '.join(
                list(title_key_words_dict_scores.keys()) + row["tags"] + list(desc_key_words_dict_scores.keys()))

        activity_df.drop(columns=["title", "description", "tags"], inplace=True)

        favs_data: List[Dict[str, Any]] = cls.get_user_fav(id=user_id, is_internal=True)
        favs_df: pd.DataFrame = pd.DataFrame(favs_data)

        count = CountVectorizer()
        count_matrix = count.fit_transform(activity_df['keywords'])
        cosine_sim = cosine_similarity(count_matrix, count_matrix)

        result_df: Optional[pd.DataFrame] = None
        for idx, item in favs_df["activity_id"].iteritems():
            score_df: pd.DataFrame = cls._recommendations(item, pd.Series(activity_df["id"]), cosine_sim, activity_df)
            if result_df is None:
                result_df = score_df
            else:
                result_df += score_df

        return jsonify({
            "code": 200,
            "data": {
                "id": list(result_df["id"]),
                "score": list(result_df["score"])
            }
        })

    @classmethod
    def _recommendations(item: int, indices: pd.Series, cosine_sim: List, activity_df: pd.DataFrame) -> pd.DataFrame:
        recommended = []

        # getting the index of the movie that matches the title
        idx = indices[indices == item].index[0]

        # creating a Series with the similarity scores in descending order
        score_series = pd.Series(cosine_sim[idx]).sort_values(ascending=False)

        # getting the indexes of the 10 most similar movies
        top_10_values = list(score_series.iloc[1:11])
        top_10_indexes = list(score_series.iloc[1:11].index)

        # populating the list with the titles of the best 10 matching movies
        for i in top_10_indexes:
            recommended.append(list(activity_df['id'])[i])

        return pd.DataFrame({
            "id": recommended,
            "score": top_10_values
        })