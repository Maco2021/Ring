
/*Headwer*/

$(function () {
    let header = $("#header");
    let intro = $("#intro");
    introHeight = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkscroll(scrollPos, introHeight)

    $(window).on("scroll resize", function () {
        introHeight = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkscroll(scrollPos, introHeight);

    });

    function checkscroll(scrollPos, introHeight) {

        if (scrollPos > introHeight) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }


    }


    /*Smooth scroll*/

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700);
    });

    /*Nav Toggle*/

    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

    /*Reviews*/

    let slider = $("#reviewsSlider")

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

    /* Btn scroll*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150)
            $(".gotobtn").addClass("active");
        else
            $(".gotobtn").removeClass("active");
    });
    $(".gotobtn").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 800);
    });


    $(document).ready(function () {
        $('.slide').slick({
        });
    });


    $(document).ready(function () {
        $('.box div').click(function () {
            if ($(this).hasClass('spin')) {
                $('.box div').removeClass('spin');
            }
            else {
                $('.box div').removeClass('spin');
                $(this).addClass('spin');
            }
        });

    });

    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },

    });




});







