// Import questions from questions.js
import { questions } from "./questions.js";

var startButton = document.querySelector('#start');
// Grabs time element
var timerEl = document.querySelector('#time');
// Grabs start-screen div 
var startScreen = document.querySelector('#start-screen');
// Grabs questions div 
var questionScreen = document.querySelector('#questions');
// Grabs question H2 
var questionTitle = document.querySelector('#question-title');
// Grab choices div
var choices = document.querySelector('#choices');

questions;

console.log(questions);

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


function getQuestions() {

    // Create a ordered list 
    var choicesList = document.createElement('ol');

    // Style the ordered list 
    choicesList.setAttribute('style', 'padding: 0;');
    
    // Iterate through questions array
    for (var i = 0; i < questions.length; i++) {

        // Set convineice variable question to question[i]
        var question = questions[i];

        // Set question title H2 to currently indexed question value
        questionTitle.textContent = question.question;
        
        // Create an li element
        var liElement = document.createElement('li');
        
        // Add li element to choices ol
        choicesList.appendChild(liElement);
        
        // Style the li element
        liElement.setAttribute('style', 'list-style-type: none;');
        
        // Create a button element 
        var buttonElement = document.createElement('button');
        
        // Set the button text content to current indexed question then set the same index to answers to get current indexed questions answer
        buttonElement.textContent = question.answers[i];
        
        // Add button element to list element
        liElement.appendChild(buttonElement);
    }
    // Add newly created choices list to choices div
    choices.appendChild(choicesList);
}


function startQuiz(event) {
    console.log('Start has been clicked and timer has started');
    timer();

    // When start button is clicked start screen class is = to hide
    startScreen.className = 'start hide';
    // When start button is clicked #questions screen = show
    questionScreen.classList.remove('hide');

    getQuestions();

}

startButton.addEventListener('click', startQuiz)


// Set textContent of question-title to questions





