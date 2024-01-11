import { questions } from "./questions.js";

let questionArray = questions;

for (let index = 0; index < questionArray.length; index++) {
    const element = questionArray[index];
    console.log(element.question);
}