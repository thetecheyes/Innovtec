$(document).ready(function ($) {
    'use strict';


    // ------- Anchor Tag Disabled ------- //

    // $('a').click(function () {
    //     return false;
    // })


    // ------- Smooth Scroll ------- //

    const scroll = new SmoothScroll('.navbar-nav a[href*="#"]');
    speed: 800;

    // ------- Sticky Navbar & Scroll to top button ------- //


    $(window).on('scroll', function () {

        // Show hidden button on scroll

        if ($(this).scrollTop() > 600) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }

        var scrollTop = $(window).scrollTop();
        if (scrollTop > 40) {
            $('.navbar').addClass('sticky');
        }
        else {
            $('.navbar').removeClass('sticky');
        }
    });

    // smooth scrolling to top

    $('.scrollToTop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 2000);
    });



    // ------- Mobile Menu -------  //

    // Off Canvas Menu & Sidebar Menu

    $("#sidebarCollapse").on("click", function () {
        $("#sidebar, .overlay").addClass("active");
        return false;
    });

    $(".close-menu, .overlay").on("click", function () {
        $("#sidebar, .overlay").removeClass("active");
        return false;
    });


    // ------- OWL Carousel - Service Section -------  //

    $(".service-list").owlCarousel({
        autoplay: false,
        loop: true,
        margin: 25,
        nav: true,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: false
            },
            600: {
                items: 2,
                nav: true,
                loop: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            },
            1200: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    });

    // ------- Isotope Filter -------  //

    $("ul.project-title li").on('click', function () {

        $("ul.project-title li").removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr('data-filter');
        $(".project-list").isotope({
            filter: selector,
        });
    });

    $(".project-list").isotope({

    });


    // ------- OWL Carousel - Feedback Section -------  //

    $(".client-testimonials").owlCarousel({
        items: 2,
        autoplay: false,
        loop: false,
        margin: 30,
        nav: false,
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });



});