from quart import Quart, request, jsonify
from app.usecases.post_results_usecase import PostResultsUseCase
from app.infrastructure.repositories.repository import Repository
from app.usecases.usecase import Usecase

app = Quart(__name__)

class PostResultsController:
    
    def __init__(self, usecase=Usecase):
        self.usecase = usecase
    
    async def create_result(self):
        data = await request.json()
        result = await self.usecase.execute(data)
        return jsonify(result)

post_results_controller = PostResultsController()
