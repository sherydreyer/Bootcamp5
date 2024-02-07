// let cat = {
//     legs : 3,
//     "full name" : "Harmony",
//     color : "tortoiseshell"
// }
// let dog = {
//     name : "Pancake",
//     age: 6,
//     color: "white",
//     bark: "Yip yap yip!"
// }

// console.log(cat["legs"]);
// console.log(cat["name"]);
// console.log(cat.name);
// onsole.log(cat["full name"]);

// console.log(Object.keys(cat));
// console.log(Object.keys(dog));

// let cat = {};
// cat["legs"] = 3;
// cat["name"] = "Harmony";
// cat["color"] = "Toroiseshell";
// console.log(cat);

// let cat = {};
// cat.legs  = 3;
// cat.name = "Harmony";
// cat.color  = "Toroiseshell";
// console.log(cat);
// console.log(cat.legs);

// let dog = {
//     name: "Pancake",
//     legs: 4,
//     isAwesome: true
//    };

// console.log(dog.isAwesome);

// let dinosaurs = [
//     { name: "Tyrannosaurus Rex", period: "Late Cretaceous" },
//     { name: "Stegosaurus", period: "Late Jurassic" },
//     { name: "Plateosaurus", period: "Triassic" }
//    ];

// console.log(dinosaurs[2].period);

// let anna = { name: "Anna", age: 11, luckyNumbers: [2, 4, 8, 16] };
// let dave = { name: "Dave", age: 5, luckyNumbers: [3, 9, 40] };
// let kate = { name: "Kate", age: 9, luckyNumbers: [1, 2, 3] };

// let friends = [anna,dave,kate];
// console.log(friends[1]);
// console.log(friends[2].name);
// console.log(friends[1].luckyNumbers[2]);
// console.log(friends[2].luckyNumbers[0]);
// console.log(friends[0].luckyNumbers[3]);
// console.log(friends[1].luckyNumbers[1]);
// console.log(friends[0].luckyNumbers[1]);
// console.log(friends[2].age);
// console.log(friends[1].luckyNumbers[0]);
// console.log(friends[1].luckyNumbers[2]);
// console.log(friends);

// let owedMoney = {};

// owedMoney.Jimmy = 5;
// owedMoney.Anna = 7;

// console.log(owedMoney.Anna);

// owedMoney.Jimmy +=3;

// console.log(owedMoney.Jimmy);

// var movies = {
//     "Finding Nemo": {
//         releaseDate: 2003,
//         duration: 100,
//         actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
//         format: "DVD"
//     },
//     "Star Wars: Episode VI - Return of the Jedi": {
//         releaseDate: 1983,
//         duration: 134,
//         actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
//         format: "DVD"
//     },
//     "Harry Potter and the Goblet of Fire": {
//         releaseDate: 2005,
//         duration: 157,
//         actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
//         format: "Blu-ray"
//     }
// };

// let nemo = movies["Finding Nemo"];
// console.log(nemo);
// console.log(nemo.format);
// console.log(nemo.duration);

// let cars = {
//     releaseDate : 2006,
//     duration : 117,
//     actors : ["Owen Wilson","Bonnie Hunt", "Paul Newton"],
//     format : "Blu-ray"
// }
// console.log(movies);
// movies["Cars"] = cars;
// console.log(movies);
// console.log(Object.keys(movies));


//Challenges

// let scores = {
//     "Merisha" : 0,
//     "Bianca" : 0,
//     "Tracy" : 0
// };
// console.log("********BEFORE*******")
// console.log(scores);

// scores["Merisha"] += 5;
// scores.Bianca += 20;
// console.log("********AFTER ADDING*******")
// console.log( scores);

// console.log("********BEFORE*******")

let myCrazyObject = {
    "name": "A ridiculous object",
    "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
    "random animal": "Banana Shark"
   };

console.log(myCrazyObject["some array"][2].number);
