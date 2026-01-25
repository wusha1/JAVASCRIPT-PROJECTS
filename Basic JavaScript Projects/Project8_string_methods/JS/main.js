// toFixed() METHOD
// Formats a number to a fixed number of decimal places
function useToFixed() {
    var num = 7.45678;

    // Format number to 2 decimal places
    var result = num.toFixed(2);

    document.getElementById("Fixed_Result").innerHTML =
        "Number formatted with toFixed(): " + result;
}

// valueOf() METHOD
// Returns the primitive value of a Number object
function useValueOf() {
    var numObject = new Number(25);

    // Get the primitive value
    var result = numObject.valueOf();

    document.getElementById("Value_Result").innerHTML =
        "Primitive value using valueOf(): " + result;
}
