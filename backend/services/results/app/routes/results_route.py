from quart import Blueprint, request, jsonify
from app.infrastructure.repositories.config import mongodb_connection
from app.infrastructure.repositories.mongo_results_repository import MongoResultsRepository
from app.usecases.get_results_usecase import GetResultsUseCase
from app.controllers.get_results_controller import GetResultsController
from app.usecases.post_results_usecase import PostResultsUseCase
from app.controllers.post_results_controller import PostResultsController
from app.usecases.delete_results_usecase import DeleteResultsUseCase
from app.controllers.delete_results_controller import DeleteResultsController
from app.helpers.handler import handler

results_route = Blueprint("results", __name__)

@results_route.route("/results/", methods=["GET"])
async def get_state():
    results_repository = MongoResultsRepository(mongodb_connection)
    get_results_usecase = GetResultsUseCase(results_repository)
    get_results_controller = GetResultsController(get_results_usecase)
    return await get_results_controller.execute()

@results_route.route("/result", methods=["POST"])


async def post_state():
    results_repository = MongoResultsRepository(mongodb_connection)
    post_results_usecase = PostResultsUseCase(results_repository)
    post_results_controller = PostResultsController(post_results_usecase)
    return await post_results_controller.create_result()


@results_route.route("/result/<document_id>", methods=["DELETE"])
async def delete_state(document_id):
    results_repository = MongoResultsRepository(mongodb_connection)
    delete_results_usecase = DeleteResultsUseCase(results_repository)
    delete_results_controller = DeleteResultsController(delete_results_usecase)
    return await delete_results_controller.delete_result(document_id)

@results_route.route("/result/<document_id>", methods=["GET"])
async def get_one_state(document_id):
    results_repository = MongoResultsRepository(mongodb_connection)
    result = await results_repository.find_one(document_id)
    if result:
        return handler.format_response(201, result)
    else:
        return handler.format_response(400, {'error': 'document_name and document_id are required'})
