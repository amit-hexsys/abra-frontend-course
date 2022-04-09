/*
- Check if the number is smaller or larger then the input.
- Show the number of retries.
- Handle new game when guessed right.
- Calculated score by number of max-retries - retries.
- randomize MIN / MAX numbers.
- add colors to a win/lose result.
*/

const randomNumber = (min, max) => {
    return (Math.floor(Math.random() * max) + Math.round(min));
}

let x = randomNumber(0, 1000000);
let y = randomNumber(0, 1000000);
const MAX_GUESS_NUMBER = Math.max(x, y);
const MIN_GUESS_NUMBER = Math.min(x, y);

const MAX_RETRIES = 10;


let guessNumber;
let retires = 0;

const restartGame = () => {
    guessNumber = randomNumber(MIN_GUESS_NUMBER, MAX_GUESS_NUMBER);
    resultElement.textContent = '';
    guessedNumberElement.value = '';
    newGameElement.classList.add('hidden');
    newGameElement.classList.remove('visable');
    retires = 0;

    let retriesElement = document.querySelector('#retries');
    retriesElement.textContent = '0';
}

let descriptionElement = document.querySelector('#description');
descriptionElement.textContent = `Try to guess a number between ${MIN_GUESS_NUMBER} to ${MAX_GUESS_NUMBER}:`;

let guessedNumberElement = document.querySelector('#guessed_number');
let guessButtonElement = document.querySelector('#guess_button');
let resultElement = document.querySelector('#result');
let retriesElement = document.querySelector('#retries');
let newGameElement = document.querySelector('#new_game');
document.querySelector('#max_retries').textContent = String(MAX_RETRIES);
guessButtonElement.addEventListener('click', () => {
    console.log(guessedNumberElement.value);
    const guessedNumber = Number(guessedNumberElement.value);

    if (guessedNumber === guessNumber) {
        const score = MAX_RETRIES - retires;
        resultElement.textContent = `You guessed right ! You score is ${score}`;
        newGameElement.classList.add('visable');
        newGameElement.classList.remove('hidden');
        resultElement.classList.add('win');
        resultElement.classList.remove('lose');

    } else {
        retires++;
        if (retires === MAX_RETRIES) {
            resultElement.textContent = "Your lost :(";
            newGameElement.classList.add('visable');
            newGameElement.classList.remove('hidden');

            resultElement.classList.add('lose');
            resultElement.classList.remove('win');
            return;
        }
        retriesElement.textContent = String(retires);
        if (guessedNumber > guessNumber) {
            resultElement.textContent = "Your guess is higher then the number.";
        } else {
            resultElement.textContent = "Your guess is lower then the number.";
        }
    }
});

newGameElement.addEventListener('click', () => {
    restartGame();
});

restartGame();
console.log(guessNumber);
