from pydantic import BaseModel
from typing import Union
from src.model import Note
from typing import  List


class Categoria(BaseModel):
    _id : Union[str, None] = None
    name : Union[str, None] = None
    autor: Union[str, None] = None
    fecha_creacion : Union[str, None] = None
    notes: List[Note.Note] = []
    
    




