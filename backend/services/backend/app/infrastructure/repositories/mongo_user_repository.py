from app.infrastructure.repositories.repository import Repository


class MongoUserRepository(Repository):
    def __init__(self, db_connection):
        self.collection = db_connection.get_collection("users")

    async def delete(self, user_id):
        filter_ = {"_id": user_id}
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

    async def find_one(self, user_id):
        filter_ = {"_id": user_id}
        document = await self.collection.find_one(filter_)
        if document:
            document["_id"] = str(document["_id"])
        return document

    async def find_by_email(self, email):
        filter_ = {"email": email}
        document = await self.collection.find_one(filter_)
        if document:
            document["_id"] = str(document["_id"])
        return document

    async def find_by_name(self, name):
        filter_ = {"name": name}
        document = await self.collection.find_one(filter_)
        if document:
            document["_id"] = str(document["_id"])
        return document

    async def insert(self, user):
        await self.collection.insert_one(user)
        return user

    async def update(self, user_id, update_data):
        filter_ = {"_id": user_id}
        result = await self.collection.update_one(filter_, {"$set": update_data})
        return result.modified_count
