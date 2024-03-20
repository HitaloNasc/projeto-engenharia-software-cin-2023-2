# arquivo: routes.py

from quart import Quart
from app.controllers.post_extract_controller import GenerateFormController
from app.usecases.post_extract_usecase import GenerateFormUsecase

app = Quart(__name__)

@app.route("/generate-form", methods=["POST"])
async def generate_form():
    controller = GenerateFormController(GenerateFormUsecase(api_key="AIzaSyCVWYqPrS6mkOhNv4LtJrOE4p87X7IX26c"))
    return await controller.handle_request()

if __name__ == "__main__":
    app.run()
