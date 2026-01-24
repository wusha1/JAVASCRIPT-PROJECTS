function myDictionary() {
    // Created a dictionary using a JavaScript object
    var GameCharacter = {
        Name: "Captain Vale",
        Class: "Pirate",
        Level: 7,
        Weapon: "Cutlass"
    };

    // Delete a value from the dictionary
    delete GameCharacter.Weapon;

    // Attempt to display the deleted value
    document.getElementById("Dictionary").innerHTML = GameCharacter.Weapon;
}
