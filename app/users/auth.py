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

@router.get("/docs", response_class=HTMLResponse, include_in_schema=False, dependencies=[Depends(HTTPBearer())])
def redoc_html(request: Request)-> HTMLResponse:
    root_path = request.scope.get("root_path", "").rstrip("/")
    openapi_url = root_path + "/openapi.json"
    return get_redoc_html(openapi_url=openapi_url, title="API Docs")

@router.get("/openapi.json", response_class=HTMLResponse, include_in_schema=False, dependencies=[Depends(HTTPBearer())])
def openapi(request: Request)-> JSONResponse:
    urls = (server_data.get("url")for server_data in request.app.servers)
    server_urls = [url for url in urls if url]
    rooth_path = request.scope.get("root_path", "").rstrip("/")
    if rooth_path not in server_urls:
        if rooth_path and request.app.rooth_path_in_servers:
            request.app.servers.insert(0,{"url": rooth_path})
            server_urls.add(rooth_path)
    return JSONResponse(request.app.openapi())

@router.post("/login")
async def user_login(user: UserLoginSchema = Body(...)):
    if authenticate(user):
        return sign_jwt(user.email)
    raise HTTPException(status_code=401, detail="Invalid username or password")