from typing import Dict, Any
from app.usecases.usecase import Usecase
from app.infrastructure.repositories.repository import Repository
from app.entities.user import User
from app.helpers.error import PRECONDITION_FAILED


class CreateUserUseCase(Usecase):
    def __init__(self, repository: Repository):
        self.repository = repository

    async def execute(self, user: Dict[str, Any]) -> Dict[str, Any]:

        name = user.get("name")
        email = user.get("email")
        password = user.get("password")

        if not name or not email or not password:
            raise PRECONDITION_FAILED("Missing mandatory parameters")

        exists_by_email = await self.repository.find_by_email(email)
        if exists_by_email:
            raise PRECONDITION_FAILED(f"Email already exists: {email}")

        exists_by_name = await self.repository.find_by_name(name)
        if exists_by_name:
            raise PRECONDITION_FAILED(f"Name already exists: {name}")

        user = User()

        user.create(name, email, password)

        response = await self.repository.insert(user.to_dict())

        return {
            "id": response.get("_id"),
            "name": response.get("name"),
            "email": response.get("email")
        }
