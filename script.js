$(document).ready(function() {
    function getQuestion() {
        // AJAX request to Flask to get a question
    }

    $('#submit').click(function() {
        // AJAX request to submit the answer and get the result
        // Then, request the next question
    });

    getQuestion(); // Load the first question when the page is ready
});