function usePrecision() {
    var number = 123.456789;

    // toPrecision() formats the number to a specified length
    var result = number.toPrecision(5);

    // Display the result in the browser
    document.getElementById("Precision_Result").innerHTML =
        "Number formatted with toPrecision(): " + result;
}
