from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from config.database import get_db
from restaurants.models import Order
from restaurants.schema import Order
from order.services import create_order, get_all_orders, get_order, delete_order, update_order

router = APIRouter(prefix="/orders", tags=["Orders"])

@router.post("/order")
def createOrder(order: Order, db: Session = Depends(get_db)):
    return create_order(request=order, db=db)

@router.get("/order")
def getAllOrders(db: Session = Depends(get_db)):
    return get_all_orders(db=db)

@router.get("/order/{id}", response_model=Order)
def getOrder(id:int, db: Session = Depends(get_db)):
    return get_order(id=id, db=db)

@router.delete("/order/{id}")
def deleteOrder(id:int, db: Session = Depends(get_db)):
    return delete_order(id=id, db=db)

@router.put("/order/{id}")
def updateOrder(id:int, order: Order, db: Session = Depends(get_db)):
    return update_order(id=id, request=order, db=db)

    