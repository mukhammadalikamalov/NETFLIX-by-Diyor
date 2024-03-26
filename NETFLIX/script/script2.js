
function toggleLightMode() {
    document.body.style.backgroundColor = '#fff'; // Set light mode background color
    document.querySelector('.slider-switch img[src="sun.png"]').style.display = 'block'; // Show sun image
    document.querySelector('.slider-switch img[src="moon.png"]').style.display = 'none'; // Hide moon image
}

function toggleDarkMode() {
    document.body.style.backgroundColor = '#202023'; // Set dark mode background color
    document.querySelector('.slider-switch img[src="moon.png"]').style.display = 'block'; // Show moon image
    document.querySelector('.slider-switch img[src="sun.png"]').style.display = 'none'; // Hide sun image
}

function toggleMode() {
    const checkbox = document.querySelector('.slider-switch input');
    if (checkbox.checked) {
        toggleDarkMode();
    } else {
        toggleLightMode();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
        },
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 80,
            depth: 200,
            modifier: 1,
            slideShadows: false,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});