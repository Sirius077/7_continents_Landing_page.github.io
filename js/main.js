$(document).ready(function () {
    $('.prices-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: !0,
        speed: 400,
        autoplay: !0,
        autoplaySpeed: 1600,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                prevArrow: "none",
                nextArrow: "none"
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: "none",
                nextArrow: "none"
            }
        }]
    });
    const cards = document.querySelectorAll('.prices-slider-block');
    cards.forEach(card => {
        const button = card.querySelector('.prices-slider-header-button');
        button.addEventListener('click', () => {
            const activeBTN = document.querySelectorAll('.prices-slider-block .prices-slider-header-button-clicked');
            activeBTN.forEach(n => n !== button ? n.classList.remove('prices-slider-header-button-clicked') : null);
            button.classList.toggle('prices-slider-header-button-clicked');
        });
    });
    $('.reservation-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: !0,
        speed: 400,
        autoplay: !0,
        autoplaySpeed: 1600,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: "<button class='prev arrow'></button>",
                nextArrow: "<button class='next arrow'></button>"
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                prevArrow: "<button class='prev arrow'></button>",
                nextArrow: "<button class='next arrow'></button>"
            }
        },{
            
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: "<button class='prev arrow'></button>",
                    nextArrow: "<button class='next arrow'></button>"
                }
            
        }
    ]
    });
});

//   In jquery    $('.prices-slider-header-button').on('click',function (e) { 
//     e.preventDefault();
//     $('.prices-slider-header-button').removeClass('prices-slider-header-button-clicked');
//     $(this).toggleClass("prices-slider-header-button-clicked");
//   });