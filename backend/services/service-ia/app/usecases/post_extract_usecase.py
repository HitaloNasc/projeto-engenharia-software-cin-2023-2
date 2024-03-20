import google.generativeai as genai
from app.controllers.post_extract_controller import TextGenerationController
from app.infrastructure.repositories.mongo_extract_repository import TextRepository

class GenerateFormUseCase:

    def __init__(self, text_repository: TextRepository):
        self.text_repository = text_repository
    
    async def process_generated_text(self, generated_text: str):
        pass
