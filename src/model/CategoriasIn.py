from pydantic import BaseModel
from typing import Union
from Note import Note


class CategoriasIn(BaseModel):
    name : Union[str, None] = None





