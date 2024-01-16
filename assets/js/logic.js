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

var index = 0;

// Function for timer
function timer() {
    var timeLeft = 60;

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
        liElement.setAttribute('style', 'list-style-type: none;');

            // Create a button element
            var buttonElement = document.createElement('button');

            // Set the button text content to the current indexed answer
            buttonElement.textContent = questions[index].answers[i];

            // Set the value of the button to be the same as the index of the answer
            buttonElement.value = i;

             // Add an event listener to the button to check the answer when clicked
             buttonElement.addEventListener('click', function(event) {
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

displayAnswers();

function navigate(direction) {
    index = index + direction;
    if (index < 0) { 
        index = questions.length - 1; 
    } else if (index > questions.length - 1) { 
        questionScreen.className = 'hide';
        endScreen.classList.remove('hide');
    }

    displayQuestion(index);
    displayAnswers();
}


function checkAnswer(event, index) {
    event.preventDefault();
    
    var selectedAnswer = event.target.value;
    var correctAnswer = questions[index].correctAnswer;

     // Check if the selected answer is correct
     if (selectedAnswer == correctAnswer) {
        console.log('Correct!');
        
        // Handle correct answer logic here
    } else {
        console.log('Incorrect!');
        // Handle incorrect answer logic here
    }
    navigate(1);
}



function startQuiz(event) {
    event.preventDefault();
    
    console.log('Start has been clicked and timer has started');
    timer();
    
    // When start button is clicked start screen class is = to hide
    startScreen.className = 'start hide';
    // When start button is clicked #questions screen = show
    questionScreen.classList.remove('hide');
    
    displayQuestion(index);

}



startButton.addEventListener('click', startQuiz);





