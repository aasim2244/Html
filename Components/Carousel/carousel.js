let currentSlide = 0;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    if (index >= totalSlides) {
        currentSlide = 0; // Loop back to the first slide
    } else if (index < 0) {
        currentSlide = totalSlides - 1; // Loop back to the last slide
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

// Auto-slide every 5 seconds
setInterval(() => {
    nextSlide();
}, 5000);
