from flask import Flask, jsonify, request, render_template
import random

app = Flask(__name__)

# Your modified functions here, adapted to return data instead of printing or inputting

@app.route('/')
def home():
    # Initialize quiz and store necessary data in session or a global variable
    return render_template('index.html')

@app.route('/question', methods=['POST'])
def get_question():
    # Get user answer from request, process it, and select the next question
    # Return question data and current score as JSON
    return jsonify(question=question, question_number=question_number, total_questions=total_questions, score=score)

if __name__ == '__main__':
    app.run(debug=True)