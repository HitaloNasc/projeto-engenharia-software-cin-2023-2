from app.infrastructure.repositories.repository import Repository
from bson import ObjectId

class MongoResultsRepository(Repository):
    def __init__(self, db_connection):
        self.collection = db_connection.get_collection("results")

    async def delete(self, document_id):        
        result = await self.collection.delete_one({"_id": ObjectId(document_id)})
        return result.deleted_count > 0

    async def find_one(self, document_id):
        document = await self.collection.find_one({"_id": ObjectId(document_id)})
        
        if document:
            document["_id"] = str(document["_id"])
            return document


    async def insert(self, document_name, document_id, created_at):
        document = {
            "_id": ObjectId(),  # Gera um novo ObjectID automaticamente
            "document_name": document_name,
            "document_id": document_id,
            "created_at": created_at,
            "form": {}
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
