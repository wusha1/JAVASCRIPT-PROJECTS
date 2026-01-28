function constant_function() {
    const instrument = {
        type: "Guitar",
        brand: "Fender",
        color: "Black"
    };

    // Changes a property value
    instrument.color = "Red";

    // Adds a new property with a value
    instrument.condition = "Brand new";

    // Displays a string using the changed and added properties
    document.getElementById("Constant").innerHTML =
        "The " + instrument.color + " " + instrument.brand + " " + instrument.type +
        " is " + instrument.condition + ".";
}
