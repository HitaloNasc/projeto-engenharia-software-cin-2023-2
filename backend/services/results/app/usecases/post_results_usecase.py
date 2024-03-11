from typing import Dict, Any
from datetime import datetime
from app.infrastructure.repositories.repository import Repository

class PostResultsUseCase:
    def __init__(self, repository: Repository):
        self.repository = repository

    async def execute(self, document_name: str, document_id: str) -> Dict[str, Any]:
        # Adicione lógica para validar os dados recebidos, se necessário
        created_at = datetime.now()

        # Chame o método de inserção no repositório
        inserted_post_id = await self.repository.insert(
            document_name=document_name,
            document_id=document_id,
            created_at=created_at
        )

        # Construa e retorne os dados da postagem
        post_data = {
            "_id": inserted_post_id,
            "document_name": document_name,
            "document_id": document_id,
            "created_at": created_at,
            "form": {}
        }

        return post_data
