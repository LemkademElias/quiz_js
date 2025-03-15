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

// Affiche la question actuelle
function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById('question').textContent = q.question;

  const choicesDiv = document.getElementById('choices');
  choicesDiv.innerHTML = "";

  q.choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.textContent = choice;
    btn.onclick = () => checkAnswer(choice);
    choicesDiv.appendChild(btn);
  });

  document.getElementById('feedback').textContent = "";
}

