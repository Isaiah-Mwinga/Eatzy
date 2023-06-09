from pydantic import BaseModel

class Resturant(BaseModel):
    name: str
    address: str
    phone: str
    email: str
    description: str
    is_active: bool
    owner_id: int

class Menu(BaseModel):
    name: str
    description: str
    price: str
    is_active: bool
    restaurant_id: int

class User(BaseModel):
    name: str
    email: str
    password: str
    is_staff: bool
    is_active: bool

