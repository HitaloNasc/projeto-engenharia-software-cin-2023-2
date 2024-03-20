from dotenv import load_dotenv
import os

load_dotenv()
PORT = os.getenv("PORT", 5050)
