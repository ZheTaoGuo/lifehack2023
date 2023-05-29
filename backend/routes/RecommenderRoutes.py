from flask import Blueprint

from controllers.Recommender import Recommender

RecommenderRoutes = Blueprint("RecommenderRoutes", __name__)

RecommenderRoutes.get("/activities")(Recommender.get_activities)
RecommenderRoutes.get("/user/<int:id>/favourites")(Recommender.get_user_fav)
RecommenderRoutes.get("/user/<int:id>/recommended")(Recommender.get_recommendations)

