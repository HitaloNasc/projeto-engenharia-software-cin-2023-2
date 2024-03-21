import pytest
from typing import Dict, Any
from app.usecases.create_transcription_usecase import CreateTranscriptionUseCase
from app.infrastructure.repositories.repository import Repository


class MockRepository(Repository):
    async def insert(self, transcription_data: Dict[str, Any]) -> str:
        
        return "abc123"

@pytest.mark.asyncio
async def test_create_transcription():
    
    usecase = CreateTranscriptionUseCase(MockRepository())

    transcription_data = {
        "document_name": "test_document.pdf",
        "transcription": "Lorem ipsum dolor sit amet"
    }

    result = await usecase.execute(transcription_data)

    assert result == "abc123"