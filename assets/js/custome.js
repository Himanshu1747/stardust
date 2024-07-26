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


// PRODUCTS TAB 


// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function () {
    $('#tabs-nav li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
});



// PRODUCTS TAB ED\




// EQUAL HEIGHT 


$(document).ready(function () {
    $maxHeight = 0;
    $(".rating-grid ").each(function () {
        if ($(this).height() > $maxHeight) {
            $maxHeight = $(this).height();
        }
    });
    $(".rating-grid ").height($maxHeight);
    $('html,body').animate({
        scrollTop: $(".di").offset().top
    })
});
$(document).ready(function () {
    $maxHeight = 0;
    $(".product-data").each(function () {
        if ($(this).height() > $maxHeight) {
            $maxHeight = $(this).height();
        }
    });
    $(".product-data").height($maxHeight);
    $('html,body').animate({
        scrollTop: $(".di").offset().top
    })
});


// EQUAL HEIGHT END




// ADD CART 

function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
    console.log(document.getElementById('number').value);
}

// ADD CART END


// SINGLE PRODUCT 


var swiper = new Swiper(".mySwiper1", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    // effect: 'fade',
    // speed: 1000,
    loop: "true",
    // fadeEffect: {
    //     crossFade: true
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});


// SINGLE PRODUCT END





// AOS 
AOS.init();
// AOS END