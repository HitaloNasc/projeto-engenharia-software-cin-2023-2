from typing import Dict, Any
from app.usecases.usecase import Usecase
from app.helpers.handler import handler
from app.helpers.http_status import HTTP_STATUS


class GetByIdDocumentController:
    def __init__(self, usecase: Usecase):
        self.usecase = usecase

    async def execute(self, _id: str) -> Dict[str, Any]:

        document = await self.usecase.execute(_id)

        return handler.format_response(HTTP_STATUS.OK.value, document)
