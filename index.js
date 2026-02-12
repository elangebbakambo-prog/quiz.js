// ===============================
// Classe Question
// ===============================
class Question {

  // Le constructeur s’exécute quand on fait : new Question(...)
  // Il crée une question avec :
  // - un texte
  // - un tableau de choix
  // - une bonne réponse
  constructor(text, choices, answer) {
    this.text = text;        // Texte de la question
    this.choices = choices;  // Tableau contenant les réponses possibles
    this.answer = answer;    // La bonne réponse
  }

  // Méthode qui vérifie si la réponse choisie est correcte
  isCorrectAnswer(choice) {
    return choice === this.answer; // retourne true ou false
  }
}


// ===============================
// Liste des questions
// ===============================
// Ici on crée un tableau contenant plusieurs objets Question
const questionList = [
  new Question(
    "Quelle méthode Javascript permet de filtrer un tableau ?",
    ["indexOf()", "map()", "filter()", "reduce()"],
    "filter()"
  ),
  new Question(
    "Quelle méthode vérifie si un élément existe dans un tableau ?",
    ["isNaN()", "includes()", "findIndex()", "push()"],
    "includes()"
  ),
  new Question(
    "Quelle méthode transforme du JSON en objet Javascript ?",
    ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.convert()"],
    "JSON.parse()"
  ),
  new Question(
    "Quelle méthode arrondit à l'entier le plus proche ?",
    ["Math.ceil()", "Math.floor()", "Math.round()", "Math.random()"],
    "Math.round()"
  )
];


// ===============================
// Classe Quiz
// ===============================
class Quiz {

  // Quand on crée le quiz, on initialise :
  // - le score à 0
  // - la liste des questions
  // - l’index de la question actuelle
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
  }

  // Retourne la question actuelle grâce à l’index
  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  // Vérifie la réponse et passe à la question suivante
  guess(answer) {

    // Si la réponse est correcte → on augmente le score
    if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
      this.score++;
    }

    // On passe à la question suivante
    this.currentQuestionIndex++;
  }

  // Vérifie si on a atteint la fin du tableau
  hasEnded() {
    return this.currentQuestionIndex >= this.questions.length;
  }
}


// ===============================
// Création du Quiz
// ===============================
// On crée une instance de Quiz avec la liste des questions
const quiz = new Quiz(questionList);


// ===============================
// Gestion de l'affichage
// ===============================
const display = {

  // Fonction générique pour afficher du texte dans un élément HTML
  showElement(id, text) {
    const element = document.getElementById(id);

    // Sécurité : on vérifie que l’élément existe
    if (element) {
      element.innerHTML = text;
    }
  },

  // Affiche la question actuelle
  showQuestion() {
    this.showElement("question", quiz.getCurrentQuestion().text);
  },

  // Affiche les choix et ajoute l’événement au clic
  showChoices() {

    const choices = quiz.getCurrentQuestion().choices;

    // Boucle sur chaque choix
    for (let i = 0; i < choices.length; i++) {

      // On met le texte dans le bouton
      this.showElement("choices" + i, choices[i]);

      // Quand on clique :
      document.getElementById("guess" + i).onclick = () => {

        // Vérifie la réponse
        quiz.guess(choices[i]);

        // Recharge l'affichage
        quizApp();
      };
    }
  },

  // Affiche la progression
  showProgress() {
    this.showElement(
      "progress",
      `Question ${quiz.currentQuestionIndex + 1} sur ${quiz.questions.length}`
    );
  },

  // Affiche le score en temps réel
  showScoreLive() {
    this.showElement(
      "score",
      `Score : ${quiz.score}`
    );
  },

  // Affiche le score final
  showFinalScore() {

    // On remplace tout le contenu du quiz
    document.getElementById("quiz").innerHTML = `
      <h2>Quiz terminé 🎉</h2>
      <h3>Score final : ${quiz.score} / ${quiz.questions.length}</h3>
      <button onclick="location.reload()">Recommencer</button>
    `;
  }
};


// ===============================
// Logique principale
// ===============================
function quizApp() {

  // Si le quiz est terminé
  if (quiz.hasEnded()) {
    display.showFinalScore();
  } 

  // Sinon on continue
  else {
    display.showQuestion();
    display.showChoices();
    display.showProgress();
    display.showScoreLive();
  }
}


// ===============================
// Lancement
// ===============================
quizApp();

