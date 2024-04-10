document.getElementById('submit').addEventListener('click', function() {
    // Get all questions
    var questions = document.querySelectorAll('#questions article');

    var totalQuestions = questions.length;
    var correctAnswers = 0;
    var wrongAnswers = [];

    // Loop through each question
    questions.forEach(function(question) {
        // Get the selected answer
        var selectedAnswer = question.querySelector('input[type="radio"]:checked');

        // Check if an answer was selected
        if (selectedAnswer) {
            // Get the correct answer for the question
            var questionNumber = selectedAnswer.name.slice(1); // Extract the question number from the input name attribute
            var correctOption = getCorrectOption(questionNumber);

            // Check if the selected answer is correct
            if (selectedAnswer.value === correctOption) {
                correctAnswers++;
            } else {
                wrongAnswers.push({ question: question, selected: selectedAnswer.value, correct: correctOption });
            }
        }
    });



    // Calculate the score and display the result
    var score = (correctAnswers / totalQuestions) * 100;
    document.getElementById('score').textContent = 'Your score: ' + score.toFixed(2) + '%';
    document.getElementById('result').style.display = 'block';

    // Display wrong answers
    displayWrongAnswers(wrongAnswers);
});

// Function to get the correct option for each question
function getCorrectOption(questionNumber) {
    switch (questionNumber) {
        case '1':
            return 'b';
        case '2':
            return 'a';
        case '3':
            return 'b';
        case '4':
            return 'd';
        case '5':
            return 'b';
        case '6':
            return 'c';
        case '7':
            return 'b';
        case '8':
            return 'b';
        case '9':
            return 'b';
        case '10':
            return 'd';
        default:
            return '';
    }
}

// Function to display wrong answers
function displayWrongAnswers(wrongAnswers) {
    wrongAnswers.forEach(function(answer) {
        // Create a paragraph element to display the correct option
        var correctOptionP = document.createElement('p');
        correctOptionP.textContent = 'Correct Option: ' + answer.correct;

        // Insert the paragraph element directly below the question
        answer.question.appendChild(correctOptionP);
    });
}
