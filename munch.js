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


const sendbtn = document.queryselector("button");
const etter = document.queryselector(".etter");
const widget = document.queryselector(".star_widget");
const editBtn = document.queryselector(".edit");
sendbtn.onclick = ()=>{
    widget.style.display = "none";
    etter.style.display = "block";
    editBtn.onclick = ()=>{
        widget.style.display = "block";
        etter.style.display = "none";
        return false;
    }
}