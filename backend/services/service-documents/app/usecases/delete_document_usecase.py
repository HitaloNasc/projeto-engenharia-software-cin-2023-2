from app.helpers.error import NOT_FOUND, PRECONDITION_FAILED
from app.usecases.usecase import Usecase
from app.infrastructure.repositories.repository import Repository


class DeleteDocumentUseCase(Usecase):
    def __init__(self, repository: Repository):
        self.repository = repository

    async def execute(self, _id) -> None:
        if not _id:
            raise PRECONDITION_FAILED("id is required")

        curr_metadata = await self.repository.find_one(_id)

        if not curr_metadata:
            raise NOT_FOUND("Document not found")

        if curr_metadata["status"] == 0:
            raise PRECONDITION_FAILED("Document already deleted")

        await self.repository.delete(_id)
