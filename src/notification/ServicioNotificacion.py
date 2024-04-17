from kafka import KafkaProducer
from src.core.config import get_var
import json
import socket
import threading


class ServicioNotificacion():
    
    serverKafka:str = ""
    portKafka=""
    producer: KafkaProducer
    topic: str
    bootstrap_servers:str
    
    def __init__(self) -> None:
        self.serverKafka = get_var("kafka_server")
        self.portKafka = get_var("kafka_port_server")
        self.server = self.serverKafka+':'+self.portKafka
        
     
    def enviarMensaje(self,objectMensaje):
        def send_mensaje():
            try:
                self.producer = KafkaProducer(bootstrap_servers=self.server, 
                         value_serializer=lambda v: json.dumps(v).encode('utf-8'))
                self.producer.send(topic='TRAZA', value=objectMensaje.dict())
                print("[info]: Se envio el mensjae con exito")
            except:
                print("[Error]: No se pudo enviar el mensaje al sevidor de kafka")
                
        hilo = threading.Thread(target=send_mensaje)
        hilo.start()

        







