// let dinosaurs = [
//     "T-Rex",
//     "Velociraptor",
//     "Stegosaurus",
//     "Triceratops",
//     "Brachiosaurus",
//     "Pteranodon",
//     "Apatosaurus",
//     "Diplodocus",
//     "Compsognathus"
// ];

// alert("last dinosaur is " + dinosaurs[dinosaurs.length-1]);
// alert("the 4th dinosaur is " + dinosaurs[3]);
// alert("the 7th dinosaur is " + dinosaurs[6]);
// alert("the 1st dinosaur is " + dinosaurs[0]);
// dinosaurs[0] = "Tyrannosaurus Rex";
// alert("After the change, the 1st dinosaur is " + dinosaurs[0]);
// console.log(dinosaurs);

let dinosaurs = [];
// dinosaurs[0] = "T-Rex";
// dinosaurs[1] = "Velociraptor";
// dinosaurs[2] = "Stegosaurus";
// dinosaurs[3] = "Triceratops";
// dinosaurs[4] = "Brachiosaurus";
// dinosaurs[5] = "Pteranodon";
// dinosaurs[6] = "Apatosaurus";
// dinosaurs[7] = "Diplodocus";
// dinosaurs[8] = "Compsognathus";
// dinosaurs[33] = "Philosoraptor";
// console.log(dinosaurs);

// let dinosaursAndNumbers = [3, "dinosaurs", ["triceratops","stegosaurus", 3627.5], 10];

 
// console.log(dinosaursAndNumbers[2][0]);
// console.log(dinosaursAndNumbers[2][2]);
// console.log(dinosaursAndNumbers[3]);
// console.log(dinosaursAndNumbers[2][1]);

// let maniacs  = ["Yakko", "Wakko", "Dot"];
// console.log(maniacs[0]);
// console.log(maniacs[1]);
// console.log(maniacs[2]);
// console.log(maniacs[maniacs.length-1]);
// console.log(maniacs.length);

// let animals = [];
// animals.push("Cat");
// console.log(animals);
// animals.push("Dog");
// console.log(animals);
// animals.push("Llama");
// console.log(animals);
// console.log(animals.length);
// animals.unshift("Monkey");
// console.log(animals);
// animals.unshift("Polar Bear");
// console.log(animals);

// let lastAnimal = animals.pop();
// console.log(lastAnimal);
// console.log(animals);

// let firstAnimal = animals.shift();
// console.log(firstAnimal);
// console.log(animals);

// let furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"];
// let scalyAnimals = ["Boa Constrictor", "Godzilla"];
// let featheredAnimals = ["Macaw", "Dodo"];

// let furryAndScalyAndFeatheredAnimals = furryAnimals.concat(scalyAnimals,featheredAnimals);

// console.log(furryAnimals);
// console.log(scalyAnimals);
// console.log(featheredAnimals);
// console.log(furryAndScalyAndFeatheredAnimals);

// let colors = ["red","green","blue"];
// console.log(colors.indexOf("blue"));
// console.log(colors.indexOf("purple"));

// let boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];
// console.log(boringAnimals.join());
// console.log(boringAnimals.join(" - "));
// console.log(boringAnimals.join(" * "));
// console.log(boringAnimals.join(" "));
// console.log(boringAnimals.join(" sees "));

// let  myNames = ["Nicholas", "Andrew", "Maxwell", "Morgan"];
// let stringNames =  myNames.join(" ");
// console.log(myNames);
// console.log(stringNames);

// let randomNumber = Math.random();
// console.log(randomNumber);

// console.log(Math.random() * 11)

// console.log(Math.floor(Math.random() * 10) + 1);


// let randomWords = ["Explosion", "Cave","Princess","Pen","Chocolate","Car","House"];
// let randomIndex = Math.floor(Math.random() * randomWords.length);
// console.log(randomWords[randomIndex]);

let phrases = [
    "That sounds good",
    "Yes, you should definitely do that",
    "I'm not sure that's a great idea",
    "Maybe not today?",
    "Computer says no."
   ];

//console.log(phrases[Math.floor(Math.random()*phrases.length)])


// let index = Math.floor(Math.random() * phrases.length);
// console.log(phrases[index]);

//RANDOM INSULT GENERATOR

// let randomBodyParts = ["Face","Nose","Hair"];
// let randomAdjectives = ["Smelly","Boring","Stupid"];
// let randomWords = ["Fly","Marmot","Stick","Monkey","Rat"];

// let word1 = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
// let word2 = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
// let word3 = randomWords[Math.floor(Math.random() * randomWords.length)];

// //let randomInsult = "Your " + word1 + " is like a " + word2 + " " + word3 + "!";
// let randomInsult = ["Your",word1,"is like a ",word2,word3,"!"].join(" ");

 let challenge4 = [3,2,1].join(" is bigger than ");
 console.log(challenge4);


