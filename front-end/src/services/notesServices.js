import settings from "../utils/settings";
async function getNotes() {
    try {
        console.log(settings.REACT_APP_URL_API_SERVER )
        const response = await fetch(settings.REACT_APP_URL_API_SERVER + 'notas');
        if (!response.ok) {
            throw new Error('No se pudo obtener las notas. Código de estado: ' + response.status);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener las notas:', error);
        throw error; // Propaga el error para que el consumidor pueda manejarlo
    }
}

async function postNotes(title, content){
    try{
        const response = await fetch(settings.REACT_APP_URL_API_SERVER+'notas', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, content })
          });
    
          if (!response.ok) {
            throw new Error('Error al crear una nueva nota');
          }

        return(response);
    }catch(error){
        return(error);
    }
    
}

async function putNote(editedNote){
    try {
        console.log(editedNote._id);
        const response = await fetch(settings.REACT_APP_URL_API_SERVER+`notas/${editedNote._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editedNote)
        });

        if (!response.ok) {
            throw new Error('Error al ACTUALIZAR la nota');
          }
        return(response);
        
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function deleteNote(noteId) {
    try {
        const response = await fetch(settings.REACT_APP_URL_API_SERVER+`notas/${noteId}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Error al eliminar la nota');
        }

        return true; // Indica que la nota fue eliminada exitosamente
    } catch (error) {
        console.error('Error al eliminar la nota:', error);
        return false; // Indica que ocurrió un error al eliminar la nota
    }
}

export { getNotes, postNotes, putNote};