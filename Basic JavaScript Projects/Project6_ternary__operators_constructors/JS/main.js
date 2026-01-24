// Constructor Function (VALID CODE)
function Animal(Type, Age) {
    this.Animal_Type = Type;
    this.Animal_Age = Age;
}

// Creating an object using the constructor
var Dog = new Animal("Dog", 5);

// Displaying constructor result
document.getElementById("Result").innerHTML =
    "The animal is a " + Dog.Animal_Type + " and is " + Dog.Animal_Age + " years old.";
