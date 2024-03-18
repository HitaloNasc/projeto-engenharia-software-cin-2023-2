from app.infrastructure.repositories.repository import Repository
from bson import ObjectId

# FIXME essa classe está usando um ObjectId, contudo ela deveria usar um UUID como _id
class MongoResultsRepository(Repository):
    def __init__(self, db_connection):
        self.collection = db_connection.get_collection("results")

    async def delete(self, _id):
        result = await self.collection.delete_one({"_id": ObjectId(_id)})
        return result.deleted_count > 0

    async def find_one(self, _id):
        document = await self.collection.find_one({"_id": ObjectId(_id)})

        if document:
            document["_id"] = str(document["_id"])
            return document

    async def insert(self, document_name, document_id, created_at, form):
        document = {
            "_id": ObjectId(),  # Gera um novo ObjectID automaticamente
            "document_name": document_name,
            "document_id": document_id,
            "created_at": created_at,
            "form": form
        }
        result = await self.collection.insert_one(document)
        return str(result.inserted_id)

    async def update(self, document_id, updated_document):
        result = await self.collection.replace_one({"_id": ObjectId(document_id)}, updated_document)
        return result.modified_count > 0

    async def find(self):
        cursor = self.collection.find()
        documents = await cursor.to_list(length=None)

        serialized_documents = []
        for document in documents:
            document["_id"] = str(document["_id"])
            serialized_documents.append(document)

        return serialized_documents
