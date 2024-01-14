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

displayQuestion(index);


// // Create a ordered list 


// // Style the ordered list 
// choicesList.setAttribute('style', 'padding: 0;');

// for (var i = 0; i < questions.length; i++) {
    
//     var currentQuestion = questions[i];
//     // Set question title H2 to currently indexed question value
//     questionTitle.textContent = currentQuestion.question;
    
//     // Create an li element
//     var liElement = document.createElement('li');
    
//     // Add li element to choices ol
//     choicesList.appendChild(liElement);
    

    
//     // Create a button element 
//     var buttonElement = document.createElement('button');
    
//     // Set the button text content to the current indexed answer
//     buttonElement.textContent = currentQuestion.answers[i];
                   
//     // Sets the value of the button to be the same as the textContent of the button
//     buttonElement.value = i; // Use the index as the value
    
//     // Add button element to list element
//     liElement.appendChild(buttonElement);
    
//     buttonElement.addEventListener('click', checkClick); 
// }

// // Add newly created choices list to choices div




function startQuiz(event) {
    event.preventDefault();
    
    console.log('Start has been clicked and timer has started');
    timer();
    
    // When start button is clicked start screen class is = to hide
    startScreen.className = 'start hide';
    // When start button is clicked #questions screen = show
    questionScreen.classList.remove('hide');
    
    
}


startButton.addEventListener('click', startQuiz);





