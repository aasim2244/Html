var progress = 0;

function increaseProgress() {
    var progressBar = document.getElementById("progress-bar");
    
    // Increase progress by 10% each time the button is clicked
    if (progress < 100) {
        progress += 10;
        progressBar.style.width = progress + "%";
    }
}
