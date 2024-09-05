// Get the slider and output elements
var slider = document.getElementById("slider");
var output = document.getElementById("slider-value");

// Display the default slider value
output.innerHTML = slider.value;

// Update the current slider value when the slider is moved
slider.oninput = function() {
    output.innerHTML = this.value;

    // Update background fill according to the slider value
    var value = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.background = `linear-gradient(to right, #007bff ${value}%, #ddd ${value}%)`;
}
