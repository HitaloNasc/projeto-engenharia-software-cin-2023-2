from app.infrastructure.repositories.repository import Repository


class MongoTemplateRepository(Repository):
    def __init__(self, db_connection):
        self.collection = db_connection.get_collection("products")

    def delete(self):
        pass

    def find_one(self):
        pass

    def insert(self):
        pass

    def update(self):
        pass

    async def find(self):
        cursor = self.collection.find()
        documents = await cursor.to_list(length=None)

        serialized_documents = []
        for document in documents:
            document["_id"] = str(document["_id"])
            serialized_documents.append(document)

        return serialized_documents
