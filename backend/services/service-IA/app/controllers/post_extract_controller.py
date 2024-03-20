from quart import Quart, request, jsonify
import google.generativeai as genai
import json

app = Quart(__name__)

class ExtractController:

    def __init__(self):
        genai.configure(api_key="AIzaSyCVWYqPrS6mkOhNv4LtJrOE4p87X7IX26c")
        self.model = genai.GenerativeModel('gemini-pro')
    
    async def execute(self):
        text = await request.data
        text = text.decode("utf-8")

        if not text.strip():
            return jsonify({'error': 'O corpo da requisição está vazio'}), 400

        try:
            # Converter o texto recebido para o formato esperado pelo modelo
            response = self.model.generate_content(text)

            # Extrair o texto corrigido do resultado do modelo
            corrected_text = response.text

            # Gerar prompts com base no texto corrigido
            form_response = self.model.generate_content(f"A partir do texto {corrected_text}, preencha um formulário com as seguintes informações: Código, ano, processo, tipo Processo, JCJ, Resultado, Reclamante, Reclamado e salve em formato JSON.")

            # Retornar a resposta formatada como JSON
            return jsonify({'form': form_response.text})

        except Exception as e:
            return jsonify({'error': str(e)}), 500
