function myDictionary() {
    // Createa a dictionary using a JavaScript
    var Animal = {
        Type: "Dog",
        Breed: "Husky",
        Age: 3,
        Color: "Gray"
    };

    // Deletes a key-value pair from the dictionary
    delete Animal.Color;

    // Displays the deleted value which shows as unrefined
    document.getElementById("Dictionary").innerHTML = Animal.Color;
}
