from typing import Any, Dict

from flask_sqlalchemy import SQLAlchemy

user_db = SQLAlchemy()


class User(user_db.Model):
    __tablename__ = "user"

    id = user_db.Column(user_db.Integer, autoincrement=True, nullable=False, primary_key=True)

    @property
    def jsonable(self) -> Dict[str, Any]:
        return {
            "id": self.id
        }