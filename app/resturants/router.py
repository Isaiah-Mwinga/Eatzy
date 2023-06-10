from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from config.database import get_db
from models import Restaurant
from schema import Resturant
from services import create_resturant, get_all_resturants, get_resturant, delete_resturant, update_resturant

router = APIRouter(prefix="/resturants", tags=["Resturants"])


@router.post("/")
def createResturant(resturant: Resturant, db: Session = Depends(get_db)):
    return create_resturant(request=resturant, db=db)

@router.get("/")
def getAllResturants(db: Session = Depends(get_db)):
    return get_all_resturants(db=db)

@router.get("/{id}", response_model=Resturant)
def getResturant(id:int, db: Session = Depends(get_db)):
    return get_resturant(id=id, db=db)

@router.delete("/{id}")
def deleteResturant(id:int, db: Session = Depends(get_db)):
    return delete_resturant(id=id, db=db)

@router.put("/{id}")
def updateResturant(id:int, resturant: Resturant, db: Session = Depends(get_db)):
    return update_resturant(id=id, request=resturant, db=db)

