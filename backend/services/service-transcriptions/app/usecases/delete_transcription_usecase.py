from app.usecases.usecase import Usecase
from app.infrastructure.repositories.repository import Repository


class DeleteTranscriptionUseCase(Usecase):
    def __init__(self, repository: Repository):
        self.repository = repository

    async def execute(self, transcription_id: str) -> int:
        return await self.repository.delete(transcription_id)
