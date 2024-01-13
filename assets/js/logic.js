// Import questions from questions.js
import { questions } from "./questions.js";

var startButton = document.querySelector('#start');
// Grabs time element
var timerEl = document.querySelector('#time');
// Grabs start-screen div 
var startScreen = document.querySelector('#start-screen');
// Grabs question div 
var questionScreen = document.querySelector('#questions');

questions;

console.log(questions[0].question);

// for (let i = 0; i < questionArray.length; i++) {
//     console.log(questionArray);
// }



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

function startQuiz(event) {
    console.log('Start has been clicked and timer has started');
    timer();
    
    // When start button is clicked start screen class is = to hide
    startScreen.className = 'start hide';
    // When start button is clicked #questions screen = show
    questionScreen.classList.remove('hide');
}

startButton.addEventListener('click', startQuiz)