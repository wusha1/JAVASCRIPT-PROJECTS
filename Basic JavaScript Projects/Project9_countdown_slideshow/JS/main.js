// Keeps track of which slide is showing
var slideIndex = 1;

// Show the first slide when the page loads
showSlides(slideIndex);

// Next/ and previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Dot controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

//function that shows the the slides
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    // Loop back to start/end
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // Hides all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove active class from dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide + activate its dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}