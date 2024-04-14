from src.model import NoteIn,Note
from typing import List
from fastapi import FastAPI,HTTPException
from pydantic import BaseModel
from datetime import date
import src.persistence.mongo_db.main as mongo_db
from pydantic import json
from bson import ObjectId
from fastapi.encoders import jsonable_encoder
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://localhost:3001",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


json.ENCODERS_BY_TYPE[ObjectId]=str
basededatos = mongo_db.mongo_db()
basededatos.setNameDatabase('note_manage')
basededatos.setNameCollection('notes')



@app.post("/notas/")
async def saveNotes( noteIn:NoteIn.NoteIn):
    note = Note.Note(**noteIn.dict(), fecha_creacion = str(date.today()))
    resutl = basededatos.insertInColeccition(note.dict())
    response = {**note.dict(), '_id':str(resutl.inserted_id)}
    return response

@app.get("/notas/")
def getNotes() :
    resutl = basededatos.getAllDocumentInCollection()
    return resutl


@app.put("/notas/{idnote}")
def updateNotes(idnote: str,noteIn:NoteIn.NoteIn) :
    noteIn = jsonable_encoder(noteIn)
    resutl = basededatos.updateDocumentByIdInCollecction(idnote,noteIn)
    if resutl :
        Note = basededatos.getOneDocumentInCollection(idnote)
        return Note
    else :
        raise HTTPException(status_code=404, detail="Note Not found")

    
@app.delete("/notas/{idnote}")
def delete_note(idnote: str): 
    result = basededatos.deleteDocumentByIdInCollecction(idnote)
    if result :
        id = idnote
        return id
    else :
        raise HTTPException(status_code=404, detail = "Note not found")
    
@app.post("/categorias/")
async def saveNotes( noteIn:CategoriasIn.CategoriasIn):
    note = Note.Note(**noteIn.dict(), fecha_creacion = str(date.today()))
    resutl = basededatos.insertInColeccition(note.dict())
    response = {**note.dict(), '_id':str(resutl.inserted_id)}
    return response
