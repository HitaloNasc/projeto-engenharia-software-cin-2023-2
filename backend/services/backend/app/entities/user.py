from uuid import uuid4
import re
from bcrypt import hashpw, gensalt, checkpw
from app.helpers.error import PRECONDITION_FAILED


class User():

    def __validate_email(self, email):
        email_regex = r'^[\w\.-]+@[\w\.-]+\.\w+$'
        return re.match(email_regex, email)

    def __encrypt_password(self, password):
        return hashpw(password.encode('utf-8'), gensalt()).decode('utf-8')

    def create(self,  name: str, email: str, password: str):
        if not self.__validate_email(email):
            raise PRECONDITION_FAILED("Invalid email")

        self._id = uuid4().hex
        self.name = name
        self.email = email
        self.password = self.__encrypt_password(password)

    def to_dict(self):
        return {
            "_id": self._id,
            "name": self.name,
            "email": self.email,
            "password": self.password
        }


def check_password(encripted_password, password):
    return checkpw(password.encode('utf-8'), encripted_password.encode('utf-8'))
