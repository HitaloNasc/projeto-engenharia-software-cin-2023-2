from quart import Quart, request, jsonify
from app.usecases.post_results_usecase import PostResultsUseCase

app = Quart(__name__)

class PostResultsController:
    
    def __init__(self):
        self.usecase = PostResultsUseCase()
    
    async def create_result(self):
        data = await request.json()
        result = await self.usecase.execute(data)
        return jsonify(result)

post_results_controller = PostResultsController()
