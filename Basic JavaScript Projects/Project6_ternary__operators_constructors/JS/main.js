// Construct function
function Person(Name, Age, Job) {
    this.Person_Name = Name;
    this.Person_Age = Age;
    this.Person_Job = Job;
}

// Using the "new" keyword
var Victor = new Person("Victor", 36, "Developer");

// Function to display the object
function myFunction() {
    document.getElementById("New_and_This").innerHTML =
        Victor.Person_Name + " is " +
        Victor.Person_Age + " years old and works as a " +
        Victor.Person_Job + ".";
}