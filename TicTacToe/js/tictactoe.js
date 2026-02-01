// Keeps track of whose turn it is
let activePlayer = "X";

// Stores selected squares in the format: "squareNumber" + "X" or "O"
let selectedSquares = [];

// Places X or O image in the chosen square
function placeXorO(squareNumber) {
    const select = document.getElementById(squareNumber);

    // If the square already has a background image, it's taken
    if (select.style.backgroundImage !== "") {
        return false;
    }

    // Set the correct image (this is what your instructor was referring to)
    if (activePlayer === "X") {
        select.style.backgroundImage = "url('./images/x.png')";
    } else {
        select.style.backgroundImage = "url('./images/o.png')";
    }

    // Track the move
    selectedSquares.push(squareNumber + activePlayer);

    // Play placement sound
    audio('./media/place.mp3');

    // If someone won or it's a tie, stop here (reset happens after sound/line)
    if (checkWinConditions()) {
        return true;
    }

    // Switch player
    activePlayer = (activePlayer === "X") ? "O" : "X";

    // Computer plays as O
    if (activePlayer === "O") {
        disableClick();
        setTimeout(function () {
            computersTurn();
            enableClick();
        }, 1000);
    }

    return true;
}

// Random square selection for computer
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

// Checks win/tie conditions.
// Returns true if the game is over (win or tie), otherwise false.
function checkWinConditions() {
    // X wins
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100); return true; }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304); return true; }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508); return true; }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558); return true; }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558); return true; }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558); return true; }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90); return true; }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520); return true; }

    // O wins
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100); return true; }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304); return true; }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508); return true; }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558); return true; }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558); return true; }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558); return true; }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90); return true; }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520); return true; }

    // Tie
    else if (selectedSquares.length >= 9) {
        disableClick();
        audio('./media/tie.mp3');
        setTimeout(function () {
            resetGame();
            enableClick();
        }, 800);
        return true;
    }

    return false;
}

// Checks if selectedSquares includes all 3 entries
function arrayIncludes(squareA, squareB, squareC) {
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);
    return (a && b && c);
}

function disableClick() {
    document.getElementById("body").style.pointerEvents = "none";
}

function enableClick() {
    document.getElementById("body").style.pointerEvents = "auto";
}

function audio(audioURL) {
    const sound = new Audio(audioURL);
    sound.play();
}

// Draws win line using canvas and then resets the game
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');

    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;

    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);

        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        c.stroke();

        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }

        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    function clearCanvas() {
        const animationLoop = requestAnimationFrame(clearCanvas);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }

    disableClick();
    audio('./media/winGame.mp3');
    animateLineDrawing();

    setTimeout(function () {
        clearCanvas();
        resetGame();
        enableClick();
    }, 1200);
}

// Resets the board after a win or tie
function resetGame() {
    for (let i = 0; i < 9; i++) {
        const square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }

    selectedSquares = [];
    activePlayer = "X";
}
