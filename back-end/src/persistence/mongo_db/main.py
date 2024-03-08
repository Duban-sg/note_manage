from pymongo import MongoClient
from src.core.config import get_var
from datetime import date
from bson import ObjectId

class mongo_db:
    database: MongoClient = None 
    usuario : str
    password: str
    server:   str
    appname: str
    stringConecction: str
    nameDatabase:str
    nameCollection:str

    def __init__(self) -> None:
        self.usuario = get_var("user_data_base")
        self.password = get_var("password_data_base")
        self.server = get_var("server_data_base")
        self.appname = get_var("appname_data_base")
        stringConecction = 'mongodb+srv://'+self.usuario+':'+self.password+'@'+self.server+'/?retryWrites=true&w=majority&appName='+self.appname
        self.database = MongoClient(stringConecction)

    def setNameCollection(self,nameCollection):
        self.nameCollection = nameCollection
    
    def setNameDatabase(self,nameDatabase):
        self.nameDatabase = nameDatabase

    def insertInColeccition(self,document):
        db = self.database[self.nameDatabase]
        collection = db[self.nameCollection]
        result = collection.insert_one(document)
        return result
    
    def getAllDocumentInCollection(self,filter=None):
        db = self.database[self.nameDatabase]
        collection = db[self.nameCollection] 
        if (filter != None ):
            allDocuments = collection.find({},filter)
        else: 
            allDocuments = collection.find()
        allDocuments = list(map(lambda x: self.convertIdMongoInObjectToStr(x), allDocuments))
        return allDocuments
    
    def getOneDocumentInCollection(self,id):
        db = self.database[self.nameDatabase]
        collection = db[self.nameCollection]
        note = collection.find_one({"_id": ObjectId(id)})
        note = self.convertIdMongoInObjectToStr(note)
        return note 
        
    
    def updateDocumentByIdInCollecction(self,id,document):
        db = self.database[self.nameDatabase]
        collection = db[self.nameCollection] 

        response = collection.update_one({
            '_id': ObjectId(id)
        },{
            '$set': {**document,'fecha_modificacion':str(date.today())}
        })

        if response.modified_count > 0 :
            return True
        else:
            return False
        
    def deleteDocumentByIdInCollecction(self,id):
        db = self.database[self.nameDatabase]
        collection = db[self.nameCollection] 
        response = collection.delete_one(
        {
        '_id': ObjectId(id)
        })

        if response.deleted_count > 0 :
            return True
        else:
            return False
        

    def convertIdMongoInObjectToStr(self,item):
        item['_id'] = str(item['_id'])
        return item

        

        
            
            









