function Call_Loop() {
    let number = "";
    let i = 1;

    // Loop that runs until I is greater than 10
    while (i <= 10) {
        number += i + "<br>";
        i++;
    }

    // Displays results in HTML element
    document.getElementById("Loop").innerHTML = number;
}
