FROM        python:3.8-alpine

ENV         PYTHONUNBUFFERED=1

WORKDIR     /home

COPY        ./pyproject.toml .

COPY        * .

RUN         poetry install --no-dev


EXPOSE      8000

CMD         ["uvicorn", "main:app", "--port", "8000", "--host", "0.0.0.0"]