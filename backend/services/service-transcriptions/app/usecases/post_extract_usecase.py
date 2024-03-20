# arquivo: usecases/generate_form_usecase.py

import google.generativeai as genai

class GenerateFormUsecase:
    def __init__(self, api_key):
        genai.configure(api_key=api_key)
        self.model = genai.GenerativeModel('gemini-pro')

    def generate_form(self, text):
        response = self.model.generate_content(text)

        if not response.ok:
            raise Exception("Erro ao gerar conteúdo")

        corrected_text = response.text
        form_response = self.model.generate_content(f"A partir do texto {corrected_text}, preencha um formulário com as seguintes informações: Código, ano, processo, tipo Processo, JCJ, Resultado, Reclamante, Reclamado e salve em formato JSON.")

        if not form_response.ok:
            raise Exception("Erro ao gerar formulário")

        return form_response.text
