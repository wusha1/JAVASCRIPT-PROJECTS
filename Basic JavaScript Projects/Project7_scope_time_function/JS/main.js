// Global variable
// This variable can be accessed anywhere in the file
var Global_Variable = 10;


// Function with local variable
function Scope_Function() {

    // LOCAL VARIABLE
    var Local_Variable = 5;

    // Displaying both variables
    document.getElementById("Output").innerHTML =
        "Global variable: " + Global_Variable +
        "<br>Local variable: " + Local_Variable;

    // Call the error function
    Error_Function();
}

// Funciton with intentiaonal error
function Error_Function() {
    console.log(Local_Variable);
}
