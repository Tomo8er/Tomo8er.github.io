let slideIndex = 1;
let autoPlayInterval;

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex - 1].style.display = "block";  
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function toggleAutoPlay() {
    const button = document.getElementById('playPauseButton');
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
        button.innerHTML = '&#9658;'; // Play
    } else {
        autoPlayInterval = setInterval(() => plusSlides(1), 2000); // 2秒ごとにスライド
        button.innerHTML = '&#10074;&#10074;'; // Pause
    }
}

showSlides(slideIndex);
