import pytest
from app.usecases.delete_transcription_usecase import DeleteTranscriptionUseCase
from app.infrastructure.repositories.repository import Repository


class MockRepository(Repository):
    async def delete(self, transcription_id: str) -> int:
        
        return 1

@pytest.mark.asyncio
async def test_delete_transcription():
    
    usecase = DeleteTranscriptionUseCase(MockRepository())

    transcription_id = "abc123"
    result = await usecase.execute(transcription_id)

    assert result == 1
