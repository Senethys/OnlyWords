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

let score = 0;
let questionNumber = 1;
let questions = Object.entries(wordPairs200).flatMap(([ger, eng]) => [
    { question: ger, answer: eng, direction: "GE" }, // German to English
    { question: eng, answer: ger, direction: "EG" }  // English to German
]);
let totalQuestions = questions.length; // Now correctly reflecting each pair as two questions
let mistakes = 0;
let usedIndices = new Set();

function initializeQuiz() {
    document.getElementById('submit').addEventListener('click', checkAndProceed);
    document.getElementById('answer').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            checkAndProceed();
        }
    });

    nextQuestion();
}

function nextQuestion() {
    if (questionNumber > totalQuestions) {
        document.getElementById('question').innerText = "Quiz Completed!";
        document.getElementById('submit').style.display = 'none';
        return;
    }

    let index;
    do {
        index = Math.floor(Math.random() * totalQuestions);
    } while (usedIndices.has(index));
    usedIndices.add(index); // Mark this index as used

    const questionItem = questions[index];
    let questionText;
    let correctAnswers;

    if (questionItem.direction === "GE") {
        questionText = `What is '${questionItem.question}' in English?`;
        correctAnswers = questionItem.answer.split(", ").map(answer => answer.trim().toLowerCase());
    } else { // "EG"
        questionText = `What is '${questionItem.question}' in German?`;
        correctAnswers = [questionItem.answer.toLowerCase()];
    }

    document.getElementById('question').innerText = questionText;
    document.getElementById('answer').value = "";
    document.getElementById('answer').focus();
    document.getElementById('answer').dataset.correctAnswers = JSON.stringify(correctAnswers);
    
    updateProgressBar(); // Update progress bar for the new question
}

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progressInfo = document.getElementById('progress-info');
    const progressPercentage = (questionNumber / totalQuestions) * 100;

    progressBar.style.width = `${progressPercentage}%`;
    progressInfo.innerText = `Question ${questionNumber} of ${totalQuestions} - Mistakes: ${mistakes}`;
}

function checkAndProceed() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const correctAnswers = JSON.parse(document.getElementById('answer').dataset.correctAnswers);

    if (correctAnswers.includes(userAnswer)) {
        score++;
        document.getElementById('feedback').innerText = "Correct!";
    } else {
        document.getElementById('feedback').innerText = `Incorrect! Correct answers: ${correctAnswers.join(", ")}.`;
        mistakes++; // Increment the mistake count
    }

    questionNumber++; // Increment for the next question
    document.getElementById('score').innerText = `Score: ${score}/${questionNumber - 1}`;
    updateProgressBar(); // Update the progress bar after each question
    nextQuestion(); // Proceed to the next question
}

initializeQuiz(); // Start the quiz
updateProgressBar(); // Initialize the progress bart