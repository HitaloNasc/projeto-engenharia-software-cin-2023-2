from quart import Blueprint, request, jsonify
from app.infrastructure.repositories.config import mongodb_connection
from services.results.app.infrastructure.repositories.mongo_results_repository import MongoResultsRepository
from services.results.app.usecases.get_results_usecase import GetResultsUseCase
from services.results.app.controllers.get_results_controller import GetResultsController
from services.results.app.usecases.post_results_usecase import PostResultsUseCase
from services.results.app.controllers.post_results_controller import PostResultsController
from services.results.app.usecases.delete_results_usecase import DeleteResultsUseCase
from services.results.app.controllers.delete_results_controller import DeleteResultsController

template_route = Blueprint("template", __name__)

@template_route.route("/results/", methods=["GET"])
async def get_state():
    template_repository = MongoResultsRepository(mongodb_connection)
    get_results_usecase = GetResultsUseCase(template_repository)
    get_results_controller = GetResultsController(get_results_usecase)
    return await get_results_controller.execute()

@template_route.route("/result", methods=["POST"])
async def post_state():
    template_repository = MongoResultsRepository(mongodb_connection)
    post_results_usecase = PostResultsUseCase(template_repository)
    post_results_controller = PostResultsController(post_results_usecase)
    return await post_results_controller.create_result()

@template_route.route("/result/<document_id>", methods=["DELETE"])
async def delete_state(document_id):
    template_repository = MongoResultsRepository(mongodb_connection)
    delete_results_usecase = DeleteResultsUseCase(template_repository)
    delete_results_controller = DeleteResultsController(delete_results_usecase)
    return await delete_results_controller.delete_result(document_id)
