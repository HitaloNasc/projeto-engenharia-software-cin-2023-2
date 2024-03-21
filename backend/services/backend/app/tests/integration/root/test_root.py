import pytest
import json
from app.app import app


@pytest.mark.asyncio
async def test_root():
    client = app.test_client()
    response = await client.get("/")

    response_encoded = await response.data
    response_data = json.loads(response_encoded.decode())

    assert response.status_code == 200
    assert response_data.get("message") == "OK"
