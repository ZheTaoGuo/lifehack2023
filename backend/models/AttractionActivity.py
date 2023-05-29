from typing import Any, Dict

from flask_sqlalchemy import SQLAlchemy

attraction_activity_db = SQLAlchemy()


class AttractionActivity(attraction_activity_db.Model):
    __tablename__ = "attraction"

    id = attraction_activity_db.Column(attraction_activity_db.Integer, autoincrement=True, nullable=False,
                                       primary_key=True)
    title = attraction_activity_db.Column(attraction_activity_db.String)
    description = attraction_activity_db.Column(attraction_activity_db.Text)

    @property
    def jsonable(self) -> Dict[str, Any]:
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
        }
