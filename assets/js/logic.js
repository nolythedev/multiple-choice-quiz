// Import questions from questions.js
import { questions } from "./questions.js";

var startButton = document.querySelector('#start');
// Grabs time element
var timerEl = document.querySelector('#time');
// Grabs start-screen div 
var startScreen = document.querySelector('#start-screen');
// Grabs questions div 
var questionScreen = document.querySelector('#questions');
var endScreen = document.querySelector('#end-screen');
// Grabs question H2 
var questionTitle = document.querySelector('#question-title');
// Grab choices div
var choices = document.querySelector('#choices');
var feedback = document.querySelector('#feedback')
var success = document.createElement('p');
var failure = document.createElement('p');
// Grabs the submit button
var submitScoreBtn = document.querySelector('#submit');

var initials = document.querySelector('#initials');

var highScore = document.querySelector('#highscores');

var index = 0;

var score = 0;



// Function for timer
function timer(timeLeft) {
   
    // When start button is clicked timer starts 
    var timerInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);
}

function displayQuestion(index) {
    // Check if index is within the array bounds
    if (index < questions.length) {
        var currentQuestion = questions[index];
        // Set question title H2 to the current question value
        questionTitle.textContent = currentQuestion.question;
    }
}

function displayAnswers() {

    // Clear the existing choices
    choices.innerHTML = "";

    // Create an ordered list element
    var choicesList = document.createElement('ol');

    // Loop through the answers array of the current question
    for (var i = 0; i < questions[index].answers.length; i++) {
        // Create an li element for each answer
        var liElement = document.createElement('li');

        // Style the li element
        liElement.setAttribute('style', 'list-style-type: none; background: transparent;');

        // Create a button element
        var buttonElement = document.createElement('button');

        buttonElement.setAttribute('style', 'min-width: 200px; text-align: left;');

        // Set the button text content to the current indexed answer
        buttonElement.textContent = questions[index].answers[i];

        // Set the value of the button to be the same as the index of the answer
        buttonElement.value = i;

        // Add an event listener to the button to check the answer when clicked
        buttonElement.addEventListener('click', function (event) {
            checkAnswer(event, index);
        });

        // Add button element to list element
        liElement.appendChild(buttonElement);

        // Add li element to choices ol
        choicesList.appendChild(liElement);
    }

    // Append the choicesList to the choices container
    choices.appendChild(choicesList);
}


function checkAnswer(event, index) {
    event.preventDefault();

    // Grabs the value of the selected answer
    var selectedAnswer = event.target.value;
    // Grabs the correct answer from the current question
    var correctAnswer = questions[index].correctAnswer;

    // Clear previous success/fail messages
    feedback.innerHTML = '';

    // Check if the selected answer is correct
    if (selectedAnswer == correctAnswer) {
        score++;

        // Removes class, adds text content then appends new element
        feedback.classList.remove('hide');
        success.textContent = 'Correct';
        feedback.append(success);

        // Handle correct answer logic here
    } else {
        score - 1;

        feedback.classList.remove('hide');
        failure.textContent = 'Incorrect';
        feedback.append(failure);

        // Handle incorrect answer logic here
    }

    // Hide the success/fail message after a delay
    setTimeout(function () {
        feedback.classList.add('hide');
    }, 500);

    navigate(1);
}

// Navigate function inspired from image carousel task
function navigate(direction) {
    index = index + direction;
     // Check if timer has reached 0 and there are more questions
     if (timer === 0 && index < questions.length) {
        questionScreen.className = 'hide';
        endScreen.classList.remove('hide');
        document.querySelector('#final-score').textContent = score;
        return;
    }

    if (index < 0) {
        index = questions.length - 1;
    } else if (index > questions.length - 1) {
        // Delay last screen
        setTimeout(function () {
            questionScreen.className = 'hide';
            endScreen.classList.remove('hide');
        }, 700);

        document.querySelector('#final-score').textContent = score;

        return;
    }

    displayQuestion(index);
    displayAnswers();
}

function submitScore(event) {
    event.preventDefault();

    localStorage.setItem("Initials", initials.value);
    localStorage.setItem("Score", score);
   
    initials.value = '';

}

function startQuiz(event) {
    event.preventDefault();

    console.log('Start has been clicked and timer has started');
    timer(60);

    // When start button is clicked start screen class is = to hide
    startScreen.className = 'start hide';
    // When start button is clicked #questions screen = show
    questionScreen.classList.remove('hide');

    displayQuestion(index);
    displayAnswers();
}

startButton.addEventListener('click', startQuiz);
submitScoreBtn.addEventListener('click', submitScore);





