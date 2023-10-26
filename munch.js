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



setInterval(nextSlide, 3000);
window.addEventListener('scroll', navbarOpacity);
