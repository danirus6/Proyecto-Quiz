import { getData } from './api.js';
import { crearGrafico } from './graphUpdater.js';
import { modal, openModal, updateModalText } from './modalGenerator.js';

const buttonLaunch = document.getElementById('start-button');

const existingResultsJSON = localStorage.getItem("gameResults");
const existingResults = existingResultsJSON ? JSON.parse(existingResultsJSON) : {fechas:[],aciertos:[]};

document.addEventListener('DOMContentLoaded', function () {
  // Llamar a la función del gráfico después de que se haya cargado el DOM
  crearGrafico(existingResults.fechas, existingResults.aciertos);
});



// Obtener los datos del localStorage
const datosLocalStorage = localStorage.getItem("result");
// Convertir los datos de JSON a objeto JavaScript
const datosg = JSON.parse(datosLocalStorage);

const iniciarJuego = async (e) => {
  console.clear();
  localStorage.removeItem("quizData");
  e.preventDefault();

  try {
    const response = await getData();
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

    if (quizData != null) {
      document.location.href = "questions.html";
    }
  } catch (error) {
    // Manejar errores
    console.error('Error al obtener preguntas:', error);
  }
}



// Event listener para el botón "Iniciar Juego"
buttonLaunch.addEventListener('click', iniciarJuego);