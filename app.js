// import functions and grab DOM elements
import { compareNumbers, finalNumber } from "./utils.js";
const myButton = document.getElementById('button');
const myHints = document.getElementById('hints');
const highOrLow = document.getElementById('too-high');
const myChances = document.getElementById('chances');
const myResults = document.getElementById('results');
// initialize global state
let chances = 4;
let correctNumber = finalNumber();

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

myButton.addEventListener('click', () => {
    let myInput = document.getElementById('userInput');
    const myguess = compareNumbers(Number(myInput.value), correctNumber);

    if (myInput.value === correctNumber){
        return myResults.textContent = 'You Win!';
        
    } else if (myInput.value !== correctNumber){
        chances --;
        myResults.textContent = 'You lose!';
        

    }
});