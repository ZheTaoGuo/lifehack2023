from typing import Any, Dict

from flask_sqlalchemy import SQLAlchemy

attraction_activity_tag_db = SQLAlchemy()


class AttractionActivityTag(attraction_activity_tag_db.Model):
    __tablename__ = "charity_activity_tag"

    id = attraction_activity_tag_db.Column(attraction_activity_tag_db.Integer, autoincrement=True,
                                           nullable=False, primary_key=True)
    activity_id = attraction_activity_tag_db.Column(attraction_activity_tag_db.Integer, nullable=False)
    tag = attraction_activity_tag_db.Column(attraction_activity_tag_db.String)

    @property
    def jsonable(self) -> Dict[str, Any]:
        return {
            "id": self.id,
            "tag": self.tag
        }