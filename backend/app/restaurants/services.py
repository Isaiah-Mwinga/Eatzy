from config.database import get_db
from fastapi import APIRouter, Depends, status, Response, HTTPException
from sqlalchemy.orm import Session
from restaurants.schema import Restaurant
from restaurants.models import Restaurant
from restaurants import models

def create_restaurant(request:Restaurant, db:Session = Depends(get_db)):
    new_restaurant = models.Restaurant(
        name=request.name, 
        address=request.address, 
        phone=request.phone, email=request.email, 
        description=request.description, 
        is_active=request.is_active, 
        #owner_id=request.owner_id
        )
    db.add(new_restaurant)
    db.commit()
    db.refresh(new_restaurant)
    return new_restaurant

def get_all_restaurants(db:Session = Depends(get_db)):
    restaurants = db.query(models.Restaurant).all()
    return restaurants

def get_restaurant(id:int, response:Response, db:Session = Depends(get_db)):
    restaurant = db.query(models.Restaurant).filter(models.Restaurant.id == id).first()
    if not restaurant:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Restaurant with id {id} not found")
    return restaurant

def delete_restaurant(id:int, response:Response, db:Session = Depends(get_db)):
    restaurant = db.query(models.Restaurant).filter(models.Restaurant.id == id)
    if not restaurant.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Restaurant with id {id} not found")
    restaurant.delete(synchronize_session=False)
    db.commit()
    return 'done'

def update_restaurant(id:int, request:Restaurant, db:Session = Depends(get_db)):
    restaurant = db.query(models.Restaurant).filter(models.Restaurant.id == id)
    if not restaurant.first():
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, 
            detail=f"Restaurant with id {id} not found"
            )
    restaurant.update(request)
    db.commit()
    return 'updated'
