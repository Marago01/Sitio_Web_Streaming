(function() {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = Array.from(sliderContainer.querySelectorAll('.slide'));

    let currentSlideIndex = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });

        slides[index].style.display = 'block';
    }

    function nextSlide() {
        currentSlideIndex++;
        if (currentSlideIndex >= slides.length) {
            currentSlideIndex = 0;
        }
        showSlide(currentSlideIndex);
    }

    function prevSlide() {
        currentSlideIndex--;
        if (currentSlideIndex < 0) {
            currentSlideIndex = slides.length - 1;
        }
        showSlide(currentSlideIndex);
    }

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 3000); }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    showSlide(currentSlideIndex);

    const nextButton = document.querySelector('#next');
    const prevButton = document.querySelector('#before');

    nextButton.addEventListener('click', () => {
        nextSlide();
        stopAutoSlide(); 
        startAutoSlide()
    });

    prevButton.addEventListener('click', () => {
        prevSlide();
        stopAutoSlide(); 
        startAutoSlide()
    });

    startAutoSlide();
})();
      