from pydantic import BaseModel

class coordinates(BaseModel):
    lat: float
    lng: float

class Restaurant(BaseModel):
    name: str
    address: str
    phone: str
    email: str
    description: str
    location: coordinates
    is_active: bool
    #owner_id: int

class Menu(BaseModel):
    name: str
    description: str
    price: str
    is_active: bool
    restaurant_id: int


class Order(BaseModel):
    name: str
    phone: str
    address: str
    email: str
    is_active: bool
    menu_id: int
