from bson import ObjectId
from app.infrastructure.repositories.repository import Repository


class MongoTranscriptionRepository(Repository):
    def __init__(self, db_connection):
        self.collection = db_connection.get_collection("transcriptions")

    async def insert(self, transcription_data):
        result = await self.collection.insert_one(transcription_data)
        return str(result.inserted_id)

    async def find(self):
        cursor = self.collection.find()
        documents = await cursor.to_list(length=None)

        serialized_documents = []
        for document in documents:
            document["_id"] = str(document["_id"])
            serialized_documents.append(document)

        return serialized_documents
    
    async def delete(self, transcription_id):
        result = await self.collection.delete_one({"_id": ObjectId(transcription_id)})
        return result.deleted_count 

    async def find_one(self, transcription_id):
        document = await self.collection.find_one({"_id": ObjectId(transcription_id)})
        
        if document:
            document["_id"] = str(document["_id"])
            return document

    def update(self):
        pass
