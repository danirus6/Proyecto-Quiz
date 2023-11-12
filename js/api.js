const API_BASE_URL = 'https://opentdb.com/api.php?';

export async function getData(cantidad = 10, dificultad = 'hard') {
    try {


        const url = `${API_BASE_URL}amount=${cantidad}&difficulty=${dificultad}&type=multiple`;
        const respuesta = await axios.get(url);
        return respuesta.data.results;
    } catch (error) {
        console.error('Error al obtener preguntas:', error);
        throw error;
    }
}

// Puedes agregar más funciones relacionadas con la API según tus necesidades
