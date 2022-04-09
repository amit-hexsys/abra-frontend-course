/*
- Check if the number is smaller or larger then the input.
- Show the number of retries.
- Handle new game when guessed right.
- Calculated score by number of max-retries - retries.
- randomize MIN / MAX numbers.
- add colors to a win/lose result.
*/


const MAX_GUESS_NUMBER = 10;
const MIN_GUESS_NUMBER = 1;
let guessNumber = (Math.floor(Math.random() * MAX_GUESS_NUMBER) + MIN_GUESS_NUMBER);

let descriptionElement = document.querySelector('#description');
console.log(descriptionElement.innerHTML);
console.log(descriptionElement.textContent);
console.log(descriptionElement)

descriptionElement.textContent = `Try to guess a number between ${MIN_GUESS_NUMBER} to ${MAX_GUESS_NUMBER}:`;
console.log(guessNumber);

let guessedNumberElement = document.querySelector('#guessed_number');
let guessButtonElement = document.querySelector('#guess_button');
let resultElement = document.querySelector('#result');
guessButtonElement.addEventListener('click', () => {
    console.log(guessedNumberElement.value);
    if (Number(guessedNumberElement.value) === guessNumber) {
        resultElement.textContent ="You guessed right !";
    } else {
        resultElement.textContent ="You are wrong :(";
    }
});