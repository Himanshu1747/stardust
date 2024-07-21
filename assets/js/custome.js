$(document).ready((function () {
    $(".menu-icon").click(function () {
        $(".navlist").slideToggle();
        $(".grid-header .contact-me").slideToggle();
    })
}))


// PRODUCT SLIDER 
var swiper = new Swiper(".mySwiperproduct", {
    loop: true,
    speed: 1500,
    autoplay: true,
    autoplay: {
        delay: 1000,
    },
    slidesPerView: 4.5,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        100: {
            slidesPerView: 1,


        },
        575: {
            slidesPerView: 2,

        },
        767: {
            slidesPerView: 2.5,

        },
        991: {
            slidesPerView: 3,

        },

        1058: {
            slidesPerView: 3,
        },
        1199: {
            slidesPerView: 3.2,

        },

        1280: {
            slidesPerView: 3.8,

        },
        1399: {
            slidesPerView: 3.2,
        },
        1600: {
            slidesPerView: 4.5,
        }
    },
});
// PRODUCT SLIDER END




// AOS 
AOS.init();
// AOS END