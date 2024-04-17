import functools
from time import time
from datetime import date
from src.notification.ObjectMensaje import ObjectMensaje 
from src.notification.ServicioNotificacion import ServicioNotificacion

def crearObjetoMensaje(nombreModulo, info,respuesta,duracion):
    object = ObjectMensaje(modulo=nombreModulo,fechaMovimiento=str(date.today()),informacionAprocesar=info,informacionRespuesta=respuesta,duracion=duracion)
    return object

def creaArgumentos(*args,**kwargs):
    args_repr = [repr(a) for a in args]
    kwargs_repr = [f"{k}={repr(v)}" for k, v in kwargs.items()]
    signature = ", ".join(args_repr + kwargs_repr)
    return signature

def notificar(_func=None, *, nombreModulo="Sin Definir"):
    medida = 0
    infoEntrante= ""
    infoResultado= ""
    objectMensaje=None
    
    def crearNotificacion(func):
        @functools.wraps(func)
        def medirTiempo(*args, **kwargs):
            infoEntrante = f"llamado {func.__name__}({creaArgumentos(args,kwargs)})" 
            inicio = time()
            try:
                c = func(*args,**kwargs)
                infoResultado = f"{func.__name__}() returned {repr(c)}"
                return c
            except:
                infoResultado = f"{func.__name__}() returned exception"
                raise
            finally:
                medida= ((time()-inicio)/60)
                objectMensaje = crearObjetoMensaje(nombreModulo,infoEntrante,infoResultado,medida)
                servicioNotificacion = ServicioNotificacion()
                servicioNotificacion.topic = 'TRAZA'
                servicioNotificacion.enviarMensaje(objectMensaje)
            
            

        return medirTiempo
    
    if _func is None:
        return crearNotificacion
    else:
        return crearNotificacion(_func)
    




