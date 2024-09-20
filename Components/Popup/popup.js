// Get the modal, open button, and close button
var modal = document.getElementById("popup-modal");
var openBtn = document.getElementById("open-popup-btn");
var closeBtn = document.getElementById("close-popup-btn");

// Open the modal when the button is clicked
openBtn.onclick = function() {
    modal.style.display = "block";
}

// Close the modal when the close button is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
