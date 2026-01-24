function showRandomNumber() {
    // Generate a random number between 0 and 1
    var randomNumber = Math.random();

    // Display the random number
    document.getElementById("Math").innerHTML =
        "Random number: " + randomNumber;
}
