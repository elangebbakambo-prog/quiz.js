🧠 Quiz JavaScript

Application quiz interactive développée en JavaScript vanilla avec une architecture orientée objet.

🌐 Voir le projet → github.com/elangebbakambo-prog/quiz.js

📋 Description
Quiz interactif sur les méthodes JavaScript, entièrement développé en JS vanilla sans aucune librairie externe. Le projet met en avant la programmation orientée objet avec une séparation claire entre la logique du quiz et l'affichage.

⚙️ Fonctionnalités

❓ Navigation entre les questions avec affichage dynamique
✅ Vérification des réponses en temps réel
🏆 Score affiché en direct pendant le quiz
📊 Progression affichée (Question X sur Y)
🎉 Écran de score final avec bouton recommencer
📱 Responsive — grille 2 colonnes sur desktop, 1 colonne sur mobile


🏗️ Architecture du code
Le projet est structuré autour de deux classes et un objet d'affichage :
Classe Question
Représente une question du quiz :

constructor(text, choices, answer) — crée une question avec son texte, ses choix et sa bonne réponse
isCorrectAnswer(choice) — retourne true ou false selon la réponse choisie

Classe Quiz
Gère toute la logique du quiz :

constructor(questions) — initialise le score, la liste des questions et l'index courant
getCurrentQuestion() — retourne la question en cours
guess(answer) — vérifie la réponse, incrémente le score si correct, passe à la suivante
hasEnded() — retourne true si toutes les questions ont été répondues

Objet display
Gère tout l'affichage dans le DOM :

showElement(id, text) — fonction générique sécurisée pour injecter du contenu
showQuestion() — affiche le texte de la question actuelle
showChoices() — affiche les boutons de réponse et gère les événements onclick
showProgress() — affiche la progression (Question X sur Y)
showScoreLive() — affiche le score en temps réel
showFinalScore() — remplace le quiz par l'écran de fin avec score final

Fonction quizApp()
Point d'entrée principal — orchestre l'affichage à chaque interaction.

🛠️ Stack technique
TechnologieUsageJavaScript (ES6+)POO, gestion des événements, logique du quizHTML5Structure statique des boutonsCSS3Design glassmorphisme, grid responsive, animations hoverGoogle FontsPolice Josefin SansFont AwesomeIcône titre

👨‍💻 Développeur
Elange Bakambo — Développeur Web Junior
🌐 github.com/elangebbakambo-prog
