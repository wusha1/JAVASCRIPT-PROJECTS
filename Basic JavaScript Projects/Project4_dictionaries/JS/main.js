function myDictionary() {
    // Created a dictionary using a JavaScript  
    var GameCharacter = {
        Name: "Captain Vale",
        Class: "Pirate",
        Level: 7,
        Weapon: "Cutlass"
    };

    // Output from the dictionary
    document.getElementById("Dictionary").innerHTML = GameCharacter.Weapon;
}
