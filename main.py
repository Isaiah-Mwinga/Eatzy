import os   
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI

from app.users import auth

from fastapi.testclient import TestClient


app = FastAPI()

app.include_router(auth.router)


client = TestClient(app)

# NEW
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)