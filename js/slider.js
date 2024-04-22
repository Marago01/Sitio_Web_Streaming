(function() {
const sliderContainer = document.querySelector('.slider-container');
const slides = Array.from(sliderContainer.querySelectorAll('.slide'));

let currentSlideIndex = 0;

function showSlide(index) {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    // Show the current slide
    slides[index].style.display = 'block';
}

// Function to handle next slide
function nextSlide() {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    showSlide(currentSlideIndex);
}

// Function to handle previous slide
function prevSlide() {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    showSlide(currentSlideIndex);
}

// Show the initial slide
showSlide(currentSlideIndex);

// Add event listeners for next and previous buttons
const nextButton = document.querySelector('#before');
const prevButton = document.querySelector('#next');

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
})();       