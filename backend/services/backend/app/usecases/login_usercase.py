from typing import Dict, Any
from app.usecases.usecase import Usecase
from app.infrastructure.repositories.repository import Repository
from app.helpers.error import PRECONDITION_FAILED, NOT_FOUND, UNAUTHORIZED
from app.entities.user import check_password
from quart_jwt_extended import create_access_token


class LoginUseCase(Usecase):
    def __init__(self, user_repository: Repository, token_repository: Repository):
        self.user_repository = user_repository
        self.token_repository = token_repository

    async def execute(self, data: Dict[str, Any]) -> Dict[str, Any]:
        email = data.get("email")
        password = data.get("password")

        print(f"{email} {password}", flush=True)

        if not email or not password:
            raise PRECONDITION_FAILED("Missing mandatory parameters")

        user = await self.user_repository.find_by_email(email)

        if not user or user.get("status") == 0:
            raise NOT_FOUND("User not found")

        is_same_password = check_password(user.get("password"), password)

        if not is_same_password:
            raise UNAUTHORIZED("Wrong password")

        token = create_access_token(identity=user.get("_id"))

        await self.token_repository.delete(user.get("_id"))

        await self.token_repository.insert({
            "_id": user.get("_id"),
            "token": token
        })

        return {
            "name": user.get("name"),
            "email": user.get("email"),
            "token": token
        }
