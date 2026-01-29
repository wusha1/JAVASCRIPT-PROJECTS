// Keeps track of whose turn it is
let activePlayer = "X";

// Places X or O in the chosen square
function placeXorO(squareNumber) {
    // Prevent overwriting a square
    if (document.getElementById(squareNumber).innerHTML !== "") {
        return false;
    }

    // Place the player's letter (course may later change to images)
    document.getElementById(squareNumber).innerHTML = activePlayer;

    // This function plays placement sound.
    audio('./media/place.mp3');

    // Switch active player
    if (activePlayer === "X") {
        activePlayer = "O";
    } else {
        activePlayer = "X";
    }

    // This condition checks to see if it is the computers turn.
    if (activePlayer === 'O') {
        // This function disables clicking for computers turn.
        disableClick();
        // This function waits 1 second before the computer places an image and enables click.
        setTimeout(function () { computersTurn(); }, 1000);
    }

    // Returning true is needed for our computersTurn() function to work.
    return true;
}

// This function results in a random square being selected by the computer.
function computersTurn() {
    // This boolean is needed for our while loop.
    let success = false;
    // This variable stores a random number 0-8.
    let pickASquare;

    // This condition allows our while loop to keep trying if a square is selected already.
    while (!success) {
        // A random number between 0 and 8 is selected.
        pickASquare = String(Math.floor(Math.random() * 9));

        // If the random number evaluated returns true, the square hasn't been selected yet.
        if (placeXorO(pickASquare)) {
            // This changes our boolean and ends the loop.
            success = true;
        }
    }
}

/* Helper functions (only keep these if your course file doesn't already have them) */

function disableClick() {
    document.getElementById("body").style.pointerEvents = "none";
}

function enableClick() {
    document.getElementById("body").style.pointerEvents = "auto";
}

function audio(audioURL) {
    let sound = new Audio(audioURL);
    sound.play();
}
