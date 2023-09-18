from fastapi import APIRouter, Depends, HTTPException, status, Response, Request
from sqlalchemy.orm import Session
from config.database import get_db
from restaurants.models import Order
from restaurants.schema import Order
from restaurants import models

def create_order(request:Order, db:Session = Depends(get_db)):
    new_order = models.Order(
        name=request.name, 
        phone=request.phone, 
        address=request.address, 
        email=request.email, 
        is_active=request.is_active, 
        menu_id=request.menu_id
        )
    db.add(new_order)
    db.commit()
    db.refresh(new_order)
    return new_order

def get_all_orders(db:Session = Depends(get_db)):
    orders = db.query(models.Order).all()
    return orders

def get_order(id:int, response:Response, db:Session = Depends(get_db)):
    order = db.query(models.Order).filter(models.Order.id == id).first()
    if not order:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Order with id {id} not found")
    return order

def delete_order(id:int, response:Response, db:Session = Depends(get_db)):
    order = db.query(models.Order).filter(models.Order.id == id)
    if not order.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Order with id {id} not found")
    order.delete(synchronize_session=False)
    db.commit()
    return 'done'

def update_order(id:int, request:Order, db:Session = Depends(get_db)):
    order = db.query(models.Order).filter(models.Order.id == id)
    if not order.first():
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, 
            detail=f"Order with id {id} not found"
            )
    order.update(request)
    db.commit()
    return 'updated'

    