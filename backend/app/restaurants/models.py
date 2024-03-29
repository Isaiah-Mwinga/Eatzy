from sqlalchemy.orm import relationship
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from config.database import Base


class Restaurant(Base):
    __tablename__ = "restaurants"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    address = Column(String)
    phone = Column(String)
    email = Column(String)
    description = Column(String)
    location = Column(String)
    is_active = Column(Boolean, default=False)
    menu = relationship("Menu", back_populates="restaurant")


class Menu(Base):
    __tablename__ = "menus"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    description = Column(String)
    price = Column(String)
    is_active = Column(Boolean, default=False)
    restaurant_id = Column(Integer, ForeignKey("restaurants.id"))
    restaurant = relationship("Restaurant", back_populates="menu")
    order = relationship("Order", back_populates="menu")

class Order(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    phone = Column(String)
    address = Column(String)
    email = Column(String)
    is_active = Column(Boolean, default=False)
    menu_id = Column(Integer, ForeignKey("menus.id"))
    menu = relationship("Menu", back_populates="order")