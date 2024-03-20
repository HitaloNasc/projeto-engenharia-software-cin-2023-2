from quart import Blueprint
from app.controllers.post_extract_controller import ExtractController


extract_route = Blueprint("extract", __name__)


@extract_route.route("/extract", methods=["POST"])
async def post_state():
    extract_controller = ExtractController()

    return await extract_controller.execute()
