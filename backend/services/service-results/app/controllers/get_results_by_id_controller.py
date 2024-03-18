from typing import Dict, Any
from app.usecases.usecase import Usecase
from app.helpers.handler import handler
from app.helpers.http_status import HTTP_STATUS
from app.helpers.error import NOT_FOUND


class GetResultsByIdController:
    def __init__(self, usecase: Usecase):
        self.usecase = usecase

    async def execute(self, _id: str) -> Dict[str, Any]:

        result = await self.usecase.execute(_id)

        if not result:
            raise NOT_FOUND("Result not found")

        return handler.format_response(HTTP_STATUS.OK.value, result)
