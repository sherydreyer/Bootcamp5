let words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake",
    "computer"
];

let word = pickWord();

let answerArray = [];
setupAnswerArray();

let remainingLetters = word.length;
let guess;
let chances = word.length;
while (remainingLetters > 0 && chances > 0) {
    showPlayerProgress();
    guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length > 1) {
        alert("Please enter a single letter only");
    } else {
        let correctGuesses = updateGameState();
        remainingLetters -= correctGuesses;
    }
}
showAnswerAndCongratulatePlayer();


function pickWord() {
    // Return a random word
    return words[Math.floor(Math.random() * words.length)];
}
function setupAnswerArray() {
    // Return the answer array
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
}
function showPlayerProgress() {
    // Use alert to show the player their progress
    alert("Your Progress:    " + answerArray.join(" "));
    alert("You have " + chances + " left.");
}
function getGuess() {
    // Use prompt to get a guess
    return prompt("Please enter a single letter, or click cancel to EXIT");
}
function updateGameState() {
    // Update answerArray and return a number showing how many
    // times the guess appears in the word so remainingLetters
    // can be updated
    guess = guess.toLowerCase();
    chances--;
    let correctGuesses = 0;
    if (answerArray.includes(guess)) {
        alert("You have already guessed letter " + guess);
    } else {
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                correctGuesses++;
            }
        }

    }
    return correctGuesses;
}
function showAnswerAndCongratulatePlayer() {
    // Use alert to show the answer and congratulate the player
    if (guess === null) {
        alert("Sorry you to see you leave. The answer was " + word);
    } else if (remainingLetters === 0) {
        alert("Your Final Result:    " + answerArray.join(" "));
        alert("Good job!");
    } else if (chances === 0) {
        alert("Sorry you ran out of guesses!");
    } else {
        alert("something went wrong!!!");
    }
}




