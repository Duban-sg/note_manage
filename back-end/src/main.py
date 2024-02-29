from src.core.config import get_var
from src.model import NoteIn,Note
from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel
from datetime import date
from uuid import uuid1
import src.persistence.mongo_db.main as mongo_db




app = FastAPI()
basededatos = mongo_db.mongo_db()
noteManage = basededatos.database[ "note_manage" ]



@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.post("/registrarNota", response_model= Note.Note)
async def read_item( noteIn:NoteIn.NoteIn):
    note = Note.Note(**noteIn.dict(),id = str(uuid1()), fecha_creacion = str(date.today()))
    print(noteManage.notes.name)
    x = noteManage.notes.insert_one({"x": "10"}).inserted_id
    return note
#