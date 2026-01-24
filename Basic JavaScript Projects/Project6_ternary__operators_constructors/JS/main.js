// Ternary Operator Function
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// Constructor Function
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

// New object using constructor
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");

// Function displaying constructor data
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Jack drives a " + Jack.Vehicle_Color + " " +
        Jack.Vehicle_Model + " manufactured in " +
        Jack.Vehicle_Year;
}
