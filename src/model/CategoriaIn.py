from pydantic import BaseModel
from typing import Union


class CategoriaIn(BaseModel):
    name : Union[str, None] = None
    autor: Union[str, None] = None






