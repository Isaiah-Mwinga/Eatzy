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
    is_active = Column(Boolean, default=False)
    #owner_id = Column(Integer, ForeignKey("users.id"))
    #owner = relationship("User", back_populates="restaurants")
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


#class User(Base):
#    __tablename__ = "users"
#
#    id = Column(Integer, primary_key=True, index=True)
#    name = Column(String)
#    email = Column(String)
#    password = Column(String)
#    is_staff = Column(Boolean, default=False)
#    is_active = Column(Boolean, default=False)
#    restaurants = relationship("Restaurant", back_populates="owner")


class Order(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    phone = Column(String)
    address = Column(String)
    email = Column(String)
    is_active = Column(Boolean, default=False)
    #menu_id = Column(Integer, ForeignKey("menus.id"))
    #menu = relationship("Menu", back_populates="order")