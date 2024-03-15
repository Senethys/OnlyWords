from flask import Flask, jsonify, request, render_template
import random

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/quiz')
def start_quiz():
    # Get user answer from request, process it, and select the next question
    # Return question data and current score as JSON
    language = request.args.get('language')
    category = request.args.get('selectedWordType')
    count = request.args.get('selectedWordCount')

    return render_template('quiz.html', language=language, category=category, count=count)

if __name__ == '__main__':
    app.run(debug=True)


