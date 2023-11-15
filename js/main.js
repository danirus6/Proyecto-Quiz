import { getData } from './api.js';
import { crearGrafico } from './graphUpdater.js';
import { modal, openModal, updateModalText } from './modalGenerator.js';

const buttonLaunch = document.getElementById('start-button');


//TODO: CONSEGUIDOOOO, HE ESTADO LITERALMENTE 2 HORAS CON EL GRAFICO QUE NO ME CARGABA!
//TODO: FALTA COGER LOS DATOS DESDE EL LOCALSTORAGE KEY: RESULT CON SU RESPECTIVO PARSE (ESTA DEBAJO DEL EVENT LISTENER)

const existingResultsJSON = localStorage.getItem("gameResults");
const existingResults = existingResultsJSON ? JSON.parse(existingResultsJSON) : {fechas:[],aciertos:[]};
// const datos = {
//   fechas: ["2021-01-01", "2021-01-02", "2021-01-03"], //STRING
//   aciertos: [5, 7, 3] //INT O STRING
// };
console.log(existingResults);
document.addEventListener('DOMContentLoaded', function () {
  // Llamar a la función del gráfico después de que se haya cargado el DOM
  crearGrafico(existingResults.fechas, existingResults.aciertos);
});



// Obtener los datos del localStorage
const datosLocalStorage = localStorage.getItem("result");
// Convertir los datos de JSON a objeto JavaScript
const datosg = JSON.parse(datosLocalStorage);

////////////////////////////////////////////////////////////////7

const iniciarJuego = async (e) => {
  console.clear();
  localStorage.removeItem("quizData");
  e.preventDefault();

  try {
    const response = await getData();
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

    if (quizData != null) {
      document.location.href = "questions.html";
    }
  } catch (error) {
    // Manejar errores
    console.error('Error al obtener preguntas:', error);
  }
}

// Ejemplo de uso: abrir el modal al hacer clic en un botón con el id "open-modal-button" y pasar el texto deseado
 const openModalButton = document.getElementById('open-modal-button');
 openModalButton.addEventListener('click', () => {
   const textoModal = '¡Este es el texto que se mostrará en el modal!';
   console.log(textoModal);
   updateModalText(textoModal);
   openModal();
 });


// Event listener para el botón "Iniciar Juego"
buttonLaunch.addEventListener('click', iniciarJuego);