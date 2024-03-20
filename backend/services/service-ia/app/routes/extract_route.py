# arquivo: routes.py

from quart import Blueprint, request
from app.controllers.post_extract_controller import TextGenerationController
from app.env import API_KEY

extract_route = Blueprint("extract", __name__)


@extract_route.route("/generate-form", methods=["POST"])
async def generate_form():
    data = await request.json

    transcription = data.get("transcription")

    controller = TextGenerationController(api_key=API_KEY)
    return await controller.execute(transcription)
