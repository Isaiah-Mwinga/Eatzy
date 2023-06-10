from config.database import get_db
from fastapi import APIRouter, Depends, status, Response, HTTPException
from sqlalchemy.orm import Session
from resturants import schemas, models

def create_resturant(request:schemas.Resturant, db:Session = Depends(get_db)):
    new_resturant = models.Resturant(name=request.name, address=request.address, phone=request.phone, email=request.email, description=request.description, is_active=request.is_active, owner_id=request.owner_id)
    db.add(new_resturant)
    db.commit()
    db.refresh(new_resturant)
    return new_resturant

def get_all_resturants(db:Session = Depends(get_db)):
    resturants = db.query(models.Resturant).all()
    return resturants

def get_resturant(id:int, response:Response, db:Session = Depends(get_db)):
    resturant = db.query(models.Resturant).filter(models.Resturant.id == id).first()
    if not resturant:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Resturant with id {id} not found")
    return resturant

def delete_resturant(id:int, response:Response, db:Session = Depends(get_db)):
    resturant = db.query(models.Resturant).filter(models.Resturant.id == id)
    if not resturant.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Resturant with id {id} not found")
    resturant.delete(synchronize_session=False)
    db.commit()
    return 'done'

def update_resturant(id:int, request:schemas.Resturant, db:Session = Depends(get_db)):
    resturant = db.query(models.Resturant).filter(models.Resturant.id == id)
    if not resturant.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Resturant with id {id} not found")
    resturant.update(request)
    db.commit()
    return 'updated'
