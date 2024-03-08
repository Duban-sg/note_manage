import settings from "../utils/settings";

const IP_API_URL = 'http://127.0.0.1:8080/'

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



export { getNotes };