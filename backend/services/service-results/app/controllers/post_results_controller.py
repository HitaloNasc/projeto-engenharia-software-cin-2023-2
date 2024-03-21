from quart import Quart, request, jsonify
from app.usecases.post_results_usecase import PostResultsUseCase
from app.infrastructure.repositories.repository import Repository
from app.usecases.usecase import Usecase
from app.helpers.handler import handler
import json

app = Quart(__name__)


class PostResultsController:

    def __init__(self, usecase=Usecase):
        self.usecase = usecase

    async def create_result(self):
        data = await request.data
        data = data.decode("utf-8")

        if not data.strip():
            return handler.format_response(400, {'error': 'Request body is empty'})

        try:
            # Tentar fazer o parsing do JSON
            json_data = json.loads(data)
        except json.JSONDecodeError:
            return handler.format_response(400, {'error': 'Invalid JSON format'})

        # Extrair os campos document_name e document_id da string JSON
        document_name = json_data.get('document_name')
        document_id = json_data.get('document_id')
        form = json_data.get('form')

        # Verificar se os campos necessários estão presentes
        if not document_name or not document_id:
            return handler.format_response(400, {'error': 'document_name and document_id are required'})

        # Chamar o caso de uso com os parâmetros extraídos
        result = await self.usecase.execute(document_name, document_id, form)

        return handler.format_response(200, result)


post_results_controller = PostResultsController()
