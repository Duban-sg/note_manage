from src.core.config import get_var
from src.model import NoteIn,Note
from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel
from datetime import date
import src.persistence.mongo_db.main as mongo_db




app = FastAPI()
basededatos = mongo_db.mongo_db()



@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.post("/nota/registrar", response_model= Note.Note)
async def read_item( noteIn:NoteIn.NoteIn):
    note = Note.Note(**noteIn.dict(), fecha_creacion = str(date.today()))
    resutl = basededatos.insertInColeccition('note_manage','notes',note.dict())
    note.id = str(resutl.inserted_id)
    return note

@app.get("/notas/")
def read_item()->list[Note.Note]:
    collectionResult = []
    resutl = basededatos.getAllDocumentInCollection('note_manage','notes')
    for x in resutl:
        collectionResult.append(Note.Note(**x))
    return collectionResult


@app.get("/pruebaTest/")
def read_item():
    return "version 2"