from app.infrastructure.repositories.repository import Repository


class MongoDocumentsMetadataRepository(Repository):
    def __init__(self, db_connection):
        self.collection = db_connection.get_collection("documents_metadata")

    async def delete(self, document_id):
        filter_ = {"_id": document_id}
        result = await self.collection.update_one(filter_, {"$set": {"status": 0}})
        return result.modified_count

    async def find(self):
        cursor = self.collection.find({"status": 1})
        documents = await cursor.to_list(length=None)

        serialized_documents = []
        for document in documents:
            document["_id"] = str(document["_id"])
            serialized_documents.append(document)

        return serialized_documents

    async def find_one(self, document_id):
        filter_ = {"_id": document_id}
        document = await self.collection.find_one(filter_)
        if document:
            document["_id"] = str(document["_id"])
        return document

    async def insert(self, document):
        await self.collection.insert_one(document)
        return document

    async def update(self, document_id, update_data):
        filter_ = {"_id": document_id}
        result = await self.collection.update_one(filter_, {"$set": update_data})
        return result.modified_count
