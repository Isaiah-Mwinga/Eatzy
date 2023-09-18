from config.database import get_db
from fastapi import APIRouter, Depends, status, Response, HTTPException
from sqlalchemy.orm import Session
from restaurants.schema import Menu
from restaurants.models import Menu
from restaurants import models

def create_menu(request:Menu, db:Session = Depends(get_db)):
    new_menu = models.Menu(
        name=request.name, 
        description=request.description, 
        price=request.price, 
        is_active=request.is_active, 
        restaurant_id=request.restaurant_id
        )
    db.add(new_menu)
    db.commit()
    db.refresh(new_menu)
    return new_menu

def get_all_menus(db:Session = Depends(get_db)):
    menus = db.query(models.Menu).all()
    return menus

def get_menu(id:int, response:Response, db:Session = Depends(get_db)):
    menu = db.query(models.Menu).filter(models.Menu.id == id).first()
    if not menu:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Menu with id {id} not found")
    return menu

def delete_menu(id:int, response:Response, db:Session = Depends(get_db)):
    menu = db.query(models.Menu).filter(models.Menu.id == id)
    if not menu.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Menu with id {id} not found")
    menu.delete(synchronize_session=False)
    db.commit()
    return 'done'

def update_menu(id:int, request:Menu, db:Session = Depends(get_db)):
    menu = db.query(models.Menu).filter(models.Menu.id == id)
    if not menu.first():
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, 
            detail=f"Menu with id {id} not found"
            )
    menu.update(request)
    db.commit()
    return 'updated'

# Path: app/menu/models.py
