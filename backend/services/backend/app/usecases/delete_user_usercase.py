from app.usecases.usecase import Usecase
from app.infrastructure.repositories.repository import Repository


class DeleteUserUseCase(Usecase):
    def __init__(self, repository: Repository):
        self.repository = repository

    async def execute(self, _id: str) -> bool:
        await self.repository.delete(_id)
        return {"deleted": "ok"}
