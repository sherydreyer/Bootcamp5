let words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake",
    "computer"
];

let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
let remainingLetters = word.length;
let guess;
let chances = word.length;
while (remainingLetters > 0 && chances > 0) {
    alert("Your Progress:    " + answerArray.join(" "))
    alert("You have " + chances + " left.");
    guess = prompt("Please enter a single letter, or click cancel to EXIT");

    if (guess === null) {
        break;
    } else if (guess.length > 1) {
        alert("Please enter a single letter only");
    } else {
        guess = guess.toLowerCase();
        chances--;
        if (answerArray.includes(guess)) {        
            alert("You have already guessed letter " + guess);
        } else {            
            for (let j = 0; j < word.length; j++) {
                if (word[j] === guess) {
                    answerArray[j] = guess;
                    remainingLetters--;
                }
            }
        }

    }
}
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




