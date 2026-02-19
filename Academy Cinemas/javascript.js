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
