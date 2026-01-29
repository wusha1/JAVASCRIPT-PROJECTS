// Gets the canvas element
let canvas = document.getElementById("My_Canvas");

// Creates a 2D drawing context
let ctx = canvas.getContext("2d");

// Creates a linear gradient (left to right)
let gradient = ctx.createLinearGradient(0, 0, 300, 0);

// Adds color stops to the gradient
gradient.addColorStop(0, "blue");
gradient.addColorStop(1, "green");

// Applies the gradient as a fill style
ctx.fillStyle = gradient;

// Fills the entire canvas with the gradient
ctx.fillRect(0, 0, 300, 150);
