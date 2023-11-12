// api.js
export function obtenerPreguntas() {
    // Your implementation here
  }
  
  // main.js
  import { obtenerPreguntas } from './api.js';
  
  // Now you can use obtenerPreguntas in your main.js file


const gameContainer = document.getElementById("gameContainer");
// elementByID next button
// elementByID  questionElement
// elementByID answerButtonsElement
let currentQuestionIndex;

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

const startGame = async () => {
  const response = await axios.get(
    "https://opentdb.com/api.php?amount=10&difficulty=hard&type=multiple"
  );
  const results = response.data.results;
  console.log(results);

  const filteredResults = results.map((resultObject) => {
    const filteredResult = {
      category: resultObject.category,
      question: resultObject.question,
      correct_answer: resultObject.correct_answer,
      incorrect_answers: resultObject.incorrect_answers,
    };
    return filteredResult;
  });
  localStorage.setItem("quizData", JSON.stringify(filteredResults));
  document.location.href = "questions.html";
};

const launchGame = () => {
  // next button should be hidden
  // currentQuestionIndex to 0
  // container element visible
  // set next question

  
};

// start the game with eventlistener
document.addEventListener("DOMContentLoaded", launchGame);

const showQuestion = (item) => {
  const allAnswers = shuffleArray([
    item.correct_answer,
    ...item.incorrect_answers,
  ]);

  questionElement.innerText = item.question;
  allAnswers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer;

    if (answer === item.correct_answer) {
      button.dataset.correct = true;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
  gameContainer.innerHTML = `
 <h2>${quizData[currentQuestionIndex].category}</h2>

  `;
};

const setNextQuestion = () => {
  //resetstate
  //showQuestion();
};

const resetState = () => {
  // hide next button
  // delete previous buttons
};

const selectAnswer = () => {
  // for each button we set the class correct/incorret with a function


};