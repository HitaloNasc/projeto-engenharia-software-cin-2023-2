from quart import Quart, request, jsonify
from app.usecases.delete_results_usecase import DeleteResultsUseCase
from app.infrastructure.repositories.mongo_results_repository import MongoResultsRepository
from app.infrastructure.repositories.config import mongodb_connection

app = Quart(__name__)

class DeleteResultsController:
    
    def __init__(self, usecase: DeleteResultsUseCase):
        self.usecase = usecase
    
    async def delete_result(self, document_id):
        try:
            # Chama o caso de uso para deletar o documento
            result = await self.usecase.execute(document_id)
            return jsonify(result), 200
        except Exception as e:
            # Em caso de erro, retorna uma mensagem de erro adequada
            return jsonify({"error": str(e)}), 400

# Inicializa o repositório
repository = MongoResultsRepository(mongodb_connection)

# Inicializa o caso de uso
usecase = DeleteResultsUseCase(repository)

# Inicializa o controlador
delete_results_controller = DeleteResultsController(usecase)
