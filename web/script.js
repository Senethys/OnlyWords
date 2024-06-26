// script.js
const wordPairs200 = {
    "ab": "from, off",
    "Abend": "evening",
    "aber": "but",
    "acht": "eight",
    "Affe": "monkey",
    "alle": "all",
    "allein(e)": "alone",
    "als": "as, when",
    "alt": "old",
    "am": "at the",
    "an": "at, on",
    "andere": "other",
    "auch": "also, too",
    "auf": "on, upon",
    "aus": "from, out of",
    "Auto": "car",
    "bald": "soon",
    "Ball": "ball",
    "bauen": "to build",
    "Baum": "tree",
    "bei": "at, by, near",
    "bekommen": "to receive, get",
    "Bett": "bed",
    "bis": "until, by",
    "bleiben": "to stay, remain",
    "Boden": "floor, ground",
    "brauchen": "to need",
    "bringen": "to bring",
    "Brot": "bread",
    "Bruder": "brother",
    "da": "there",
    "dann": "then",
    "das": "the, that",
    "den": "the (accusative masculine article)",
    "denken": "to think",
    "der": "the (nominative masculine article)",
    "dich": "you (accusative)",
    "die": "the (feminine and plural article)",
    "doch": "however, yet",
    "dort": "there",
    "drei": "three",
    "durch": "through",
    "dürfen": "may, to be allowed",
    "ein": "a, an (masculine)",
    "eine": "a, an (feminine)",
    "einer": "a, an (neuter)",
    "einmal": "once",
    "Eltern": "parents",
    "Ende": "end",
    "er": "he",
    "erzählen": "to tell, narrate",
    "es": "it",
    "essen": "to eat",
    "Essen": "food",
    "etwas": "something",
    "fahren": "to drive, ride, go",
    "fallen": "to fall",
    "fangen": "to catch",
    "fertig": "finished, ready",
    "finden": "to find",
    "fliegen": "to fly",
    "fragen": "to ask",
    "Frau": "woman, Mrs.",
    "Freund": "friend",
    "für": "for",
    "ganz": "whole, entire",
    "geben": "to give",
    "gehen": "to go, walk",
    "Geld": "money",
    "gern(e)": "gladly, like to",
    "gleich": "same",
    "groß(e)": "big, large, tall",
    "gut": "good",
    "haben": "to have",
    "halten": "to hold, keep",
    "Hand": "hand",
    "Haus": "house",
    "heißen": "to be called, mean",
    "heute": "today",
    "hier": "here",
    "hoch": "high, tall",
    "holen": "to fetch, get",
    "hören": "to hear",
    "Hund": "dog",
    "ich": "I",
    "ihr": "her",
    "ihre": "her (possessive)",
    "ihrem": "her (dative)",
    "ihren": "her (accusative)",
    "ihrer": "her (genitive)",
    "im": "in the",
    "immer": "always",
    "in": "in",
    "ist": "is",
    "ja": "yes",
    "Jahr": "year",
    "jetzt": "now",
    "Junge": "boy",
    "kann": "can, to be able to",
    "Katze": "cat",
    "kaufen": "to buy",
    "kein": "no, not any",
    "Kind": "child",
    "Klasse": "class",
    "klein": "small, little",
    "kommen": "to come",
    "können": "can, to be able to",
    "Kopf": "head",
    "kurz": "short",
    "lang(e)": "long",
    "lassen": "to let, allow",
    "laufen": "to run, walk",
    "laut": "loud",
    "leben": "to live",
    "Leben": "life",
    "legen": "to lay, put",
    "lesen": "to read",
    "Leute": "people",
    "liegen": "to lie, be situated",
    "machen": "to make, do",
    "Mädchen": "girl",
    "man": "one, people, they",
    "Mann": "man",
    "mehr": "more",
    "mein": "my",
    "mit": "with",
    "müssen": "must, to have to",
    "Mutter": "mother",
    "Mutti": "mom",
    "nach": "after, to",
    "nehmen": "to take",
    "nein": "no",
    "neu": "new",
    "nicht": "not",
    "nichts": "nothing",
    "noch": "still, yet",
    "nun": "now",
    "nur": "only",
    "oder": "or",
    "Pferd": "horse",
    "rennen": "to run",
    "richtig": "right, correct",
    "rot": "red",
    "rufen": "to call, shout",
    "sagen": "to say",
    "schlafen": "to sleep",
    "schnell": "fast, quick",
    "schon": "already",
    "schön": "beautiful, nice",
    "schreiben": "to write",
    "Schule": "school",
    "schwarz": "black",
    "Schwester": "sister",
    "schwimmen": "to swim",
    "sehen": "to see",
    "sehr": "very",
    "sich": "oneself",
    "sie": "she, they, you (formal)",
    "sind": "are",
    "sitzen": "to sit",
    "so": "so, such",
    "sollen": "should, ought to",
    "Sonne": "sun",
    "spielen": "to play",
    "sprechen": "to speak",
    "springen": "to jump",
    "Stadt": "city",
    "stehen": "to stand",
    "stellen": "to put, place",
    "Stunde": "hour",
    "Tag": "day",
    "Tier": "animal",
    "Tisch": "table",
    "tragen": "to carry, wear",
    "trinken": "to drink",
    "tun": "to do",
    "Tür": "door",
    "über": "over, above",
    "Uhr": "clock, watch",
    "um": "around, at (time)",
    "und": "and",
    "uns": "us",
    "unser": "our",
    "unter": "under, below",
    "Vater": "father",
    "Vati": "dad",
    "viel": "much, many",
    "vier": "four",
    "Vogel": "bird",
    "voll": "full",
    "vom": "from the",
    "von": "from, of",
    "vor": "before, in front of",
    "Wagen": "car",
    "Wald": "forest",
    "war": "was",
    "waren": "were",
    "warten": "to wait",
    "was": "what",
    "Wasser": "water",
    "Weg": "way, path",
    "weiß": "white, know",
    "weit": "far",
    "weiter": "further",
    "wenn": "if, when",
    "werden": "to become, will (future tense)",
    "wie": "how, like, as",
    "wieder": "again",
    "wir": "we",
    "wird": "will (future tense of 'to be')",
    "wissen": "to know",
    "wo": "where",
    "Woche": "week",
    "wollen": "to want",
    "Zeit": "time",
    "zu": "to, too",
    "zwei": "two"
};

let wrongAnswersIndices = [];

let quizMode = 'Both';
let score = 0;
let questionNumber = 0;
let totalQuestions;
let mistakes = 0;
let usedIndices = new Set();
let questions = Object.entries(wordPairs200);  // Convert word pairs to an array of questions
let engToGer = {};  // To store the reverse mapping for English to German mode

// Initialize the reverse mapping for English to German
for (const [german, english] of questions) {
    const englishWords = english.split(', ').map(word => word.trim().toLowerCase());
    for (const word of englishWords) {
        if (!engToGer[word]) engToGer[word] = [];
        engToGer[word].push(german);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('quiz-container').style.display = 'none';

    document.getElementById('startQuiz').addEventListener('click', function() {
        document.getElementById('mode-selection').style.display = 'none';
        document.getElementById('quiz-container').style.display = 'block';

        quizMode = document.querySelector('input[name="quizMode"]:checked').value;
        totalQuestions = quizMode === 'Both' ? questions.length : Math.floor(questions.length / 2);

        resetQuiz();
        nextQuestion();
    });
});

function resetQuiz() {
    score = 0;  // Reset the score
    questionNumber = 0;  // Reset the question number
    mistakes = 0;  // Reset the mistakes count
    usedIndices.clear();  // Clear the set of used question indices
    document.getElementById('submit').style.display = 'inline';
    updateProgressBar();  // Initialize the progress bar at the start of the quiz
}

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progressInfo = document.getElementById('progress-info');
    const progressPercentage = (questionNumber / totalQuestions) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    progressInfo.innerText = `Question ${questionNumber} of ${totalQuestions} - Mistakes: ${mistakes}`;
}

function nextQuestion() {
    if (questionNumber >= totalQuestions) {
        completeQuiz();
        return;
    }

    let index, term, translation, questionText, correctAnswers;
    do {
        index = Math.floor(Math.random() * questions.length);
    } while (usedIndices.has(index));
    usedIndices.add(index);

    [term, translation] = questions[index];
    if ((quizMode === 'Both' && Math.random() < 0.5) || quizMode === 'GermanToEnglish') {
        questionText = `What is '${term}' in English?`;
        correctAnswers = translation.toLowerCase().split(", ").map(ans => ans.trim());
    } else {
        const englishWords = Object.keys(engToGer);
        const englishWord = englishWords[index % englishWords.length];  // Ensure index is within bounds
        correctAnswers = engToGer[englishWord];
        questionText = `What is '${englishWord}' in German?`;
    }

    updateQuestionUI(questionText, correctAnswers);
    questionNumber++;
}

function updateQuestionUI(questionText, correctAnswers) {
    document.getElementById('question').innerText = questionText;
    document.getElementById('answer').value = "";
    document.getElementById('answer').dataset.correctAnswers = JSON.stringify(correctAnswers);
}

function checkAndProceed() {
    if (questionNumber > totalQuestions) return;

    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const correctAnswers = JSON.parse(document.getElementById('answer').dataset.correctAnswers);

    const isCorrect = correctAnswers.includes(userAnswer);
    if (!isCorrect) {
        // If the answer is incorrect, add the current question index to wrongAnswersIndices
        wrongAnswersIndices.push([...usedIndices][usedIndices.size - 1]);
    }
    updateFeedback(isCorrect ? "Correct!" : `Incorrect! Correct answers: ${correctAnswers.join(", ")}.`, isCorrect);
    
    nextQuestion();
}

function updateFeedback(feedbackText, isCorrect) {
    document.getElementById('feedback').innerText = feedbackText;
    if (isCorrect) {
        score++;
    } else {
        mistakes++;
    }
    document.getElementById('score').innerText = `Score: ${score} / ${questionNumber}`;
    updateProgressBar();
}

function completeQuiz() {
    document.getElementById('question').innerText = "Quiz Completed!";
    document.getElementById('answer').disabled = true;
    document.getElementById('feedback').innerText = `Final Score: ${score} / ${totalQuestions} with ${mistakes} mistakes.`;

    // Show the "Retry Wrong Answers" button if there are wrong answers
    const retryButton = document.getElementById('retryWrong');
    if (wrongAnswersIndices.length > 0) {
        retryButton.style.display = 'inline';
        retryButton.removeEventListener('click', retryWrongAnswers); // Remove previous listener to avoid duplicates
        retryButton.addEventListener('click', retryWrongAnswers); // Add the event listener for retrying wrong answers
    } else {
        retryButton.style.display = 'none';
    }

    // Setup the "Start Over" button
    const submitBtn = document.getElementById('submit');
    submitBtn.innerText = 'Start Over';
    submitBtn.style.display = 'inline'; // Show the "Start Over" button
    submitBtn.removeEventListener('click', checkAndProceed); // Remove checkAndProceed listener
    submitBtn.addEventListener('click', startOver); // Add startOver listener
}



function retryWrongAnswers() {
    // Filter questions to include only those with indices in wrongAnswersIndices
    questions = questions.filter((_, index) => wrongAnswersIndices.includes(index));
    totalQuestions = questions.length; // Update totalQuestions based on wrongAnswers

    // Hide the "Retry Wrong Answers" button
    document.getElementById('retryWrong').style.display = 'none';

    // Clear the wrong answers list to prepare for the new round of retrying
    wrongAnswersIndices = [];

    // Reset the UI and quiz data for retrying wrong answers
    resetQuiz();

    // Clear the final score and mistakes display
    document.getElementById('feedback').innerText = "";

    // Update the score and mistakes display
    document.getElementById('score').innerText = `Score: 0`;
    document.getElementById('progress-info').innerText = `Question 0 of ${totalQuestions} - Mistakes: 0`;

    // Change the submit button text to "Submit" and reattach the event listener for submitting answers
    const submitBtn = document.getElementById('submit');
    submitBtn.innerText = 'Submit';
    submitBtn.style.display = 'inline';
    submitBtn.removeEventListener('click', startOver); // Remove the startOver listener
    submitBtn.addEventListener('click', checkAndProceed); // Attach the checkAndProceed listener

    // Ensure the input field is re-enabled
    document.getElementById('answer').disabled = false;

    // Start the first question of the retry quiz
    nextQuestion();
}

function startOver() {
    // Restore the full list of questions
    questions = Object.entries(wordPairs200);
    totalQuestions = questions.length;

    // Reset the UI and quiz data
    resetQuiz();

    // Reset the score and mistakes display
    document.getElementById('score').innerText = `Score: 0`;
    document.getElementById('progress-info').innerText = `Question 0 of ${totalQuestions} - Mistakes: 0`;

    // Hide the quiz container and show the mode selection
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('mode-selection').style.display = 'block';
    document.getElementById('submit').innerText = 'Submit';
    document.getElementById('submit').style.display = 'inline';

    // Re-enable the input field
    document.getElementById('answer').disabled = false;

    // Hide the retry button
    document.getElementById('retryWrong').style.display = 'none';

    // Make sure the submit button is ready to check answers when the quiz restarts
    const submitBtn = document.getElementById('submit');
    submitBtn.removeEventListener('click', startOver);
    submitBtn.addEventListener('click', checkAndProceed);
}



document.getElementById('submit').addEventListener('click', checkAndProceed);
document.getElementById('answer').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkAndProceed();
    }
});