from app.infrastructure.storages.blob_storage import BlobStorage
from app.infrastructure.storages.config import blob_client
from azure.core.exceptions import ResourceNotFoundError
from pathlib import Path
from io import BytesIO


class DocumentsBlobStorage(BlobStorage):

    container_client = blob_client.get_container_client("documents")

    async def insert(self, file, file_prefix):
        ext = Path(file.filename).suffix
        file_name = f"{file_prefix}{ext}"

        file_content = file.read()
        file_io = BytesIO(file_content)

        blob_client = self.container_client.get_blob_client(file_name)
        blob_client.upload_blob(data=file_io)

        return blob_client.url

    def delete(self, blob_name):
        try:
            self.container_client.delete_blob(blob_name)
            return True
        except ResourceNotFoundError:
            return False

    def find_one(self, blob_name):
        blob_client = self.container_client.get_blob_client(blob_name)
        try:
            blob_properties = blob_client.get_blob_properties()
            return blob_properties
        except ResourceNotFoundError:
            return None

    def find(self):
        blobs = self.container_client.list_blobs()
        blob_list = []
        for blob in blobs:
            blob_list.append(blob)
        return blob_list
