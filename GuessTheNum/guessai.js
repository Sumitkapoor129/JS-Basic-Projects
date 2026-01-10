const form = document.querySelector('form');
const userInput = document.querySelector('#userinput');
const previous = document.querySelector('#previous');
const remaining = document.querySelector('#remaining');
const result = document.querySelector('#result');
const submitBtn = document.querySelector('.submit');

let guessesLeft = 10;
let randomNum;
let isStarted = false;
let prevGuesses = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Start game
    if (!isStarted) {
        randomNum = Math.floor(Math.random() * 100) + 1; // 1–100
        isStarted = true;
        guessesLeft = 10;

        userInput.disabled = false;
        submitBtn.value = "Submit";
        remaining.textContent = `Guesses Remaining: ${guessesLeft}`;
        result.value = "";
        prevGuesses = [];
        previous.textContent = "Previous Guesses";

        return;
    }

    // Game over → restart
    if (guessesLeft === 0) {
        alert("You Lose!");
        location.reload();
        return;
    }
    if (guessesLeft === -2) {
        location.reload();
        return;
    }

    const guess = Number(userInput.value);

    // Validation
    if (!guess || guess < 1 || guess > 100) {
        result.value = "Enter a valid number (1–100)";
        return;
    }

    prevGuesses.push(guess);
    previous.textContent = `Previous Guesses: ${prevGuesses.join(" - ")}`;

    guessesLeft--;

    if (guess === randomNum) {
        result.value = "YOU WON 🎉";
        submitBtn.value = "Restart";
        guessesLeft = -2;
        return;
    }

    if (guess > randomNum) {
        result.value = `${guess} is Greater than the number`;
    } else {
        result.value = `${guess} is Smaller than the number`;
    }

    remaining.textContent = `Guesses Remaining: ${guessesLeft}`;
    userInput.value = "";
});
