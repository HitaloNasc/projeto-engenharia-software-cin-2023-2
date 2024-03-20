import motor.motor_asyncio

class TextRepository:
    def __init__(self, db_uri, db_name):
        self.client = motor.motor_asyncio.AsyncIOMotorClient(db_uri)
        self.db = self.client[db_name]

    async def get_text(self, document_id):
        document = await self.db.texts.find_one({"_id": document_id})
        if document:
            return document.get("text")
        else:
            return None
