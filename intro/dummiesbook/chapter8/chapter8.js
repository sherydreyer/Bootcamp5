//The car object is created with properties like make, model, color, year, bodyStyle, and price.
let car = {
    make: "Mercedez Cadillac",
    model: "V8",
    color: "red",
    year: 2022,
    bodyStyle: "SUV",
    price: 500000
    }
    // alert("The type of car is: " + typeof car);
// Update HTML elements with car information
    document.getElementById("pricetag").innerHTML = car.price;
    document.getElementById("modelyear").innerHTML = car.year;
    document.getElementById("body").style.backgroundColor = car.color;
    document.getElementById("body").innerHTML = car.make + " " + car.model;