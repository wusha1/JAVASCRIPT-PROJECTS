// WHILE LOOP FUNCTION
// function uses a while loop to count from 1 to 5
function while_Function() {
    let count = 1;
    let text = "";

    while (count <= 5) {
        text += "While loop count: " + count + "<br>";
        count++;
    }

    document.getElementById("While_Loop").innerHTML = text;
}

// FOR LOOP FUNCTION
// function uses a for loop to count from 0 to 4
function for_Function() {
    let text = "";

    for (let i = 0; i < 5; i++) {
        text += "For loop number: " + i + "<br>";
    }

    document.getElementById("For_Loop").innerHTML = text;
}

// ARRAY FUNCTION
// function uses an array and displays one value from it
function array_Function() {
    let fruits = ["Apple", "Banana", "Orange", "Grapes"];

    document.getElementById("Array").innerHTML =
        "My favorite fruit is " + fruits[1] + ".";
}

// OBJECT FUNCTION
// function creates an object using the let keyword
function object_Function() {
    let car = {
        make: "Toyota",
        model: "Tacoma",
        year: 2022,
        description: function () {
            return this.year + " " + this.make + " " + this.model;
        }
    };

    document.getElementById("Object").innerHTML =
        "Vehicle: " + car.description();
}
