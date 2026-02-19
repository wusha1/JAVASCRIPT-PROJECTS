document.addEventListener("DOMContentLoaded", function () {

  // Initialize Popovers
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  popoverTriggerList.forEach((el) => new bootstrap.Popover(el));

  // Initialize Toasts
  const toastElList = document.querySelectorAll('.toast');
  toastElList.forEach((toastEl) => new bootstrap.Toast(toastEl));

});


// Function to display toast with selected options
function displaySelectedMovieOptions() {
  var movieSelect = document.getElementById('movieSelect');
  var timeSelect = document.getElementById('timeSelect');
  var quantity = document.getElementById('quantity').value;

  var movie = movieSelect.options[movieSelect.selectedIndex].text;
  var time = timeSelect.options[timeSelect.selectedIndex].text;

  var message = "Purchase confirmed for: " + movie +
    "\nTime: " + time +
    "\nTickets: " + quantity;

  // Display Toast
  var toastBody = document.getElementById('toastBody');
  toastBody.textContent = message;

  var toastEl = document.getElementById('toastDisplay');
  var toast = bootstrap.Toast.getOrCreateInstance(toastEl);
  toast.show();
}

function buyTickets() {
  displaySelectedMovieOptions();
}


// JQUERY

// Shrinks navbar size when the document is scrolled down by 50 pixels
$(document).on("scroll", function () {

  if ($(document).scrollTop() > 50) {
    $("nav").addClass("nav-shrink");
    $("div.navbar-collapse").css("margin-top", "-6px");
  } else {
    $("nav").removeClass("nav-shrink");
    $("div.navbar-collapse").css("margin-top", "14px");
  }

});

// Close mobile menu when a navigation link is clicked
$(document).ready(function () {
  $(".navbar-nav").on('click', '.nav-link:not(".dropdown-toggle"), .dropdown-item', function () {
    $(".navbar-collapse").collapse('hide');
  });
});
