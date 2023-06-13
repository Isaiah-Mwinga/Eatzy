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
