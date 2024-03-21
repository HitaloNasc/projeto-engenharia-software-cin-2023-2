import pytest
from typing import List, Dict, Any
from app.usecases.get_transcription_usecase import GetTranscriptionUseCase
from app.infrastructure.repositories.repository import Repository

class MockRepository(Repository):
    async def find(self) -> List[Dict[str, Any]]:
        
        return [
            {"transcription_id": "1", "transcription_text": "Transcription 1"},
            {"transcription_id": "2", "transcription_text": "Transcription 2"},
            {"transcription_id": "3", "transcription_text": "Transcription 3"},
        ]


@pytest.mark.asyncio
async def test_get_transcription():
    
    usecase = GetTranscriptionUseCase(MockRepository())

    result = await usecase.execute()

    assert isinstance(result, list)
    assert all(isinstance(transcription, dict) for transcription in result)

    assert len(result) == 3
    assert result[0]["transcription_id"] == "1"
    assert result[0]["transcription_text"] == "Transcription 1"
    assert result[1]["transcription_id"] == "2"
    assert result[1]["transcription_text"] == "Transcription 2"
    assert result[2]["transcription_id"] == "3"
    assert result[2]["transcription_text"] == "Transcription 3"
