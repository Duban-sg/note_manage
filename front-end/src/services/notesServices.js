import settings from "../utils/settings";

function getNotes() {
    fetch(settings.IP_API_URL+'notas')
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Error al obtener las notas:', error);
            return [];
        });
}



export { getNotes };