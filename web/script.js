// script.js
const wordPairs = {
    // Abbreviated version for brevity; should be fully populated with the provided word pairs
    "aber": "but", "alle": "all", "als": "as, when", "alt": "old",
    // Add more word pairs here
};

let score = 0;
let questionNumber = 1;
let questions = Object.entries(wordPairs);
let totalQuestions = questions.length;
let engToGer = {};

// Create a reverse mapping for English to German questions
for (const [ger, eng] of questions) {
    if (!(eng in engToGer)) {
        engToGer[eng] = [];
    }
    engToGer[eng].push(ger);
}

function initializeQuiz() {
    document.getElementById('submit').addEventListener('click', checkAndProceed);
    nextQuestion();
}

function nextQuestion() {
    if (questionNumber > totalQuestions) {
        // Quiz is over
        document.getElementById('question').innerText = "Quiz Completed!";
        document.getElementById('submit').style.display = 'none';
        return;
    }

    const direction = Math.random() < 0.5 ? "German to English" : "English to German";
    let questionText;
    let correctAnswers;

    if (direction === "German to English") {
        const [german, english] = questions[questionNumber - 1];
        questionText = `What is '${german}' in English?`;
        correctAnswers = english.split(", ").map(answer => answer.trim().toLowerCase());
    } else {
        const [english, german] = Object.entries(engToGer)[questionNumber - 1];
        questionText = `What is '${english}' in German?`;
        correctAnswers = german.map(g => g.toLowerCase());
    }

    document.getElementById('question').innerText = questionText;
    document.getElementById('answer').value = ""; // Clear previous answer
    document.getElementById('answer').focus(); // Focus on the input field

    // Store correct answers for comparison in checkAnswer()
    document.getElementById('answer').dataset.correctAnswers = JSON.stringify(correctAnswers);
}

function checkAndProceed() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const correctAnswers = JSON.parse(document.getElementById('answer').dataset.correctAnswers);

    if (correctAnswers.includes(userAnswer)) {
        score++;
        document.getElementById('feedback').innerText = "Correct!";
    } else {
        document.getElementById('feedback').innerText = `Incorrect! Correct answers: ${correctAnswers.join(", ")}.`;
    }

    questionNumber++;
    document.getElementById('score').innerText = `Score: ${score}/${questionNumber - 1}`;

    nextQuestion();
}

initializeQuiz();
