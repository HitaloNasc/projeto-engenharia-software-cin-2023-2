import google.generativeai as genai
import json
from app.helpers.error import INTERNAL_SERVER_ERROR


class TextGenerationController:
    def __init__(self, api_key):
        genai.configure(api_key=api_key)
        self.model = genai.GenerativeModel('gemini-pro')

    async def generate_prompt(self, transcription):
        prompt = (
            "Esse texto foi extraído de um pdf a partir de um OCR. "
            "Em virtude disso, há muitos erros quanto à legibilidade do OCR. "
            "Preciso que você reescreva ele da forma mais coesa possível. "
            f"Aqui está o texto: {transcription}"
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
        prompt = (
            f"A partir do texto {corrected_text}, preencha um formulário com as seguintes informações: Código, ano, processo, tipo Processo, JCJ, Resultado, Reclamante, Reclamado  e salve em formato JSON.")
        response = self.model.generate_content(prompt)
        return response.text

    async def execute(self, transcription):
        prompt = await self.generate_prompt(transcription)
        response = await self.fill_form(prompt)

        if response is None:
            raise INTERNAL_SERVER_ERROR()

        response = response.replace(
            "```json", "```").replace("```", "").strip()

        response = json.loads(response)
        return response
