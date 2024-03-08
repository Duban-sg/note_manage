import settings from "../utils/settings";
function getNotes() {
    console.error(settings.IP_API_URL)
    console.log(settings.DATABASE_HOST)
    fetch(IP_API_URL+'notas')
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Error al obtener las notas:', error);
            return [];
        });
}

function postNotes(title, body){
    try{
        const response =  fetch(settings.IP_API_URL+'notas', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, body })
          });
    
          if (!response.ok) {
            throw new Error('Error al crear una nueva nota');
          }

        return(response);
    }catch(error){
        return(error);
    }
    
}

function putNote(editedNote){
    try {
        const response = fetch(settings.IP_API_URL+`notas/${editedNote.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editedNote)
        });
        return(response);
        
    } catch (error) {
        console.error('Error:', error);
    }
}
export async function deleteNote(noteId) {
    try {
        const response = await fetch(settings.IP_API_URL+`notas/${noteId}`, {
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