// import functions and grab DOM elements
import { compareNumbers, finalNumber } from './utils.js';
const myButton = document.getElementById('button');
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
    const myInput = document.getElementById('userInput');
    const myNumberInput = Number(myInput.value);
    const myGuess = compareNumbers(myNumberInput, correctNumber);
    
    if (myNumberInput === correctNumber){
        myResults.textContent = myGuess;
        myButton.disabled = true;
       
        
    } else {
        chances--;
        myResults.textContent = myGuess;
        myChances.textContent = `You have ${chances} chances remaining.`;
        

    } if (chances === 0){
        myResults.textContent = 'Game Over!'; 
        myButton.disabled = true;
        
    }
});
   