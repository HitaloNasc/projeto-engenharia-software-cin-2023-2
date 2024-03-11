FROM python:3.11.4-slim

WORKDIR /app

COPY . /app

RUN pip install -r requirements.txt

ENTRYPOINT [ "python" ]

CMD [ "main.py" ]