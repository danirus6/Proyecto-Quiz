// app.js
const buttonLaunch = document.getElementById('start-button');

// Importar funciones de la API
import { getData } from './api.js';

// Ejemplo de uso
const iniciarJuego = async (e) => {

    e.preventDefault();
    console.clear();
    localStorage.clear();

    try {
        const response = await getData();
        console.log('Preguntas obtenidas:', response);
        // Continuar con la lógica del juego
        //Meter datos de la API en LOCALSTORAGE y enviar al siguiente HTML
        
      
        const filteredResults = response.map((resultObject) => {
          const filteredResult = {
            category: resultObject.category,
            question: resultObject.question,
            correct_answer: resultObject.correct_answer,
            incorrect_answers: resultObject.incorrect_answers,
          };
          return filteredResult;
        });
        localStorage.setItem("quizData", JSON.stringify(filteredResults));
        
        const quizData = JSON.parse(localStorage.getItem("quizData"));
        console.log("QuizDATA:", quizData);
        
        if(quizData != null)  {
        document.location.href = "questions.html";
        }
    } catch (error) {
        // Manejar errores
        console.error('Error al obtener preguntas:', error);
    }
}
// Event listener para el botón "Iniciar Juego"
buttonLaunch.addEventListener('click', iniciarJuego);
// Llamar a la función para iniciar el juego