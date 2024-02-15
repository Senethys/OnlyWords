import random

# Dictionary of German-English word pairs
word_pairs = {
  "aber": "but",
    "alle": "all",
    "als": "as, when",
    "alt": "old",
    "am (an dem)": "at the",
    "an": "at, on",
    "andere": "other",
    "auch": "also, too",
    "auf": "on, upon",
    "aus": "from, out of",
    "Auto": "car",
    "bauen": "build",
    "bei": "at, by, near",
    "bekommen": "receive, get",
    "bleiben": "stay, remain",
    "brauchen": "need",
    "bringen": "bring",
    "dann": "then",
    "das": "the, that",
    "den": "the (accusative masculine article)",
    "denken": "think",
    "der": "the (nominative masculine article)",
    "dich": "you (accusative)",
    "die": "the (feminine and plural article)",
    "dürfen": "may, to be allowed",
    "ein (eine, einer)": "a, an (masculine, feminine, neuter)",
    "er": "he",
    "essen (Essen)": "eat (food)",
    "fahren": "drive, ride, go",
    "finden": "find",
    "Frau": "woman, Mrs.",
    "für": "for",
    "ganz": "whole, entire",
    "geben": "give",
    "gehen": "go, walk",
    "gern(e)": "gladly, like to",
    "groß(e)": "big, large, tall",
    "gut": "good",
    "haben": "have",
    "halten": "hold, keep",
    "Hand": "hand",
    "Haus": "house",
    "heißen": "be called, mean",
    "heute": "today",
    "hoch": "high, tall",
    "ich": "I",
    "im (in dem)": "in the",
    "immer": "always",
    "in": "in",
    "ja": "yes",
    "Jahr": "year",
    "jetzt": "now",
    "kaufen": "buy",
    "Kind": "child",
    "klein": "small, little",
    "kommen": "come",
    "können": "can, to be able",
    "lang(e)": "long",
    "laufen": "run, walk",
    "leben (Leben)": "live (life)",
    "liegen": "lie, be situated",
    "machen": "make, do",
    "Mann": "man",
    "müssen": "must, to have to",
    "Mutter (Mutti)": "mother (mom)",
    "nehmen": "take",
    "neu": "new",
    "nicht": "not",
    "noch": "still, yet",
    "nur": "only",
    "sagen": "say",
    "schnell": "fast, quick",
    "schon": "already",
    "schön": "beautiful, nice",
    "schreiben": "write",
    "Schule": "school",
    "sehen": "see",
    "sie": "she, they, you (formal)",
    "so": "so, such",
    "spielen": "play",
    "stehen": "stand",
    "Tag": "day",
    "tun": "do",
    "Uhr": "clock, watch",
    "um": "around, at (time)",
    "Vater (Vati)": "father (dad)",
    "viel": "much, many",
    "von": "from, of",
    "vor": "before, in front of",
    "was": "what",
    "Wasser": "water",
    "weit (weiter)": "far (further)",
    "wenn": "if, when",
    "werden": "become, will (future tense)",
    "wie": "how, like, as",
    "wieder": "again",
    "wir": "we",
    "wollen": "want, to want",
    "Zeit": "time",
    "zu (zu-)": "to, too, at"
}
import random

def initialize_eng_to_ger(word_pairs):
    """Create a reverse mapping from English to German."""
    eng_to_ger = {}
    for ger, eng in word_pairs.items():
        for eng_word in eng.split(","):
            eng_word = eng_word.strip()
            if eng_word not in eng_to_ger:
                eng_to_ger[eng_word] = []
            eng_to_ger[eng_word].append(ger)
    return eng_to_ger

def select_question(word_list, eng_to_ger, direction):
    """Select a question based on the direction of translation."""
    if direction == "German to English":
        german, english = random.choice(word_list)
        return german, english.split(", "), direction
    else:
        english, germans = random.choice(list(eng_to_ger.items()))
        return english, germans, direction

def ask_question(question, question_number, total_questions):
    """Ask the current question and get the user's answer."""
    word, translations, direction = question  # Correctly unpack all three elements of the tuple
    if direction == "German to English":
        print(f"Question {question_number}/{total_questions}: What is '{word}' in English?")
    else:  # English to German
        print(f"Question {question_number}/{total_questions}: What is '{word}' in German?")
    return input("Your answer: ").strip().lower()


def check_answer(user_answer, correct_answers):
    """Check if the user's answer is correct."""
    return user_answer in [answer.lower() for answer in correct_answers]

def update_score_and_status(word_list, question, score, is_correct):
    """Update the score and remove the word pair from the list if correct."""
    if is_correct:
        print("Correct!")
        score += 1
        if question[2] == "German to English":  # Remove the word pair only for German to English direction
            word_list.remove((question[0], ", ".join(question[1])))
    else:
        correct_answer_str = ', '.join(question[1])
        print(f"Incorrect! Correct answers include: {correct_answer_str}.")
    return score

def quiz(word_pairs):
    score = 0
    total_questions = len(word_pairs)
    word_list = list(word_pairs.items())
    eng_to_ger = initialize_eng_to_ger(word_pairs)

    for question_number in range(1, total_questions + 1):
        direction = random.choice(["German to English", "English to German"])
        question = select_question(word_list, eng_to_ger, direction)
        user_answer = ask_question(question, question_number, total_questions)
        is_correct = check_answer(user_answer, question[1])
        score = update_score_and_status(word_list, question, score, is_correct)
        print(f"Words Done: {question_number}/{total_questions}")
        print(f"Current Score: {score}/{question_number}\n")

    print(f"Final Score: {score}/{total_questions}")

# Example usage
quiz(word_pairs)