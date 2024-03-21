from typing import Dict, Any
from app.usecases.usecase import Usecase
from app.infrastructure.apis.api import Api


class StartExtractMetadataUseCase(Usecase):
    def __init__(self, service_documents_api: Api, service_ocr_api: Api, service_ia_api: Api, service_results_api: Api):
        self.service_documents_api = service_documents_api
        self.service_ocr_api = service_ocr_api
        self.service_ia_api = service_ia_api
        self.service_results_api = service_results_api

    def __validate_response(self, response):
        if not response or (response.get("status_code") != 200 and response.get("status_code") != 201):
            # TODO decidir o que fazer em caso de erro de submissão
            # |_> Salvar resultado com falha?
            raise Exception("Error on extract metadata")

    async def execute(self, file, filename) -> Dict[str, Any]:

        # Persistir documento
        print(">>>>>>>>>>>>>>>> Persistindo documento", flush=True)
        post_file_response = await self.service_documents_api.post("document", {"file": file, "filename": filename})

        self.__validate_response(post_file_response)

        # OCR
        print(">>>>>>>>>>>>>>>> Iniciando OCR", flush=True)
        ocr_create_result = await self.service_ocr_api.post("transcription", {"file": file, "filename": filename})

        if not ocr_create_result:
            self.__validate_response(ocr_create_result)

        transcription_id = ocr_create_result.get("transcription_id")
        print(f"transcription_id: {transcription_id}")

        ocr_result = await self.service_ocr_api.get(f"transcription/{transcription_id}")

        print(ocr_result)
        if not ocr_result:
            self.__validate_response(ocr_result)

        transcription = ocr_result.get("transcription")

        # Extrair metadados
        print(">>>>>>>>>>>>>>>> Iniciando extração de metadados", flush=True)
        form_response = await self.service_ia_api("generate-form", {"transcription": transcription})

        if not form_response:
            self.__validate_response(form_response)

        print(form_response)

        form_data = form_response

        # Persistir resultado da análise
        print(">>>>>>>>>>>>>>>> Iniciando persistência de resultado", flush=True)
        post_result_response = await self.service_results_api.post("result", form_data)

        if not post_result_response:
            self.__validate_response(post_result_response)

        print(">>>>>>>>>>>>>>>> Finalizado", flush=True)
        return form_data
