// Global Variable
// This variable is available throughout the entire file
var Global_Number = 10;

// FUNCTION WITH IF STATEMENT
// Uses a local variable and an if statement
function Check_Number() {

    // LOCAL VARIABLE
    var Local_Number = 5;

    // If statement comparing global and local variables
    if (Global_Number > Local_Number) {
        document.getElementById("If_Result").innerHTML =
            "The global number is greater than the local number.";
    }

    // Call function that contains an intentional error
    Error_Function();
}

// FUNCTION WITH INTENTIONAL ERROR
// Attempts to access a local variable that is out of scope
// console.log is used to debug in Chrome DevTools
function Error_Function() {

    // This will cause an error because Local_Number
    // is not defined in this scope
    console.log(Local_Number);
}

// TIME FUNCTION
// Uses Date().getHours() as outlined in previous slides
function Time_function() {
    var Time = new Date().getHours();
    var Reply;

    // if / else if / else structure based on time
    if (Time < 12) {
        Reply = "Good morning!";
    }
    else if (Time < 18) {
        Reply = "Good afternoon!";
    }
    else {
        Reply = "Good evening!";
    }

    // Displays time-based message on the webpage
    document.getElementById("Time_Message").innerHTML = Reply;
}
