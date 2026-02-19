document.addEventListener("DOMContentLoaded", function () {
  // Initialize all popovers
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  popoverTriggerList.forEach((el) => new bootstrap.Popover(el));

  // Initialize all toasts (optional, but fine to keep)
  const toastElList = document.querySelectorAll('.toast');
  [...toastElList].forEach((toastEl) => new bootstrap.Toast(toastEl));
});

// Function to display toast with selected options
function displaySelectedMovieOptions() {
  const movieSelect = document.getElementById('movieSelect');
  const timeSelect = document.getElementById('timeSelect');
  const quantity = document.getElementById('quantity').value;

  const movie = movieSelect.options[movieSelect.selectedIndex].text;
  const time = timeSelect.options[timeSelect.selectedIndex].text;

  const message =
    "Purchase confirmed for: " + movie +
    "\nTime: " + time +
    "\nTickets: " + quantity;

  // Display Toast
  const toastBody = document.getElementById('toastBody');
  toastBody.textContent = message;

  const toastEl = document.getElementById('toastDisplay');
  const toast = bootstrap.Toast.getOrCreateInstance(toastEl);
  toast.show();
}

function buyTickets() {
  displaySelectedMovieOptions();
}

//JQUERY

//Shrinks header size when the document is scrolled down by 80 pixels
$(document).on("scroll", function () {

    //When the webpage is scrolled down from the top by 50px this
    //if statement will trigger
    if ($(document).scrollTop() > 50) {

        //Once the 50px requirement has been met add the
        //nav-shrink class selector to the same HTML element
        //that has the nav class
        $("nav").addClass("nav-shrink");

        //Adjust the position of the mobile drop menu
        //to accommodate the new height decrease
        $("div.navbar-collapse").css("margin-top", "-6px");

    } else {

        //if the webpage has not been scrolled down or
        //is back at the top the nav-shrink class selector
        //is removed from the HTML element with the nav
        //class selector
        $("nav").removeClass("nav-shrink");

        //The margin for the drop down menu is now
        //returned to it's original amount
        $("div.navbar-collapse").css("margin-top", "14px");
    }
});
