let score = 0;
let question;
let reponse;

const questions = [
    "Quel joueur a remporté le plus de Ballons d'Or ?",
    "Quelle équipe a gagné la Coupe du Monde 2018 ?",
    "Quel est le surnom de Cristiano Ronaldo ?",
    "Dans quel club joue Lionel Messi en 2024 ?",
    "Quel pays a organisé la Coupe du Monde 2014 ?",
    "Quel joueur est surnommé 'La Pulga' ?",
    "Combien de joueurs sur le terrain dans une équipe de football ?",
    "Quel est le nom du stade du Real Madrid ?",
    "Quel numéro portait Zinédine Zidane en équipe de France ?",
    "Quel club est surnommé 'Les Reds' ?"
  ];

// Tableau des réponses correctes (en minuscules pour la vérif)
const bonnesReponses = [
    "lionel messi",
    "france",
    "cr7",
    "inter miami",
    "bresil",
    "lionel messi",
    "11",
    "santiago bernabeu",
    "10",
    "liverpool"
  ];

for (let i = 0; i < questions.length; i++) { // Boucle qui parcourt chaque question du quiz
    question = questions[i];
    reponse = prompt((i + 1) + ". " + question);   // Pose la question à l'utilisateur et récupère sa réponse
  
    // Vérification de la réponse 
    if (reponse !== null && reponse.toLowerCase() === bonnesReponses[i]) {
      console.log("Bonne réponse !");
      score++;
    } else {
      console.log("Mauvaise réponse !");
    }
  }

// Fin du quiz
alert("Fin du quiz ! Tu as " + score + " bonnes réponses sur " + questions.length + " !");
console.log("Fin du quiz ! Tu as " + score + " bonnes réponses sur " + questions.length + " !");