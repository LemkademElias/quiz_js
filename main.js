// Liste des questions de géographie
const questions = [
  {
    question: "Quelle est la capitale de l'Australie ?",
    choices: ["Sydney", "Melbourne", "Canberra"],
    answer: "Canberra"
  },
  {
    question: "Quel est le plus long fleuve du monde ?",
    choices: ["Nil", "Amazon", "Yangtsé"],
    answer: "Nil"
  },
  {
    question: "Combien de continents existe-t-il ?",
    choices: ["5", "6", "7"],
    answer: "7"
  },
  {
    question: "Dans quel pays se trouve le Mont Fuji ?",
    choices: ["Chine", "Japon", "Corée du Sud"],
    answer: "Japon"
  },
  {
    question: "Quel désert est le plus grand au monde ?",
    choices: ["Sahara", "Gobi", "Antarctique"],
    answer: "Antarctique"
  },
  {
    question: "Quelle est la capitale du Canada ?",
    choices: ["Toronto", "Ottawa", "Vancouver"],
    answer: "Ottawa"
  },
  {
    question: "Quel océan borde la côte ouest de l'Afrique ?",
    choices: ["Atlantique", "Indien", "Arctique"],
    answer: "Atlantique"
  },
  {
    question: "Quel pays a le plus d'îles au monde ?",
    choices: ["Indonésie", "Philippines", "Suède"],
    answer: "Suède"
  },
  {
    question: "Où se trouve la ville de Marrakech ?",
    choices: ["Algérie", "Maroc", "Tunisie"],
    answer: "Maroc"
  },
  {
    question: "Quelle est la plus grande île du monde ?",
    choices: ["Groenland", "Australie", "Madagascar"],
    answer: "Groenland"
  }
];

let playerName = "";
let currentQuestion = 0;
let score = 0;

// Fonction appelée quand on clique sur "Commencer le quiz"
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

// Affiche la question en cours et les choix
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

// Vérifie la réponse et passe à la question suivante
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
    setTimeout(showQuestion, 1000);
  } else {
    setTimeout(showResult, 1000);
  }
}

// Affiche l'écran final avec le score total
function showResult() {
  document.getElementById('quiz').style.display = "none";
  document.getElementById('result').style.display = "block";

  document.getElementById('finalScore').textContent =
    `${playerName}, tu as eu ${score} sur ${questions.length} !`;
}

// Bonus : Affiche un message personnalisé selon le score
function showFinalMessage() {
  let message = "";

  if (score === questions.length) {
    message = `Bravo ${playerName} ! Score parfait ! 🌍🎉`;
  } else if (score >= questions.length / 2) {
    message = `Bien joué ${playerName} ! Tu connais bien la géographie 👍`;
  } else {
    message = `Dommage ${playerName} ! Tu peux réviser un peu plus 😅`;
  }

  alert(message);
}
