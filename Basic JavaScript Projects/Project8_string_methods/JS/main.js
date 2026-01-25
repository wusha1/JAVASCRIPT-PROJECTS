function combineStrings() {
    var part1 = "Learning ";
    var part2 = "JavaScript ";
    var part3 = "is fun!";

    // concat() method joins the strings together
    var fullSentence = part1.concat(part2, part3);

    // Displays the results in the HTML element
    document.getElementById("Concatenate").innerHTML = fullSentence;
}
