// Questions simples (modifiables facilement)
const questions = [
  { question: "Quelle est la capitale de la France ?", choices: ["Paris", "Londres", "Berlin"], answer: "Paris" },
  { question: "Combien y a-t-il de continents ?", choices: ["5", "6", "7"], answer: "7" },
  { question: "Quelle est la couleur du ciel ?", choices: ["Bleu", "Rouge", "Vert"], answer: "Bleu" }
];

let playerName = "";
let currentQuestion = 0;
let score = 0;

// Lancer le quiz
function startQuiz() {
  const nameInput = document.getElementById('playerName');
  playerName = nameInput.value.trim();

  if (playerName === "") {
    alert("Merci d'entrer ton prénom !");
    return;
  }

  document.getElementById('start').style.display = "none";
  document.getElementById('quiz').style.display = "block";

  showQuestion();
}

