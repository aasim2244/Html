let currentSlide = 0;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    const itemsToShow = 3; // Number of items to display at once
    const maxIndex = Math.ceil(totalSlides / itemsToShow) - 1;

    if (index > maxIndex) {
        currentSlide = 0; // Loop back to the first set of slides
    } else if (index < 0) {
        currentSlide = maxIndex; // Loop back to the last set of slides
    } else {
        currentSlide = index;
    }
    
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Auto-slide every 7 seconds
setInterval(() => {
    nextSlide();
}, 7000);
