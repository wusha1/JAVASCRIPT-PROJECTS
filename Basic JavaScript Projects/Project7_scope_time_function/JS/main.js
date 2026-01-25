function getTime() {
    var Time = new Date().getHours();
    var Reply;

    // if statement using Date().getHours()
    if (Time < 12) {
        Reply = "Good morning!";
    }
    else if (Time < 18) {
        Reply = "Good afternoon!";
    }
    else {
        Reply = "Good evening!";
    }

    // Display result in the HTML element
    document.getElementById("Time_Message").innerHTML = Reply;
}
