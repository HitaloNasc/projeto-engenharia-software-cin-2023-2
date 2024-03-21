import pytest
from typing import Dict, Any
from app.usecases.get_transcription_by_id_usecase import GetTranscriptionByIdUseCase
from app.infrastructure.repositories.repository import Repository


class MockRepository(Repository):
    async def find_one(self, transcription_id: str) -> Dict[str, Any]:
        
        return {"transcription_id": transcription_id, "transcription_text": "Lorem ipsum dolor sit amet"}


@pytest.mark.asyncio
async def test_get_transcription_by_id():
    
    usecase = GetTranscriptionByIdUseCase(MockRepository())

    transcription_id = "abc123"
    result = await usecase.execute(transcription_id)

    assert result["transcription_id"] == transcription_id
    assert result["transcription_text"] == "Lorem ipsum dolor sit amet"
