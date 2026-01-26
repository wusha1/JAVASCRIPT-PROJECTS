// COUNTDOWN TIMER FUNCTION

// This function counts down from the number the user enters
function countdown() {

    // Get the starting number of seconds from the input
    var seconds = document.getElementById("seconds").value;

    // This nested function updates the timer every second
    function tick() {

        // Decreases seconds by 1
        seconds = seconds - 1;

        // Displays the updated time on the webpage
        document.getElementById("timer").innerHTML = seconds;

        // If we still have time left, keep counting down
        if (seconds > 0) {
            setTimeout(tick, 1000);
        }
        else {
            // When time hits 0, displays a message
            document.getElementById("timer").innerHTML = "Time's up!";
        }
    }

    // Starts the timer
    tick();
}

// Slideshow Functions

// Keeps track of which slide is currently showing
var slideIndex = 1;

// Show the first slide when the page loads
showSlides(slideIndex);

// Next and previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Dot controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Displays the correct slide and updates dots
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    // Loops back to the first slide if we go too far
    if (n > slides.length) { slideIndex = 1; }

    // Loops to the last slide if we go backwards too far
    if (n < 1) { slideIndex = slides.length; }

    // Hides all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Removes "active" class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Shows the current slide
    slides[slideIndex - 1].style.display = "block";

    // Activates the current dot
    dots[slideIndex - 1].className += " active";
}
