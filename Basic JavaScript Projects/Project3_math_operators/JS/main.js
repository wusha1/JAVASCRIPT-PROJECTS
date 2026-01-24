function incrementAndDecrement() {
    // Assign a starting number
    var number = 10;

    // Increment the number
    number++;

    // Store increment result
    var incrementResult = number;

    // Decrement the number
    number--;

    // Store decrement result
    var decrementResult = number;

    // Display both results
    document.getElementById("Math").innerHTML =
        "Increment result: " + incrementResult +
        "<br>Decrement result: " + decrementResult;
}