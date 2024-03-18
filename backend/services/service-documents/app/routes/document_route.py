from quart import Blueprint, request
from app.infrastructure.repositories.config import mongodb_connection
from app.infrastructure.storages.documents_blob_storage import DocumentsBlobStorage
from app.infrastructure.repositories.mongo_documents_metadata_repository import MongoDocumentsMetadataRepository
from app.usecases.post_insert_document_usecase import PostInsertDocumentUseCase
from app.usecases.delete_document_usecase import DeleteDocumentUseCase
from app.usecases.get_document_usecase import GetDocumentUseCase
from app.usecases.get_by_id_document_usecase import GetByIdDocumentUseCase
from app.controllers.post_insert_document_controller import PostInsertDocumentController
from app.controllers.delete_document_controller import DeleteDocumentController
from app.controllers.get_document_controller import GetDocumentController
from app.controllers.get_by_id_document_controller import GetByIdDocumentController


document_route = Blueprint("document", __name__)


@document_route.route("/document/", methods=["POST"])
async def insert_document():
    files = await request.files
    file = files["file"]
    document_storage = DocumentsBlobStorage()
    repository = MongoDocumentsMetadataRepository(
        mongodb_connection
    )
    insert_document_usecase = PostInsertDocumentUseCase(
        document_storage, repository)
    insert_document_controller = PostInsertDocumentController(
        insert_document_usecase)

    return await insert_document_controller.execute(file)


@document_route.route("/document/<string:_id>", methods=["DELETE"])
async def delete_document(_id):
    repository = MongoDocumentsMetadataRepository(
        mongodb_connection
    )
    delete_document_usecase = DeleteDocumentUseCase(repository)
    delete_document_controller = DeleteDocumentController(
        delete_document_usecase)

    return await delete_document_controller.execute(_id)


@document_route.route("/document/", methods=["GET"])
async def get_document():
    repository = MongoDocumentsMetadataRepository(
        mongodb_connection
    )
    get_document_usecase = GetDocumentUseCase(repository)
    get_document_controller = GetDocumentController(get_document_usecase)

    return await get_document_controller.execute()


@document_route.route("/document/<string:_id>", methods=["GET"])
async def get_by_id_document(_id):
    repository = MongoDocumentsMetadataRepository(
        mongodb_connection
    )
    get_document_usecase = GetByIdDocumentUseCase(repository)
    get_document_controller = GetByIdDocumentController(get_document_usecase)

    return await get_document_controller.execute(_id)
