from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from config.database import get_db
from restaurants.models import Restaurant
from restaurants.schema import Restaurant
from restaurants.services import create_restaurant, get_all_restaurants, get_restaurant, delete_restaurant, update_restaurant

router = APIRouter(prefix="/restaurants", tags=["Restaurants"])


@router.post("/")
def createRestaurant(restaurant: Restaurant, db: Session = Depends(get_db)):
    return create_restaurant(request=restaurant, db=db)

@router.get("/")
def getAllRestaurants(db: Session = Depends(get_db)):
    return get_all_restaurants(db=db)

@router.get("/{id}", response_model=Restaurant)
def getRestaurant(id:int, db: Session = Depends(get_db)):
    return get_restaurant(id=id, db=db)

@router.delete("/{id}")
def deleteRestaurant(id:int, db: Session = Depends(get_db)):
    return delete_restaurant(id=id, db=db)

@router.put("/{id}")
def updateRestaurant(id:int, restaurant: Restaurant, db: Session = Depends(get_db)):
    return update_restaurant(id=id, request=restaurant, db=db)

