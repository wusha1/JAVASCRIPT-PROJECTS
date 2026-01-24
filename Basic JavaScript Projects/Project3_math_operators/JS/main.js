// Addition
function addNumbers() {
    document.getElementById("Math").innerHTML = 5 + 5;
}

// Subtraction
function subtractNumbers() {
    document.getElementById("Math").innerHTML = 10 - 3;
}

// Multiplication
function multiplyNumbers() {
    document.getElementById("Math").innerHTML = 4 * 6;
}

// Modulus
function modulusNumbers() {
    document.getElementById("Math").innerHTML = 25 % 6;
}

// Increment
function incrementNumber() {
    var num = 10;
    num++;
    document.getElementById("Math").innerHTML = num;
}

// Decrement
function decrementNumber() {
    var num = 10;
    num--;
    document.getElementById("Math").innerHTML = num;
}

// Math.random
function randomNumber() {
    document.getElementById("Math").innerHTML = Math.random();
}
