from app.usecases.usecase import Usecase
from app.helpers.handler import handler
from app.helpers.http_status import HTTP_STATUS


class PostInsertDocumentController:
    def __init__(self, usecase: Usecase):
        self.usecase = usecase

    async def execute(self, file):

        response = await self.usecase.execute(file)

        return handler.format_response(HTTP_STATUS.OK.value, response)
