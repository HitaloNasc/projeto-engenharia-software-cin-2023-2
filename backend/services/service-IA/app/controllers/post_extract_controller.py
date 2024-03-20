from quart import request, jsonify
from app.usecases.post_extract_usecase import ExtractUsecase
import google.generativeai as genai
from app.infrastructure.repositories import TextRepository

class TextGenerationController:
    def __init__(self, api_key, db_connection):
        genai.configure(api_key=api_key)
        self.model = genai.GenerativeModel('gemini-pro')
        self.repository = TextRepository(db_connection)
    

    async def generate_text_from_database(self, document_id):
        input_text = await self.repository.get_text(document_id)
        if input_text:
            response_text = await self.generate_prompt(input_text)
            return response_text
        else:
            return None
        

    async def generate_prompt(self, input_text):
        prompt = (
            "Esse texto foi extraído de um pdf a partir de um OCR. "
            "Em virtude disso, há muitos erros quanto à legibilidade do OCR. "
            "Preciso que você reescreva ele da forma mais coesa possível. "
            f"Aqui está o texto: {input_text}"
        )

        response = self.model.generate_content(prompt)
        return response.text
    
    async def fill_form(self, response):
        corrected_text = response
        if corrected_text:
            response_text = await self.forms_prompt(corrected_text)
            return response_text
        else:
            return None

    async def forms_prompt(self, corrected_text):
        prompt = (f"A partir do texto {corrected_text}, preencha um formulário com as seguintes informações: Código, ano, processo, tipo Processo, JCJ, Resultado, Reclamante, Reclamado  e salve em formato JSON.")
        response = self.model.generate_content(prompt)
        return response.text
        
