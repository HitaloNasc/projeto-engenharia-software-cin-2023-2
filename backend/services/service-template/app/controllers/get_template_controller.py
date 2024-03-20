# arquivo: controllers/generate_form_controller.py

from quart import request, jsonify
from app.usecases.post_extract_usecase import GenerateFormUsecase

class GenerateFormController:
    def __init__(self, usecase):
        self.usecase = usecase

    async def handle_request(self):
        try:
            data = await request.get_json()
            text = data.get("text")

            if not text:
                return jsonify({"error": "Texto não fornecido"}), 400

            form = self.usecase.generate_form(text)
            return jsonify({"form": form}), 200

        except Exception as e:
            return jsonify({"error": str(e)}), 500
