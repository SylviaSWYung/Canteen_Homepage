let slideIndex = 0;
showSlide(slideIndex);

function showSlide(index){
    const slides = document.querySelectorAll('.slide');

    if (index < 0) {
        slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        slideIndex = 0;
    }

    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    slides[slideIndex].style.display = 'block';

}

function nextSlide(){
    showSlide(++slideIndex)
}

function navbarOpacity(){
    const navbar = document.querySelector('.navbar');

    const scrollPosition = window.scrollY;
    const triggerPosition = 300;

    if (scrollPosition >= triggerPosition) {
        navbar.style.backgroundColor = 'rgba(253, 240, 213, 0.95)';
    } else {
        navbar.style.backgroundColor = 'rgba(253, 240, 213, 1)';
    }
}

setInterval(nextSlide, 3000);
window.addEventListener('scroll', navbarOpacity);
