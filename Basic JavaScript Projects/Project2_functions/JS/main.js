function concatenateStrings() {
    // Assigns a string variable
    var sentence = "This is the biginning of the string";

    // Using the += operator to concatenate
    sentence += " and this is the end of the string";

    // Displays the concatenated string
    document.getElementById("output").innerHTML = sentence;
}