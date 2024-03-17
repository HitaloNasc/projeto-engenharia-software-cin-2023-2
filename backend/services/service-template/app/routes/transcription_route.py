from quart import Blueprint, request
from app.infrastructure.repositories.config import mongodb_connection
from app.infrastructure.repositories.mongo_transcription_repository import MongoTranscriptionRepository
from app.usecases.get_transcription_usecase import GetTranscriptionUseCase
from app.usecases.create_transcription_usecase import CreateTranscriptionUseCase
from app.usecases.get_transcription_by_id_usecase import GetTranscriptionByIdUseCase
from app.usecases.delete_transcription_usecase import DeleteTranscriptionUseCase
from app.controllers.get_transcription_controller import GetTranscriptionController


transcription_route = Blueprint("transcription", __name__)


@transcription_route.route("/transcriptions/", methods=["GET"])
async def get_transcriptions():
    transcription_repository = MongoTranscriptionRepository(mongodb_connection)
    get_transcription_usecase = GetTranscriptionUseCase(transcription_repository)
    get_transcription_controller = GetTranscriptionController(get_transcription_usecase)

    return await get_transcription_controller.execute()


@transcription_route.route("/transcriptions/", methods=["POST"])
async def create_transcription():
    transcription_file = await request.files['transcription_file'].read()
    
    if not transcription_file:
        return {"message": "No file provided"}, 400
    
    transcription_text = await CreateTranscriptionUseCase.extract_text_from_pdf(transcription_file)
    
    if transcription_text:

        transcription_data = {
            "document_name": transcription_file.filename,
            "transcription": transcription_text
        }

        transcription_repository = MongoTranscriptionRepository(mongodb_connection)
        create_transcription_usecase = CreateTranscriptionUseCase(transcription_repository)
        transcription_id = await create_transcription_usecase.execute(transcription_data)
    
        return {"transcription_id": transcription_id}, 201
    
    return {"message": "Failed to extract transcription"}, 500


@transcription_route.route("/transcriptions/<transcription_id>", methods=["GET"])
async def get_transcription_by_id(transcription_id):
    transcription_repository = MongoTranscriptionRepository(mongodb_connection)
    get_transcription_by_id_usecase = GetTranscriptionByIdUseCase(transcription_repository)
    transcription = await get_transcription_by_id_usecase.execute(transcription_id)
    
    if transcription:
        return transcription
    else:
        return {"message": "Transcription not found"}, 404


@transcription_route.route("/transcriptions/<transcription_id>", methods=["DELETE"])
async def delete_transcription(transcription_id):
    transcription_repository = MongoTranscriptionRepository(mongodb_connection)
    delete_transcription_usecase = DeleteTranscriptionUseCase(transcription_repository)
    deleted_count = await delete_transcription_usecase.execute(transcription_id)
    
    if deleted_count:
        return {"message": "Transcription deleted successfully"}, 200
    else:
        return {"message": "Transcription not found"}, 404
