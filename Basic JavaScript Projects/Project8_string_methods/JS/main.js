// toUpperCase() METHOD
// Converts a string to uppercase
function makeUppercase() {
    var text = "learning javascript is fun";
    var result = text.toUpperCase();

    document.getElementById("Uppercase_Result").innerHTML = result;
}

// search() METHOD
// Finds the position of a word in a string
function searchText() {
    var sentence = "JavaScript makes web development powerful";
    var position = sentence.search("web");

    document.getElementById("Search_Result").innerHTML =
        "The word 'web' starts at position: " + position;
}
