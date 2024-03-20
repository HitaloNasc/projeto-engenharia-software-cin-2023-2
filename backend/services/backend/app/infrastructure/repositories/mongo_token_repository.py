from app.infrastructure.repositories.repository import Repository


class MongoTokenRepository(Repository):
    def __init__(self, db_connection):
        self.collection = db_connection.get_collection("tokens")

    async def delete(self, user_id):
        filter_ = {"_id": user_id}
        result = await self.collection.delete_many(filter_)
        return result.deleted_count

    async def find(self):
        cursor = self.collection.find({"status": 1})
        documents = await cursor.to_list(length=None)

        serialized_documents = []
        for document in documents:
            document["_id"] = str(document["_id"])
            serialized_documents.append(document)

        return serialized_documents

    async def find_one(self, user_id):
        filter_ = {"_id": user_id}
        document = await self.collection.find_one(filter_)
        if document:
            document["_id"] = str(document["_id"])
        return document

    async def find_by_token(self, token):
        filter_ = {"token": token}
        document = await self.collection.find_one(filter_)
        if document:
            document["_id"] = str(document["_id"])
        return document

    async def insert(self, token):
        await self.collection.insert_one(token)
        return token

    async def update(self, user_id, token_data):
        filter_ = {"_id": user_id}
        result = await self.collection.update_one(filter_, {"$set": token_data})
        return result.modified_count
