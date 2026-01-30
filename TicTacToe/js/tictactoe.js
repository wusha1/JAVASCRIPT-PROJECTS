// Keeps track of whose turn it is
let activePlayer = "X";

// Stores selected squares
let selectedSquares = [];

// Places X or O in the chosen square
function placeXorO(squareNumber) {
    if (document.getElementById(squareNumber).innerHTML !== "") {
        return false;
    }

    document.getElementById(squareNumber).innerHTML = activePlayer;
    selectedSquares.push(squareNumber + activePlayer);

    audio('./media/place.mp3');

    checkWinConditions();

    if (activePlayer === "X") {
        activePlayer = "O";
    } else {
        activePlayer = "X";
    }

    if (activePlayer === 'O') {
        disableClick();
        setTimeout(function () { computersTurn(); enableClick(); }, 1000);
    }

    return true;
}

// This function results in a random square being selected by the computer.
function computersTurn() {
    let success = false;
    let pickASquare;

    while (!success) {
        pickASquare = String(Math.floor(Math.random() * 9));
        if (placeXorO(pickASquare)) {
            success = true;
        }
    }
}

// This function parses the selectedSquares array to search for win conditions.
// drawWinLine() function is called to draw a line on the screen if the condition is met.
function checkWinConditions() {

    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100); }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304); }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508); }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558); }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558); }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558); }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90); }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520); }

    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100); }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304); }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508); }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558); }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558); }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558); }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90); }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520); }

    else if (selectedSquares.length >= 9) {
        audio('./media/tie.mp3');
        setTimeout(function () { resetGame(); }, 500);
    }
}

// This function checks if an array includes 3 strings.
function arrayIncludes(squareA, squareB, squareC) {
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);

    if (a === true && b === true && c === true) { return true; }
}

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
