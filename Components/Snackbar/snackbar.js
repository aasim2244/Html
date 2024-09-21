function showSnackbar() {
  // Get the snackbar DIV
  var snackbar = document.getElementById("snackbar");

  // Add the "show" class to the snackbar to display it
  snackbar.className = "show";

  // After 3 seconds, remove the show class to hide the snackbar
  setTimeout(function () {
    snackbar.className = snackbar.className.replace("show", "");
  }, 3000);
}