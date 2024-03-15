from app.usecases.usecase import Usecase
from app.helpers.handler import handler
from app.helpers.http_status import HTTP_STATUS


class DeleteDocumentController:
    def __init__(self, usecase: Usecase):
        self.usecase = usecase

    async def execute(self, _id) -> None:

        await self.usecase.execute(_id)

        return handler.format_response(HTTP_STATUS.OK.value, "OK")
