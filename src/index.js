import "./style.css";

let slideIndex = 0;
showSlides(slideIndex);
autoSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.querySelectorAll('.mySlides');
    const dots = document.querySelectorAll('.dot');
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function autoSlides() {
    let i;
    const slides = document.querySelectorAll('.mySlides');
    const dots = document.querySelectorAll('.dot');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(autoSlides, 2000);
}

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const dots = document.querySelectorAll('.dot');

next.addEventListener('click', () => {
    plusSlides(1);
})

prev.addEventListener('click', () => {
    plusSlides(-1);
})

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide(index + 1);
    })
})