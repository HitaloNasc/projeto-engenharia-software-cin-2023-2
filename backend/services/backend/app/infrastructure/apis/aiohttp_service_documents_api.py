import requests
from app.env import URL_SERVICE_DOCUMENTS


class AiohttpServiceDocumentsApi:
    def __init__(self):
        self.base_url = URL_SERVICE_DOCUMENTS

    async def get(self, endpoint):
        url = f"{self.base_url}/{endpoint}"
        response = requests.get(url)
        return await self.handle_response(response)

    async def post(self, endpoint, data):
        url = f"{self.base_url}/{endpoint}"
        response = requests.post(url, json=data)
        return await self.handle_response(response)

    async def post_file(self, endpoint, file):
        url = f"{self.base_url}/{endpoint}"
        response = requests.post(url, data=file)
        return await self.handle_response(response)

    async def put(self, endpoint, data):
        url = f"{self.base_url}/{endpoint}"
        response = requests.put(url, json=data)
        return await self.handle_response(response)

    async def delete(self, endpoint):
        url = f"{self.base_url}/{endpoint}"
        response = requests.delete(url)
        return await self.handle_response(response)

    async def handle_response(self, response):
        if response.status_code == 200:
            return response.json()
        elif response.status_code == 404:
            return None
        else:
            raise Exception(
                f"Erro ao fazer a requisição: {response.status_code}")
