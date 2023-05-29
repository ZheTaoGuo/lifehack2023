from typing import Any, Dict

from flask_sqlalchemy import SQLAlchemy

user_fav_db = SQLAlchemy()


class UserFavourite(user_fav_db.Model):
    __tablename__ = "user_favourite"

    id = user_fav_db.Column(user_fav_db.Integer, autoincrement=True, nullable=False, primary_key=True)
    user_id = user_fav_db.Column(user_fav_db.Integer)
    activity_id = user_fav_db.Column(user_fav_db.Integer)

    @property
    def jsonable(self) -> Dict[str, Any]:
        return {
            "id": self.id,
            "user_id": self.user_id,
            "activity_id": self.activity_id
        }