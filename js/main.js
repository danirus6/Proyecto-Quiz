const gameContainer = document.getElementById("gameContainer");

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

const quizData = JSON.parse(localStorage.getItem("quizData"));
console.log(quizData);
