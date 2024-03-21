from typing import Dict, Any
from app.usecases.usecase import Usecase
from app.helpers.handler import handler
from app.helpers.http_status import HTTP_STATUS


class LogoutController:
    def __init__(self, usecase: Usecase):
        self.usecase = usecase

    async def execute(self,  token: str) -> Dict[str, Any]:

        response = await self.usecase.execute(token)

        return handler.format_response(HTTP_STATUS.OK.value, response)
