// concat() METHOD
// Joins multiple strings together
function useConcat() {
    var part1 = "Learning ";
    var part2 = "JavaScript ";
    var part3 = "is fun!";

    var result = part1.concat(part2, part3);

    document.getElementById("Concat_Result").innerHTML = result;
}

// slice() METHOD
// Extracts a section of a string
function useSlice() {
    var text = "JavaScript string methods are useful";

    var result = text.slice(0, 10);

    document.getElementById("Slice_Result").innerHTML = result;
}

// toString() METHOD
// Converts a number into a string
function useToString() {
    var number = 100;

    var result = number.toString();

    document.getElementById("ToString_Result").innerHTML =
        "Number as string: " + result;
}

// toPrecision() METHOD
// Formats a number to a specified length
function usePrecision() {
    var number = 123.456789;

    var result = number.toPrecision(5);

    document.getElementById("Precision_Result").innerHTML =
        "Number with precision: " + result;
}

// valueOf() METHOD
// Returns the value of a Number object
function useValueOf() {
    var numObject = new Number(25);

    var result = numObject.valueOf();

    document.getElementById("Value_Result").innerHTML =
        "Primitive value using valueOf(): " + result;
}
