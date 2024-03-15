FROM python:3.11.4-alpine

WORKDIR /app

COPY requirements.txt /app
RUN pip install --no-cache-dir -r requirements.txt

COPY app /app/app

CMD ["python", "app/main.py"]
