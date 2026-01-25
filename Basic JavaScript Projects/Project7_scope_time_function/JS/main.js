function Check_Age() {
    var Age = document.getElementById("User_Age").value;
    var Message;

    // if / else statement
    if (Age >= 18) {
        Message = "You are old enough to continue.";
    }
    else {
        Message = "You are not old enough to continue.";
    }

    // Displays the result in the HTML element
    document.getElementById("Age_Result").innerHTML = Message;
}
