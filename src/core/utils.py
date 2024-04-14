




def getParamsToUpdate(prefix,object):
    objectResult = {}
    for key in object.keys():
        objectResult[prefix+key] = object[key]
    return objectResult
    
    



