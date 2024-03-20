from typing import Dict, Any
from app.usecases.usecase import Usecase
from app.infrastructure.apis.api import Api


class StartExtractMetadataUseCase(Usecase):
    def __init__(self, service_documents_api: Api, service_ocr_api: Api, service_ia_api: Api, service_results_api: Api):
        self.service_documents_api = service_documents_api
        self.service_ocr_api = service_ocr_api
        self.service_ia_api = service_ia_api
        self.service_results_api = service_results_api

    async def execute(self, file) -> Dict[str, Any]:

        # Persistir documento
        post_file_response = await self.service_documents_api.post_file("/document", file)

        if not post_file_response or post_file_response.get("status_code") != 200:
            # TODO decidir o que fazer em caso de erro de submissão
            # |_> Salvar resultado com falha?
            raise Exception("Error on extract metadata")

        # OCR
        ocr_result = await self.service_ocr_api.post_file("/ocr", file)

        # Extrair metadados

        # Persistir resultado da análise
