from app.usecases.usecase import Usecase
from app.infrastructure.repositories.repository import Repository
from typing import Dict, Any
import fitz
from PIL import Image, ImageEnhance, ImageFilter
import pytesseract
from io import BytesIO


class CreateTranscriptionUseCase(Usecase):
    def __init__(self, repository: Repository):
        self.repository = repository

    async def execute(self, transcription_data: Dict[str, Any]) -> str:
        transcription_id = await self.repository.insert(transcription_data)
        return transcription_id

    async def extract_text_from_pdf(pdf_file):

        pdf_data = pdf_file.read()

        pdf_stream = BytesIO(pdf_data)

        pdf_document = fitz.open(stream=pdf_stream, filetype="pdf")

        extracted_text = []

        for page_number in range(pdf_document.page_count):

            page = pdf_document.load_page(page_number)

            image_matrix = page.get_pixmap()

            image = Image.frombytes(
                "RGB", [image_matrix.width, image_matrix.height], image_matrix.samples)

            enhancer = ImageEnhance.Contrast(image)
            image = enhancer.enhance(1.5)
            enhancer = ImageEnhance.Brightness(image)
            image = enhancer.enhance(1.2)
            image = image.filter(ImageFilter.SHARPEN)
            image = image.filter(ImageFilter.SMOOTH_MORE)

            # pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

            text = pytesseract.image_to_string(image)
            extracted_text.append(text)

        pdf_document.close()

        combined_text = "\n".join(extracted_text)
        return combined_text
