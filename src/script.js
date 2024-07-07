// COPY PASTED STUDY

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;
    
    slides.forEach((slide, i) => {
        slide.style.display = i === currentIndex ? 'block' : 'none';
    });
}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

// Initialize the carousel
showSlide(currentIndex);