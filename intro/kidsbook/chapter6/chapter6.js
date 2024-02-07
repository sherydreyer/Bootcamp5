// let name = prompt("What is your name?")
// alert("Hello " + name);
// if (name.length > 7) {
//    alert("Wow! You have a REALLY long name!");
// }else {
//     alert("Your name isn't very long!");
// }

// let lemonChicken = confirm("Chef, do you have lemon chicken?");
// let beefWithBlackBean = confirm("Chef,do you have beef with blackbean?");
// let sweetAndSourPork = confirm("Chef, do you have sweet sour pork?");

// if (lemonChicken) {
//     alert("Great, I am having lemon chicken!");
// } else if (beefWithBlackBean) {
//     alert(" I am having beef!");
// } else if (sweetAndSourPork) {
//     alert("Ok, I'll have prok!");
// } else {
//     alert("I am having rice then");
// }

// let name = prompt("What is your name?").toLowerCase();
// let mom = 'bernie';
// let dad = "brad";
// let myName = 'sheryl';

// if (name === mom) {
//     alert("Hi Mom!");
// } else if (name === dad) {
//     alert("Hi Dad!");
// }else if (name === myName) {
//     alert("Hi me!")
// }else {
//     alert("Hi Stranger!");
// }

// ******LOOPS*******

// let sheepCounted = 0;

// while (sheepCounted < 10 ) {
//     console.log("I have counted " + sheepCounted + " sheep!");
//     sheepCounted++;
// }

// console.log("Zzzzzzzzzzzzzzzz");



// for (let sheepCounted = 0;sheepCounted < 10; sheepCounted++) {
//     console.log("I have counted " + sheepCounted + " sheep!");
//    }

// console.log("Zzzzzzzzzzzzzzzz");


// let timesToSayHello = 1000;
// for (let i = 0; i < timesToSayHello; i++) 
// {

//     console.log("Hello");
// }

// let animals = ["Lion","Flamingo","Polar Bear", "Boa Constrictor"];

// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i]);
// }


// let name = prompt("What is your name?");

// for(let i =0; i < name.length; i++) {
//     console.log("Your Name contains letter " + name[i]);
// }

// console.log("***POWERS OF 2 ******");
// for( let x = 2; x < 10000 ; x *= 2) {
//     console.log(x);
// }

// console.log("***POWERS OF 3 ******");
// for( let x = 3; x < 10000 ; x *= 3) {
//     console.log(x);
// }

// //CHALLENGE 1

// let animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];

// for (let i = 0; i < animals.length; i++) {
//     animals[i] = "Awesome " + animals[i];
// }

// console.log(animals);

// //Challenge 2

// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let randomString = "";
// let i = 0;
// while (i < 6) {
//     randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
//     i++;
// }

// console.log(randomString);

//Challenge 3
let input = prompt("Challenge 3: Enter a word");
let output = "";

for (let i = 0; i < input.length; i++) {
    if (input[i] === "a") {
        output += "4";
    } else if (input[i] === "e") {
        output += "3";
    } else if (input[i] === "i") {
        output += "1";
    } else if (input[i] === "o") {
        output += "0";
    } else {
        output += input[i];
    }
}

alert(output);

// let input = prompt("Challenge 3: Enter a word")
// let output = "";
// let i = 0;
// while ( i < input.length) {
//     if (input[i] === "a") {
//         output += "4";
//     } else if (input[i] === "e") {
//         output += "3";
//     } else if (input[i] === "i") {
//         output += "1";
//     } else if (input[i] === "o") {
//         output += "0";
//     } else {
//         output += input[i];
//     }
//     i++;
// }

// alert(output);

