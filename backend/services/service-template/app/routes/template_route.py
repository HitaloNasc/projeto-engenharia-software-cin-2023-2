from quart import Blueprint
from app.infrastructure.repositories.config import mongodb_connection
from app.infrastructure.repositories.mongo_template_repository import (
    MongoTemplateRepository,
)
from app.usecases.get_template_usecase import GetTemplateUseCase
from app.controllers.get_template_controller import GetTemplateController


template_route = Blueprint("template", __name__)


@template_route.route("/template/", methods=["GET"])
async def get_state():
    template_repository = MongoTemplateRepository(mongodb_connection)
    get_template_usecase = GetTemplateUseCase(template_repository)
    get_template_controller = GetTemplateController(get_template_usecase)

    return await get_template_controller.execute()
