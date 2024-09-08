let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'flex';
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

document.querySelector('.prev').addEventListener('click', () => {
    slideIndex -= 2;
    if (slideIndex < 0) {
        slideIndex = slides.length - 2;
    }
    showSlides();
});

document.querySelector('.next').addEventListener('click', () => {
    showSlides();
});
