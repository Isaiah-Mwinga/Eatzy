FROM tiangolo/uvicorn-gunicorn-fastapi:python3.9

COPY ./app /app

RUN poetry install --no-dev

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]