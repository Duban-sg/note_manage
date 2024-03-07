from pydantic import BaseModel

class NotesList(BaseModel,list):
    def __init__(self,any):
        super(any)