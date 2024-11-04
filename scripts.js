
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
});

$(document).ready(function(){
AOS.init();
    $('.project-carousel').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        centerMode: true,
        centerPadding: '0',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Forzar la eliminación del texto en los botones después de que Slick se cargue
    $('.slick-prev, .slick-next').text(''); // Elimina cualquier texto dentro de los botones
});


