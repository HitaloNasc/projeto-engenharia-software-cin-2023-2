from app.usecases.usecase import Usecase
from app.helpers.handler import handler
from app.helpers.http_status import HTTP_STATUS


class GetTemplateController:
    def __init__(self, usecase: Usecase):
        self.usecase = usecase

    async def execute(self):

        response_list = await self.usecase.execute()

        return handler.format_response(HTTP_STATUS.OK.value, response_list)
