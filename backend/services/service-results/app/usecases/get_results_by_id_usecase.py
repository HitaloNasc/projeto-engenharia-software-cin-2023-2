from typing import List, Dict, Any
from app.usecases.usecase import Usecase
from app.infrastructure.repositories.repository import Repository


class GetResultsByIdUseCase(Usecase):
    def __init__(self, repository: Repository):
        self.repository = repository

    async def execute(self, _id: str) -> List[Dict[str, Any]]:

        response = await self.repository.find_one(_id)

        if not response:
            return None

        return response
