from typing import List, Dict, Any
from app.usecases.usecase import Usecase
from app.infrastructure.repositories.repository import Repository


class GetDocumentUseCase(Usecase):
    def __init__(self, repository: Repository):
        self.repository = repository

    async def execute(self) -> List[Dict[str, Any]]:

        documents = await self.repository.find()

        return documents
