from typing import List, Dict, Any
from app.usecases.usecase import Usecase
from app.infrastructure.repositories.repository import Repository


class GetByIdDocumentUseCase(Usecase):
    def __init__(self, repository: Repository):
        self.repository = repository

    async def execute(self, _id: str) -> List[Dict[str, Any]]:

        documents = await self.repository.find_one(_id)

        return documents
