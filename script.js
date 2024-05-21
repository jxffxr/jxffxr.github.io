document.addEventListener('DOMContentLoaded', function() {
    // Botón para abrir el menú
    const menuCheckbox = document.getElementById('menu');
    const navbar = document.querySelector('.navbar');

    menuCheckbox.addEventListener('change', function() {
        if (this.checked) {
            navbar.classList.add('open');
        } else {
            navbar.classList.remove('open');
        }
    });

    // Swiper para los sliders
    const swiper5 = new Swiper(".mySwiper-1", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });

    const swiper2 = new Swiper(".mySwiper-2", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

