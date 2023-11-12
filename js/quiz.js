const answerButtonsElement = document.getElementById("answers");
const questionContainer = document.getElementById("question");

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
    console.log(numeroRandom);
    if (i === numeroRandom) {
      button.dataset.correct = true;
    } else {
      button.dataset.correct = false;
    }
    button.innerText = respuestas[i];
    console.log(respuestas[i]);
  });
};
const setStatusClass = (element) => {
  if (element.dataset.correct === "true") {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
};

const selectAnswer = () => {
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button);
  });
};

document.addEventListener("DOMContentLoaded", launchGame);

// TODO: CONSEGUIR EL VALOR DEL RESULTADO AL CLICAR EL PRIMERO PARA SUMARLO A UN CONTADOR.
