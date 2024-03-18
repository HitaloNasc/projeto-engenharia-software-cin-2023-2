from azure.storage.blob import BlobServiceClient
from dotenv import load_dotenv
import os

load_dotenv()

BLOG_CONNECTION_KEY = os.getenv("BLOG_CONNECTION_KEY")


class BlogStorageConnection:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            try:
                cls._instance = BlobServiceClient.from_connection_string(
                    BLOG_CONNECTION_KEY
                )
                print(
                    ">>>>>>>>>>>>>>>>>>> NEW BLOB CONCTION >>>>>>>>>>>>>>>>>>>>",
                    flush=True,
                )
            except Exception as e:
                print(f"Error connecting to Blog Storage: {e}")
                cls._instance = None
        return cls._instance


def get_connection():
    return BlogStorageConnection()


blob_client = get_connection()
