from asyncio import create_task
from typing import Dict, Any
from app.usecases.usecase import Usecase
from app.helpers.handler import handler
from app.helpers.http_status import HTTP_STATUS


class StartExtractMetadataController:
    def __init__(self, usecase: Usecase):
        self.usecase = usecase

    async def __in_background(self, file: str, filename: str) -> None:
        try:
            response = await self.usecase.execute(file, filename)
        except Exception as e:
            print(f"Exception occurred in background task: {e}")

    async def execute(self,  file: str, filename: str) -> Dict[str, Any]:
        create_task(self.__in_background(file, filename))
        return handler.format_response(HTTP_STATUS.OK.value, {"start": "ok"})
