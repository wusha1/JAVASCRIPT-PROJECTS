function concatenateStrings() {
    // Assigns a string variable
    var sentence = "This is the beginning of the string";

    // Uses the += operator to concatenate
    sentence += " and this is the end of the string";

    // Displays the results
    document.getElementById("output").innerHTML = sentence;
}