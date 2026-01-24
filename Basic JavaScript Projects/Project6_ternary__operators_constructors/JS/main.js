// 1) TERNARY OPERATOR FUNCTION uses browser input (Age input box) and a ternary operator to output a result.
// Output appears on the webpage inside the element with id="Vote_Result".
function Vote_Function() {
    var Age, Message;

    // Gets the user's input 
    Age = document.getElementById("Age").value;

    // Ternary operation: if under 18 equals not old enough, anyone else  can vote
    Message = (Age < 18) ? "You are not old enough to vote." : "You can vote!";

    // Display results on the webpage
    document.getElementById("Vote_Result").innerHTML = Message;
}

// 2) CONSTRUCTOR FUNCTION (new + this) Constructor creates Vehicle objects.
// "this" sets up properties that will belong to each new object created.
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

// Create an object using the "new" keyword
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// 3) FUNCTION TO DISPLAY CONSTRUCTOR RESULTS IN HTML
// Output appears on the webpage inside the element with id="Constructor_Result".
function Show_Vehicle() {
    document.getElementById("Constructor_Result").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " +
        Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year + ".";
}

// 4) NESTED FUNCTION
// A function inside another function.
function Outer_Function() {

    // Set the <p> text to the result of the nested function
    document.getElementById("Nested_Function").innerHTML = Inner_Function();

    // This function is nested inside Outer_Function
    function Inner_Function() {
        return "This text came from a nested function!";
    }
}
