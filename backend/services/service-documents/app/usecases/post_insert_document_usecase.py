import uuid
import datetime
from typing import Dict, Any
from pathlib import Path
from app.helpers.error import PRECONDITION_FAILED
from app.usecases.usecase import Usecase
from app.infrastructure.storages.blob_storage import BlobStorage
from app.infrastructure.repositories.repository import Repository


class PostInsertDocumentUseCase(Usecase):
    def __init__(self, storage: BlobStorage, repository: Repository):
        self.storage = storage
        self.repository = repository

    def __check_file_ext(self, filename: str):
        ext = Path(filename).suffix
        return ext in [".pdf"]

    def __format(self, _id: str, file_name: str, file_extension: str, file_url: str, file_size: int, created_at: str, status: int):
        return {
            "_id": _id,
            "file_name": file_name,
            "file_extension": file_extension,
            "file_url": file_url,
            "file_size": file_size,
            "created_at": created_at,
            "status": status
        }

    async def execute(self, file, filename) -> Dict[str, Any]:

        _id = uuid.uuid4().hex

        if not self.__check_file_ext(filename):
            raise PRECONDITION_FAILED("Invalid file type")

        file_url = await self.storage.insert(file, filename, _id)

        metadata = self.__format(_id, filename, Path(
            filename).suffix, file_url, 0, str(datetime.datetime.now()), 1)

        saved = await self.repository.insert(metadata)

        return saved
