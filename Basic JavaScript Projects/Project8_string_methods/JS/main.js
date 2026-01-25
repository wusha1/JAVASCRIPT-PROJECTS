function convertToString() {
    var num = 456;

    // toString() converts a number into a string
    var result = num.toString();

    // Displays the results in the browser
    document.getElementById("Number_Output").innerHTML =
        "Converted number as a string: " + result;
}
