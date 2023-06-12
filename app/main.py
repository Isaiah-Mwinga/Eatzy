import uvicorn
from fastapi import FastAPI
from config.database import engine
from config.database import Base
from auth import authrouter
from users import usersrouter
from restaurants import router

from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


Base.metadata.create_all(bind=engine)


app.include_router(usersrouter.router)
app.include_router(authrouter.router)
app.include_router(router.router)




if __name__ == "__main__":
    uvicorn.run("main:app", reload=True)