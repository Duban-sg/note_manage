from src.model import NoteIn,Note
from typing import List
from fastapi import FastAPI,HTTPException
from pydantic import BaseModel
from datetime import date
import src.persistence.mongo_db.main as mongo_db


app = FastAPI()
basededatos = mongo_db.mongo_db()
basededatos.setNameCollection('note_manage','notes')



@app.post("/nota/", response_model= Note.Note)
async def read_item( noteIn:NoteIn.NoteIn):
    note = Note.Note(**noteIn.dict(), fecha_creacion = str(date.today()))
    resutl = basededatos.insertInColeccition(note.dict())
    note.id = str(resutl.inserted_id)
    return note

@app.get("/notas/",response_model=List[Note.Note])
def read_item() :
    collectionResult = []
    resutl = basededatos.getAllDocumentInCollection()
    for x in resutl:
        collectionResult.append(Note.Note(**x))
    return collectionResult


@app.put("/notas/{idnote}",Note.Note)
def read_item(idnote: str,noteIn:NoteIn.NoteIn) :
    resutl = basededatos.getAllDocumentInCollection(idnote,noteIn.dick())
    if resutl :
        Note = basededatos.getOneDocumentInCollection(idnote)
        return Note
    else :
        raise HTTPException(status_code=404, detail="Note Not found")

    
@app.delete("/notas/{idnote}",Note.note)
def delete_note(idNote: str): 
    result = basededatos.deleteDocumentByIdInCollecction(idNote)
    if result :
        return idNote
    else :
        raise HTTPException(status_code=404, detail = "Note not found")
