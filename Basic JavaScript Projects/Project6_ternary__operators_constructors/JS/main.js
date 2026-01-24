function outerFunction() {
    document.getElementById("Nested_Function").innerHTML = innerFunction();

    function innerFunction() {
        return "This text came from a nested function!";
    }
}