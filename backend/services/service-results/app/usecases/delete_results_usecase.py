from typing import Dict, Any
from app.infrastructure.repositories.repository import Repository

class DeleteResultsUseCase:
    def __init__(self, repository: Repository):
        self.repository = repository

    async def execute(self, document_id: str) -> Dict[str, Any]:
        # Chama o método de deleção no repositório
        if self.repository.find_one(document_id) == None:
            raise Exception ("Documento não se encontra na lista")
        
        deleted = await self.repository.delete(document_id)
        
        # Constrói a resposta
        response = {"deleted": deleted}
        return response
