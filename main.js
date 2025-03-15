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

// Vérifie la réponse choisie
function checkAnswer(choice) {
  const feedback = document.getElementById('feedback');

  if (choice === questions[currentQuestion].answer) {
    feedback.textContent = "Bonne réponse !";
    feedback.className = "correct";
    score++;
    document.getElementById('score').textContent = score;
  } else {
    feedback.textContent = "Mauvaise réponse !";
    feedback.className = "incorrect";
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    setTimeout(showQuestion, 1000); // attend une seconde avant la prochaine question
  } else {
    setTimeout(showResult, 1000);
  }
}

// Affiche l'écran de résultat
function showResult() {
  document.getElementById('quiz').style.display = "none";
  document.getElementById('result').style.display = "block";

  document.getElementById('finalScore').textContent =
    `${playerName}, tu as eu ${score} sur ${questions.length} !`;
}

