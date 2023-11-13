const answerButtonsElement = document.getElementById("answers");
const questionContainer = document.getElementById("question");
let countCurrentQuestion = 0;
let countCorrectAnswer = 0;



//MODAL
//TODO: GENERAR BIEN EL MODAL (ESTO ES UN EJEMPLO DE GPT, Y MOVERLO A LA FUNCION (CUANDO CLICAMOS EN UNA RESPUESTA Y BLOQUEAMOS EL CLICK))
// Importar el modal y la función de actualización del texto desde el archivo "modal.js"
// import { modal, openModal, updateModalText } from './modalGenerator.js';

// Agregar el modal al documento
// document.body.appendChild(modal);

// Ejemplo de uso: abrir el modal al hacer clic en un botón con el id "open-modal-button" y pasar el texto deseado
// const openModalButton = document.getElementById('open-modal-button');
// openModalButton.addEventListener('click', () => {
//   const textoModal = '¡Este es el texto que se mostrará en el modal!';
//   updateModalText(textoModal);
//   openModal();
// });

///////////////

// Crear los datos de ejemplo en el localSTORAGE FORMATO
// const datos = {
//   fechas: ["2021-01-01", "2021-01-02", "2021-01-03"],
//   aciertos: [5, 7, 3]
// };

// Convertir los datos a JSON
// const datosJSON = JSON.stringify(datos);

// Guardar los datos en el localStorage
// localStorage.setItem("result", datosJSON);

/////////////////////////////////



//PARSE DATA
const quizData = JSON.parse(localStorage.getItem("quizData"));
console.log(quizData);

const launchGame = () => {
  // next button should be hidden
  console.log("DOM CARGADO");
  // currentQuestionIndex to 0
  // container element visible

  // set next question
  generateButtons(quizData[0]);
  //   showQuestion();
};

const generateButtons = (item) => {
  const numeroRandom = Math.floor(Math.random() * 4);
  const buttonsArray = [];
  const question = item.question;
  questionContainer.innerHTML = `<p>${question}</p>`;
  const allAnswers = [item.correct_answer, ...item.incorrect_answers];

  allAnswers.forEach(() => {
    const answers = document.createElement("button");

    buttonsArray.push(answers);

    answers.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(answers);
  });

  // Crear un array que incluya la respuesta correcta y las respuestas incorrectas
  const respuestas = [...item.incorrect_answers];
  respuestas.splice(numeroRandom, 0, item.correct_answer);

  // Iterar sobre los botones y asignar el texto de las respuestas
  buttonsArray.forEach((button, i) => {
    // console.log(numeroRandom);
    if (i === numeroRandom) {
      button.dataset.correct = true;
    } else {
      button.dataset.correct = false;
    }
    button.innerHTML = `<p>${respuestas[i]}`;
  });
};
//SELECT FOR THE ANSWER
const selectAnswer = (button) => {
  if (button.target.dataset.correct !== "false") {
    countCorrectAnswer++;
    console.log("Correctas: " + countCorrectAnswer)
  }

  Array.from(answerButtonsElement.children).forEach((button) => {
    button.disabled = true;
    setStatusClass(button);
  });
  deleteAnswer();
};

//Set Class To Correct/Incorrect Answers
const setStatusClass = (element) => {
  if (element.dataset.correct === "true") {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
};

const deleteAnswer = () => {
  //TODO: GENERATE MODAL WITH 3s TIMEOUT AND WITH CORRECT ANSWER IF FAIL. EXAMPLE: CORRECT ANSWER IS ______
  //DETELE THE ANSWER

  //TODO: TRY TO OCULT IN INSPECTOR(F12) THE CORRECT/INCORRECT ANSWER
  setTimeout(() => {
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
    while (questionContainer.firstChild) {
      questionContainer.removeChild(questionContainer.firstChild)
    }

    countCurrentQuestion++;

    if (countCurrentQuestion !== 10)
      generateButtons(quizData[countCurrentQuestion]);
    else
      //TODO: MANDAR A RESULT
      document.location.href = "results.html";

  }, 3000);
  //GO NEXT QUESTION
}
const finishQuiz = () => {
  //TODO: PASAR LOS DATOS NECESARIOS (DATE, NUM_ANSWER CORRECT VIA LOCAL STORAGEz)

}

document.addEventListener("DOMContentLoaded", launchGame);


