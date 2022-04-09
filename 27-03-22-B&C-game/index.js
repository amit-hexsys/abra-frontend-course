const randomIndex = (max) => {
    return (Math.floor(Math.random() * max));
}

const newRandomNum = () => {
    let digitsArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let fourDigitsArr = [];
    for (let i = 0; i < 4; i++) {
        let index = randomIndex(digitsArr.length);
        let randomDigit = digitsArr[index];
        fourDigitsArr.push(randomDigit);
        digitsArr.splice(index, 1);
    }
    return fourDigitsArr;
}

let fourDigitsArr = newRandomNum();
console.log(fourDigitsArr);

let guessButtonElement = document.getElementById('guess-btn');
guessButtonElement.addEventListener('click', () => {
    let userInput = [
        Number(document.getElementById('num1').value),
        Number(document.getElementById('num2').value),
        Number(document.getElementById('num3').value),
        Number(document.getElementById('num4').value),
    ];
    let bull = 0;
    let apgia = 0;
    for (let i = 0; i < 4; i++) {
        if (userInput[i] === fourDigitsArr[i]) {
            bull++;
        } else if (fourDigitsArr.indexOf(userInput[i]) > -1) {
            apgia++;
        }
    }
    console.log({ fourDigitsArr, userInput });
    console.log({ bull, apgia });
    let scoreElement = document.getElementById('score');
    scoreElement.textContent = `Bulls: ${bull} | Cows: ${apgia}`;
    if (bull === 4) {
        let resultGameElement = document.getElementById('result-game');
        resultGameElement.textContent = `You guessed right!`;
    } else {
        let resultGameElement = document.getElementById('result-game');
        resultGameElement.textContent = `You're wrong :(`;
    }
});

let preGuessesElement = document.getElementById ('guesses');
let newGameElement = document.getElementById('newgame-btn');
newGameElement.addEventListener('click', () => {
    fourDigitsArr = newRandomNum();
    console.log(fourDigitsArr);
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('num3').value = "";
    document.getElementById('num4').value = "";
    document.getElementById('score').textContent = "";
    document.getElementById('result-game').textContent = "";
    preGuessesElement.classList.add('hidden');
    preGuessesElement.classList.remove('visible');
     
});

let isPopupOpen = false;

let PopupElement = document.getElementById('popup');
PopupElement.addEventListener('click', () => {
    PopupElement.classList.add('hidden');
    PopupElement.classList.remove('visible');
    isPopupOpen = false;
});

let openPopupElement = document.getElementById('info-icon')
openPopupElement.addEventListener('click', () => {
    if (isPopupOpen === false) {
        PopupElement.classList.add('visible');
        PopupElement.classList.remove('hidden');
        isPopupOpen = true;
    } else {
        PopupElement.classList.add('hidden');
        PopupElement.classList.remove('visible');
        isPopupOpen = false;
    }
});

