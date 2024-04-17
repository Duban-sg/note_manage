from fastapi import FastAPI
from kafka import KafkaProducer, KafkaConsumer
import json

app = FastAPI()

# Configura el productor de Kafka
producer = KafkaProducer(bootstrap_servers='service_nginx:9095',
                         value_serializer=lambda v: json.dumps(v).encode('utf-8'))



@app.post("/enviar_mensaje/")
async def enviar_mensaje(mensaje: dict):
    producer.send('TRAZA', value=mensaje)
    return {"mensaje": "Enviado correctamente"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=80)
