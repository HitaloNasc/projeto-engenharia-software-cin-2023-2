from dotenv import load_dotenv
import os

load_dotenv()
PORT = os.getenv("PORT", 5000)
JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")
URL_SERVICE_DOCUMENTS = os.getenv("URL_SERVICE_DOCUMENTS")
URL_SERVICE_OCR = os.getenv("URL_SERVICE_OCR")
URL_SERVICE_IA = os.getenv("URL_SERVICE_IA")
URL_SERVICE_RESULTS = os.getenv("URL_SERVICE_RESULTS")
