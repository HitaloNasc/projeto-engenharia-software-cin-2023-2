from quart import Blueprint, request
# from quart_jwt_extended import jwt_required, get_jwt_identity
from app.infrastructure.apis.aiohttp_service_documents_api import AiohttpServiceDocumentsApi
from app.infrastructure.apis.aiohttp_service_transcription_api import AiohttpTranscriptionDocumentsApi
from app.infrastructure.apis.aiohttp_service_ia_api import AiohttpServiceIaApi
from app.infrastructure.apis.aiohttp_service_results_api import AiohttpServiceResultsApi
from app.controllers.start_extract_metadata_controller import StartExtractMetadataController
from app.usecases.start_extract_metadata_usecase import StartExtractMetadataUseCase

analitcs_route = Blueprint("analitcs", __name__)


@analitcs_route.route("/start", methods=["POST"])
async def start():

    data = await request.json

    file = data.get("file")
    filename = data.get("filename")

    start_extract_metadata_usecase = StartExtractMetadataUseCase(
        service_documents_api=AiohttpServiceDocumentsApi(),
        service_ocr_api=AiohttpTranscriptionDocumentsApi(),
        service_ia_api=AiohttpServiceIaApi(),
        service_results_api=AiohttpServiceResultsApi()
    )

    start_extract_metadata_controller = StartExtractMetadataController(
        start_extract_metadata_usecase)

    return await start_extract_metadata_controller.execute(file, filename)
