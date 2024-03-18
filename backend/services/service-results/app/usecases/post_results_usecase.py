from typing import Dict, Any
from datetime import datetime
from app.infrastructure.repositories.repository import Repository


class PostResultsUseCase:
    def __init__(self, repository: Repository):
        self.repository = repository

    async def execute(self, document_name: str, document_id: str, form: Dict[str, Any]) -> Dict[str, Any]:
        created_at = str(datetime.now())

        inserted_post_id = await self.repository.insert(
            document_name=document_name,
            document_id=document_id,
            created_at=created_at,
            # TODO formatar o dicionário 'form' para garantir a estrutura correta
            form=form
        )

        post_data = {
            "_id": inserted_post_id,
            "document_name": document_name,
            "document_id": document_id,
            "created_at": created_at,
            "form": form
        }

        return post_data
