// Gets the canvas element
let canvas = document.getElementById("My_Canvas");

// Creates a 2D drawing context
let ctx = canvas.getContext("2d");

// Draws a rectangle
ctx.fillStyle = "blue";
ctx.fillRect(50, 40, 200, 70);
