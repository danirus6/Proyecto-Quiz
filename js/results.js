const resultContainer = document.getElementById("resultContainer");
const resultComment = document.getElementById("resultComment");
const existingResults = JSON.parse(localStorage.getItem("gameResults"));
const scoreReplies = {
  10: "Es perfecto, tío.",
  9: "Lo has hecho bien, te ha faltado un poco para llegar al 10.",
  8: "Lo has hecho bien, te ha faltado un poco para llegar al 10.",
  7: "Lo has hecho bien, te ha faltado un poco para llegar al 10.",
  6: "A ver, seguro que podías hacerlo mejor :(",
  5: "A ver, seguro que podías hacerlo mejor :(",
  4: "No sé, igual tienes que leer un par de libros y conocer el mundo.",
  3: "No sé, igual tienes que leer un par de libros y conocer el mundo.",
  2: "No sé, igual tienes que leer un par de libros y conocer el mundo.",
  1: "No sé, igual tienes que leer un par de libros y conocer el mundo.",
  0: "Sabemos que has sufrido.",
};

document.addEventListener("DOMContentLoaded", showResults);

const showResults = () => {
  const lastGameScore = existingResults[existingResults.length - 1];
  resultContainer.innerHTML = lastGameScore;
  let reply = scoreReplies[lastGameScore];
  resultComment.innerHTML = reply;
};
