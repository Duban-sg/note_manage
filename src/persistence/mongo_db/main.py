from pymongo import MongoClient
from src.core.config import get_var
from datetime import date
from bson import ObjectId

class mongo_db:
    database: MongoClient = None 
    usuario : str
    password: str
    server:   str
    port: str
    appname: str
    stringConecction: str
    nameDatabase:str
    nameCollection:str

    def __init__(self) -> None:
        self.usuario = get_var("user_data_base")
        self.password = get_var("password_data_base")
        self.server = get_var("server_ip_data_base")
        self.port = get_var("server_port_data_base")
        self.appname = get_var("appname_data_base")
        self.stringConecction = "mongodb://"+self.usuario+":"+self.password+"@"+self.server+":"+self.port +"/"+self.appname+"?directConnection=true&authSource=admin&appName=mongosh+2.1.5"
        #self.stringConecction = "mongodb://dubancsierra:4eLNFkI9TFCLgYzP@localhost:27017/test?directConnection=true&authSource=admin&appName=mongosh+2.1.5"
        self.database = MongoClient (self.stringConecction)

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
            allDocuments = collection.find(filter)
        else: 
            allDocuments = collection.find()
        allDocuments = list(map(lambda x: self.convertIdMongoInObjectToStr(x), allDocuments))
        return allDocuments
    
    def getOneDocumentInCollection(self,id):
        db = self.database[self.nameDatabase]
        collection = db[self.nameCollection]
        response = collection.find_one({"_id": ObjectId(id)})
        response = self.convertIdMongoInObjectToStr(response)
        return response 
        
    
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
        
    def updateDocumentByFilterInCollecction(self,filter,objectWithInfoToUpdate):
        db = self.database[self.nameDatabase]
        collection = db[self.nameCollection] 
        response = collection.update_one(filter,{
            '$set': {**objectWithInfoToUpdate}
        })
        if response.modified_count > 0 :
            return True
        else:
            return False
    
    def insertObjectInDocumentByidInColeccion(self,id,object):
        db = self.database[self.nameDatabase]
        collection = db[self.nameCollection] 
        response = collection.update_one({ 
            '_id' : ObjectId(id)
        },{ 
           '$push': {"notes": {**object,'_id':ObjectId()}}}
        )
        if response.modified_count > 0 :
            return True
        else:
            return False
    
    def removeObjectInDocumentByidInColeccion(self,idcategoria, idNotes):
        db = self.database[self.nameDatabase]
        collection = db[self.nameCollection] 
        response = collection.update_one({ 
            '_id' : ObjectId(idcategoria)
        },{ 
           '$pull': {"notes": {'_id':ObjectId(idNotes)}}}
        )
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
        print(item)
        for key in item.keys():
            if key == '_id':
                item[key] = str(item[key])
            if isinstance(item[key], list):
                print(item[key])
                arreglo = []
                for subItem in item[key]:
                    arreglo.append(self.convertIdMongoInObjectToStr(subItem))
                item[key] = arreglo
                
        return item

        

        
            
            









