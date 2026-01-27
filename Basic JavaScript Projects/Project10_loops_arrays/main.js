function for_Loop() {
    let instruments = [
        "Guitar",
        "Drums",
        "Piano",
        "Bass",
        "Violin",
        "Saxophone"
    ];

    let content = "";

    for (let i = 0; i < instruments.length; i++) {
        content += instruments[i] + "<br>";
    }

    document.getElementById("List_of_Instruments").innerHTML = content;
}
