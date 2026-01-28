function loop_Function() {
    let text = "";
    let i;

    // Break example
    for (i = 0; i < 10; i++) {
        if (i === 5) {
            break;
        }
        text += "Break loop value: " + i + "<br>";
    }

    text += "<br>";

    // Continue example
    for (i = 0; i < 10; i++) {
        if (i === 5) {
            continue;
        }
        text += "Continue loop value: " + i + "<br>";
    }

    document.getElementById("Loop_Result").innerHTML = text;
}
