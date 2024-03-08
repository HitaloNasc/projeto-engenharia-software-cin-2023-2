import motor.motor_asyncio
from dotenv import load_dotenv
import os

load_dotenv()

MONGO_CONNECTION_URI = os.getenv("MONGO_CONNECTION_URI")


class MongoDBConnection:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            try:
                cls._instance.client = motor.motor_asyncio.AsyncIOMotorClient(
                    MONGO_CONNECTION_URI
                )
                print(
                    ">>>>>>>>>>>>>>>>>>> NEW CONCTION >>>>>>>>>>>>>>>>>>>>",
                    flush=True,
                )
                cls._instance.db = cls._instance.client.get_database()
            except motor.motor_asyncio.errors.ConnectionError as e:
                print(f"Error connecting to MongoDB: {e}")
                cls._instance = None
        return cls._instance

    def get_collection(self, name):
        return self.db.get_collection(name)


def get_mongodb_connection():
    return MongoDBConnection()


mongodb_connection = get_mongodb_connection()
