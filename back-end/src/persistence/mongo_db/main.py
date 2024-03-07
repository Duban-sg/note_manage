from pymongo import MongoClient
from src.core.config import get_var

class mongo_db:
    database: MongoClient = None 
    usuario : str
    password: str
    server:   str
    appname: str
    stringConecction: str

    def __init__(self) -> None:
        self.usuario = get_var("user_data_base")
        self.password = get_var("password_data_base")
        self.server = get_var("server_data_base")
        self.appname = get_var("appname_data_base")
        stringConecction = 'mongodb+srv://'+self.usuario+':'+self.password+'@'+self.server+'/?retryWrites=true&w=majority&appName='+self.appname
        self.database = MongoClient(stringConecction)

    def insertInColeccition(self,nameDatabase,nameCollection,document):
        db = self.database[nameDatabase]
        collection = db[nameCollection]
        result = collection.insert_one(document)
        return result
    
    def getAllDocumentInCollection(self,nameDatabase,nameCollection,filter=None):
        db = self.database[nameDatabase]
        collection = db[nameCollection] 
        if (filter != None ):
            allDocuments = collection.find({},filter)
        else: 
            allDocuments = collection.find()
        return allDocuments
            









