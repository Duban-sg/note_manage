from pydantic import BaseModel
from typing import Union

class Note(BaseModel):
    _id : Union[str, None] = None
    fecha_creacion : Union[str, None] = None
    title: Union[str, None] = None
    content: Union[str, None] = None
    fecha_modificacion : Union[str, None] = None

    # def __init__(self,title:Union[str, None]= None, content:Union[str, None]=None ) -> None:
    #     self.id = uuid1()
    #     self.fecha_creacion = date.today()
    #     self.title = title
    #     self.content = content
        



