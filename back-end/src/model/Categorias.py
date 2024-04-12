from pydantic import BaseModel
from typing import Union
from Note import Note


class Categorias(BaseModel):
    _id : Union[str, None] = None
    name : Union[str, None] = None
    notes: list[Note] = []
    




