// let ourFirstFunction = function() {
//     console.log("Hello World!");
// }

// ourFirstFunction();

// function ourFirstFunction() {
//     console.log("Hello World!");
// }

// sayHelloTo("Sheryl");

// function sayHelloTo (name) {
//     console.log("Hello " + name);
// }

// drawCats(15);

// function drawCats(howManyTimes) {
//     for (let i = 0; i < howManyTimes;i++) {
//         console.log(i + " =^.^= ");
//     }
// }

// function printMultipleTimes(howManyTimes,whatToDraw) {
//     for (let i = 0; i < howManyTimes;i++) {
//         console.log(i +  " " + whatToDraw);
//     }
// }

// printMultipleTimes(10,"<0#0>");

// function double(number) {
//    return number *2;
// }

// console.log(double(3));

// console.log(double(2) + double(5));

// console.log(double(double(3)));

// function pickRandomWord (words) {
//     let rWord = words[Math.floor(Math.random()* words.length)];
//     return rWord ;
// }
// function generateRandomInsult() {
// var randomBodyParts = ["Face", "Nose", "Hair"];
// var randomAdjectives = ["Smelly", "Boring", "Stupid"];
// var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"]; 
// // Join all the random strings into a sentence:
// var randomString = "Your " + pickRandomWord(randomBodyParts) + " is like a " + 
// pickRandomWord(randomAdjectives)+ " " + pickRandomWord(randomWords) + "!!!";
// console.log(randomString);
// }

// generateRandomInsult();

// function fifthLetter(name) {
//     if (name.length < 5) {
//         return ;
//     }
//     return "The fifth letter of your name is " + name[4];
// }

// let name = prompt("What is your name?");
// console.log(fifthLetter(name));

// function medalForScore(score) {
//     if (score < 3) {
//         return "Bronze";
//     }
//     if (score < 7) {
//         return "Silver";
//     }
//     return "Gold";
// }

// let score = prompt("What is your score?");
// alert(medalForScore(score));

//CHALLENGE 1

// function add(num1, num2) {
//     return num1 + num2;
// }
// function multiply(num1, num2) {
//     return num1 * num2;
// }

// console.log(add(multiply(36325, 9824), 777));

//CHALLENGE 2

function areArraysSame(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}

console.log(areArraysSame([1, 2, 3], [4, 5, 6]));
console.log(areArraysSame([1, 2, 3], [1, 2, 3]));
console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));
