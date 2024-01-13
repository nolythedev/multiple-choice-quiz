// Import questions from questions.js
import { questions } from "./questions.js";

var startButton = document.querySelector('#start');
// Grabs time element
var timerEl = document.querySelector('#time');

questions;

console.log(questions[0].question);

// for (let i = 0; i < questionArray.length; i++) {
//     console.log(questionArray);
// }


// When start button is clicked timer starts 

// Function for timer
function timer() {
    var timeLeft = 10;

    var timerInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);
}

// When start button is clicked start screen class is = to hide

// When start button is clicked #questions screen = show
function startQuiz(event) {
    console.log('Start has been clicked and timer has started');
    timer();
}

startButton.addEventListener('click', startQuiz)