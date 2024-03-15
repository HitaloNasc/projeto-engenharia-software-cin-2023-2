from app.usecases.usecase import Usecase
from app.infrastructure.repositories.repository import Repository
from typing import Dict, Any


class CreateTranscriptionUseCase(Usecase):
    def __init__(self, repository: Repository):
        self.repository = repository

    async def execute(self, transcription_data: Dict[str, Any]) -> str:
        transcription_id = await self.repository.insert(transcription_data)
        return transcription_id
