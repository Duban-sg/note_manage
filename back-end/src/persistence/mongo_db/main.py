from pymongo import MongoClient
from src.core.config import get_var

class mongo_db:
    database: MongoClient = None 
    usuario : str
    password: str
    server:   str
    appname: str
    stringConecction: str
    ##baseDeDatos  = MongoClient ('mongodb+srv://dubancsierra:<password>@cluster0.lgeb6sa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')


    def __init__(self) -> None:
        self.usuario = get_var("user_data_base")
        self.password = get_var("password_data_base")
        self.server = get_var("server_data_base")
        self.appname = get_var("appname_data_base")
        stringConecction = 'mongodb+srv://'+self.usuario+':'+self.password+'@'+self.server+'/?retryWrites=true&w=majority&appName='+self.appname
        self.database = MongoClient(stringConecction)






