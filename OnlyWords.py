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

def quiz(word_pairs):
    score = 0
    total_questions = len(word_pairs)
    word_list = list(word_pairs.items())  # Convert dictionary to a list of tuples

    while word_list:
        question_number = total_questions - len(word_list) + 1
        german, english = random.choice(word_list)  # Randomly select a word pair
        word_list.remove((german, english))  # Remove the selected word pair from the list

        # Randomly choose the question language
        question_lang = random.choice(["German", "English"])
        
        if question_lang == "German":
            print(f"Question {question_number}/{total_questions}: What is '{german}' in English?")
            answer = input("Your answer: ").strip().lower()
            correct_answer = english.lower()
        else:
            print(f"Question {question_number}/{total_questions}: What is '{english}' in German?")
            answer = input("Your answer: ").strip().lower()
            correct_answer = german.lower()
        
        if answer == correct_answer:
            print("Correct!")
            score += 1
        else:
            print(f"Incorrect! The correct answer was '{correct_answer}'.")

        print(f"Words Done: {question_number}/{total_questions}")
        print(f"Current Score: {score}/{question_number}\n")
    
    print(f"Final Score: {score}/{total_questions}")

# Start the quiz
quiz(word_pairs)