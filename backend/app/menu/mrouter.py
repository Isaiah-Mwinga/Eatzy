from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from config.database import get_db
from restaurants.models import Menu
from restaurants.schema import Menu
from menu.services import create_menu, get_all_menus, get_menu, delete_menu, update_menu

router = APIRouter(prefix="/menus", tags=["Menus"])

@router.post("/menu")
def createMenu(menu: Menu, db: Session = Depends(get_db)):
    return create_menu(request=menu, db=db)

@router.get("/menu")
def getAllMenus(db: Session = Depends(get_db)):
    return get_all_menus(db=db)

@router.get("/menu/{id}", response_model=Menu)
def getMenu(id:int, db: Session = Depends(get_db)):
    return get_menu(id=id, db=db)

@router.delete("/menu/{id}")
def deleteMenu(id:int, db: Session = Depends(get_db)):
    return delete_menu(id=id, db=db)

@router.put("/menu/{id}")
def updateMenu(id:int, menu: Menu, db: Session = Depends(get_db)):
    return update_menu(id=id, request=menu, db=db)

