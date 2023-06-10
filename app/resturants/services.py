from config.database import get_db
from fastapi import APIRouter, Depends, status, Response, HTTPException
from sqlalchemy.orm import Session
from resturants.schema import Restaurant
from resturants.models import Restaurant

def create_resturant(request:Restaurant, db:Session = Depends(get_db)):
    new_restaurant = models.Restaurant(name=request.name, address=request.address, phone=request.phone, email=request.email, description=request.description, is_active=request.is_active, owner_id=request.owner_id)
    db.add(new_restaurant)
    db.commit()
    db.refresh(new_restaurant)
    return new_restaurant

def get_all_resturants(db:Session = Depends(get_db)):
    restaurants = db.query(models.Restaurant).all()
    return restaurants

def get_resturant(id:int, response:Response, db:Session = Depends(get_db)):
    restaurant = db.query(models.Restaurant).filter(models.Restaurant.id == id).first()
    if not restaurant:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Restaurant with id {id} not found")
    return restaurant

def delete_resturant(id:int, response:Response, db:Session = Depends(get_db)):
    restaurant = db.query(models.Restaurant).filter(models.Restaurant.id == id)
    if not restaurant.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Restaurant with id {id} not found")
    restaurant.delete(synchronize_session=False)
    db.commit()
    return 'done'

def update_resturant(id:int, request:Restaurant, db:Session = Depends(get_db)):
    restaurant = db.query(models.Restaurant).filter(models.Restaurant.id == id)
    if not restaurant.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Restaurant with id {id} not found")
    restaurant.update(request)
    db.commit()
    return 'updated'
