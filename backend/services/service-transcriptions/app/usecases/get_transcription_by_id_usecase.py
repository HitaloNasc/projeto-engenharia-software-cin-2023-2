from typing import Dict, Any
from app.usecases.usecase import Usecase
from app.infrastructure.repositories.repository import Repository


class GetTranscriptionByIdUseCase(Usecase):
    def __init__(self, repository: Repository):
        self.repository = repository

    async def execute(self, transcription_id: str) -> Dict[str, Any]:
        return await self.repository.find_one(transcription_id)
