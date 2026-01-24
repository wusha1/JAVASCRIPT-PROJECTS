function useMathObject() {
    // Use a Math object method
    var number = 4.7;
    var roundedNumber = Math.round(number);

    // Display the result
    document.getElementById("Math").innerHTML =
        "Rounded value: " + roundedNumber;
}
