from typing import Dict, Any
from app.usecases.usecase import Usecase
from app.infrastructure.repositories.repository import Repository
from app.helpers.error import PRECONDITION_FAILED, NOT_FOUND, UNAUTHORIZED
from app.entities.user import check_password
from quart_jwt_extended import create_access_token


class LogoutUseCase(Usecase):
    def __init__(self, repository: Repository):
        self.repository = repository

    async def execute(self, token: str) -> Dict[str, Any]:

        if not token:
            raise PRECONDITION_FAILED("Missing mandatory parameters: token")

        token_data = await self.repository.find_one(token)

        if not token_data:
            raise NOT_FOUND("Token not found")

        await self.repository.delete(token_data.get("_id"))

        return {
            "logout": "ok"
        }
