from quart import Blueprint
from app.infrastructure.repositories.config import mongodb_connection
from app.infrastructure.repositories.mongo_results_repository import MongoResultsRepository
from app.usecases.get_results_usecase import GetResultsUseCase
from app.usecases.post_results_usecase import PostResultsUseCase
from app.usecases.delete_results_usecase import DeleteResultsUseCase
from app.usecases.get_results_by_id_usecase import GetResultsByIdUseCase
from app.controllers.get_results_controller import GetResultsController
from app.controllers.post_results_controller import PostResultsController
from app.controllers.delete_results_controller import DeleteResultsController
from app.controllers.get_results_by_id_controller import GetResultsByIdController

results_route = Blueprint("results", __name__)


@results_route.route("/result", methods=["GET"])
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


@results_route.route("/result/<string:_id>", methods=["DELETE"])
async def delete_state(_id):
    results_repository = MongoResultsRepository(mongodb_connection)
    delete_results_usecase = DeleteResultsUseCase(results_repository)
    delete_results_controller = DeleteResultsController(delete_results_usecase)
    return await delete_results_controller.delete_result(_id)


@results_route.route("/result/<string:_id>", methods=["GET"])
async def get_one_state(_id):
    results_repository = MongoResultsRepository(mongodb_connection)
    get_results_by_id_usecase = GetResultsByIdUseCase(results_repository)
    get_results_by_id_controller = GetResultsByIdController(
        get_results_by_id_usecase)
    return await get_results_by_id_controller.execute(_id)
