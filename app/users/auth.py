from fastapi import Depends, FastAPI, HTTPException, status, APIRouter
from pydantic import BaseModel
from app.users.schemas import Token, User, UserInDB
from typing import Annotated
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from app.users.services import authenticate_user, create_access_token, get_current_active_user

router = APIRouter(
    prefix="/users",
    tags=["auth"],
)

