const answerButtonsElement = document.getElementById("answers");
const questionContainer = document.getElementById("question");
const questionNumberContainer = document.getElementById("questionNumber");
const categoryContainer = document.getElementById("category");
let countCurrentQuestion = 0;
let countCorrectAnswer = 0;


import { modal, openModal, updateModalText,closeModal } from './modalGenerator.js';

//PARSE DATA
const quizData = JSON.parse(localStorage.getItem("quizData"));

const launchGame = () => {

  generateButtons(quizData[0]);
};

const generateButtons = (item) => {
  const numeroRandom = Math.floor(Math.random() * 4);
  const buttonsArray = [];
  const question = item.question;
  const category = item.category;

  questionContainer.innerHTML = `<p>${question}</p>`;
  questionNumberContainer.innerHTML = countCurrentQuestion + 1;

  categoryContainer.innerHTML = `${category}`;
  const allAnswers = [item.correct_answer, ...item.incorrect_answers];

  allAnswers.forEach(() => {
    const answers = document.createElement("button");
    answers.classList.add("btn");
    answers.classList.add("btn-light");
    buttonsArray.push(answers);

    answers.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(answers);
  });

  // Crear un array que incluya la respuesta correcta y las respuestas incorrectas
  const respuestas = [...item.incorrect_answers];
  respuestas.splice(numeroRandom, 0, item.correct_answer);

  // Iterar sobre los botones y asignar el texto de las respuestas
  buttonsArray.forEach((button, i) => {
    if (i === numeroRandom) {
      button.dataset.correct = true;
    } else {
      button.dataset.correct = false;
    }
    button.innerHTML = `${respuestas[i]}`;
  });
};
//SELECT FOR THE ANSWER
const selectAnswer = (button) => {
  if (button.target.dataset.correct !== "false") {
    countCorrectAnswer++;
  }

  Array.from(answerButtonsElement.children).forEach((button) => {
    button.disabled = true;
    setStatusClass(button);
  });
  
  openModalNow(quizData[countCurrentQuestion].correct_answer);
  deleteAnswer();
};

const setStatusClass = (element) => {
  if (element.dataset.correct === "true") {
    element.classList.remove("btn-light");
    element.classList.add("btn-success");
  } else {
    element.classList.remove("btn-light");
    element.classList.add("btn-danger");
  }
};

const deleteAnswer = () => {
  setTimeout(() => {
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    while (questionContainer.firstChild) {
      questionContainer.removeChild(questionContainer.firstChild);
    }

    countCurrentQuestion++;
    
    if (countCurrentQuestion !== 10){
      closeModal();
      generateButtons(quizData[countCurrentQuestion]);
    }else{
      closeModal();
      finishQuiz();
    } 
  }, 3000);

};

function obtenerFechaActual() {
  const fecha = new Date();
  // Obtenemos el año, el mes y el día
  const year = fecha.getFullYear();
  const mes = (fecha.getMonth() + 1).toString().padStart(2, "0"); // Se suma 1 porque los meses van de 0 a 11
  const dia = fecha.getDate().toString().padStart(2, "0");

  // Formateamos la fecha
  const fechaFormateada = `${year}-${mes}-${dia}`;

  return fechaFormateada;
}
// Ejemplo de uso
const fechaActual = obtenerFechaActual();

const finishQuiz = () => {
  const gameResults = {
    date: obtenerFechaActual(),
    score: countCorrectAnswer,
  };
  const existingResultsJSON = localStorage.getItem("gameResults");
  const existingResults = existingResultsJSON
    ? JSON.parse(existingResultsJSON)
    : { fechas: [], aciertos: [] };
  existingResults.fechas.push(gameResults.date);
  existingResults.aciertos.push(gameResults.score);
  localStorage.setItem("gameResults", JSON.stringify(existingResults));
  document.location.href = "results.html";
};

const openModalNow = (text) =>{
  const textoModal = `La respusta Correcta es: ${text}`
  updateModalText(textoModal);
  openModal();
}

document.addEventListener("DOMContentLoaded", launchGame);
