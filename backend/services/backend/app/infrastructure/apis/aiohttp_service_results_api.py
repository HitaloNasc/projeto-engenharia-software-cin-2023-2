import aiohttp
from app.env import URL_SERVICE_RESULTS


class AiohttpServiceDocumentsApi:
    def __init__(self):
        self.base_url = URL_SERVICE_RESULTS

    async def get(self, endpoint):
        url = f"{self.base_url}/{endpoint}"
        async with aiohttp.ClientSession() as session:
            async with session.get(url) as response:
                return await self.handle_response(response)

    async def post(self, endpoint, data):
        url = f"{self.base_url}/{endpoint}"
        async with aiohttp.ClientSession() as session:
            async with session.post(url, json=data) as response:
                return await self.handle_response(response)

    async def post_file(self, endpoint, file):
        url = f"{self.base_url}/{endpoint}"
        async with aiohttp.ClientSession() as session:
            async with session.post(url, data=file) as response:
                return await self.handle_response(response)

    async def put(self, endpoint, data):
        url = f"{self.base_url}/{endpoint}"
        async with aiohttp.ClientSession() as session:
            async with session.put(url, json=data) as response:
                return await self.handle_response(response)

    async def delete(self, endpoint):
        url = f"{self.base_url}/{endpoint}"
        async with aiohttp.ClientSession() as session:
            async with session.delete(url) as response:
                return await self.handle_response(response)

    async def handle_response(self, response):
        if response.status == 200:
            return await response.json()
        elif response.status == 404:
            return None
        else:
            raise Exception(f"Erro ao fazer a requisição: {response.status}")
