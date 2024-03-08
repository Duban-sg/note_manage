from src.model import NoteIn,Note
from typing import List
from fastapi import FastAPI,HTTPException
from pydantic import BaseModel
from datetime import date
import src.persistence.mongo_db.main as mongo_db
from pydantic import json
from bson import ObjectId
from fastapi.encoders import jsonable_encoder


app = FastAPI()
json.ENCODERS_BY_TYPE[ObjectId]=str
basededatos = mongo_db.mongo_db()
basededatos.setNameDatabase('note_manage')
basededatos.setNameCollection('notes')




@app.post("/nota/", response_model= Note.Note)
async def read_item( noteIn:NoteIn.NoteIn):
    note = Note.Note(**noteIn.dict(), fecha_creacion = str(date.today()))
    resutl = basededatos.insertInColeccition(note.dict())
    note._id = str(resutl.inserted_id)
    return note

@app.get("/notas/")
def read_item() :
    resutl = basededatos.getAllDocumentInCollection()
    return resutl


@app.put("/notas/{idnote}",response_model=Note.Note)
def read_item(idnote: str,noteIn:NoteIn.NoteIn) :
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
        return idNote
    else :
        raise HTTPException(status_code=404, detail = "Note not found")
