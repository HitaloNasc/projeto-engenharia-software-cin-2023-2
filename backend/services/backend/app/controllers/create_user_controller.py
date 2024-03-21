from typing import Dict, Any
from app.usecases.usecase import Usecase
from app.helpers.handler import handler
from app.helpers.http_status import HTTP_STATUS


class CreateUserController:
    def __init__(self, usecase: Usecase):
        self.usecase = usecase

    async def execute(self, name: str, email: str, passord: str) -> Dict[str, Any]:

        response = await self.usecase.execute({
            "name": name,
            "email": email,
            "password": passord
        })

        return handler.format_response(HTTP_STATUS.OK.value, response)
