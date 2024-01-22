$(function () {

    // ------------------------------------------------------- //
    // Testimonials Slider
    // ------------------------------------------------------ //
    $('.testimonials-slider').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        smartSpeed: 700,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 2,
                nav: true,
                loop: false
            }
        }
    });


    // ------------------------------------------------------- //
    // Scroll Top Button
    // ------------------------------------------------------- //
    $(document).ready(function() {
        $('#scrollTop').on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 1000);
        });
    
        var c, currentScrollTop = 0,
            navbar = $('.navbar');
        
        // Social media icons section
        var socialMediaSection = $('#social-media-icons-bottom');
    
        $(window).on('scroll', function () {
    
            // Navbar functionality
            var a = $(window).scrollTop(), b = navbar.height();
    
            currentScrollTop = a;
            if (c < currentScrollTop && a > b + b) {
                navbar.addClass("scrollUp");
            } else if (c > currentScrollTop && !(a <= b)) {
                navbar.removeClass("scrollUp");
            }
            c = currentScrollTop;
    
            // Toggle social media icons section based on scroll position
            if ($(window).scrollTop() >= 900) {
                socialMediaSection.fadeIn(300); // 300 milliseconds for the fade-in effect
            } else {
                socialMediaSection.fadeOut(300); // 300 milliseconds for the fade-out effect
            }
    
            // Add/remove active class for scrollTop button
            if ($(window).scrollTop() >= 900) {
                $('#scrollTop').addClass('active');
            } else {
                $('#scrollTop').removeClass('active');
            }
        });
    });
    


    

    // ---------------------------------------------------------- //
    // Preventing URL update on navigation link click
    // ---------------------------------------------------------- //
    $('.link-scroll').on('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });


    // ---------------------------------------------------------- //
    // Scroll Spy
    // ---------------------------------------------------------- //
    $('body').scrollspy({
        target: '#navbarSupportedContent',
        offset: 80
    });

    // ------------------------------------------------------- //
    // Navbar Toggler Button
    // ------------------------------------------------------- //
    $('.navbar .navbar-toggler').on('click', function () {
        $(this).toggleClass('active');
    });

    // ------------------------------------------------------ //
    // For demo purposes, can be deleted
    // ------------------------------------------------------ //

    var stylesheet = $('link#theme-stylesheet');
    $( "<link id='new-stylesheet' rel='stylesheet'>" ).insertAfter(stylesheet);
    var alternateColour = $('link#new-stylesheet');

    if ($.cookie("theme_csspath")) {
        alternateColour.attr("href", $.cookie("theme_csspath"));
    }

    $("#colour").change(function () {

        if ($(this).val() !== '') {

            var theme_csspath = 'css/style.' + $(this).val() + '.css';

            alternateColour.attr("href", theme_csspath);

            $.cookie("theme_csspath", theme_csspath, { expires: 365, path: document.URL.substr(0, document.URL.lastIndexOf('/')) });

        }

        return false;
    });



});





window.addEventListener("scroll", function () {
    var topBar = document.querySelector('.top-bar');
    var navbar = document.querySelector('.custom-navbar');

    if (window.scrollY > 0) {
        topBar.style.transform = "translateY(-100%)";
        navbar.style.position = "fixed";
        navbar.style.top = "0";
        navbar.style.width = "100%";
        navbar.style.zIndex = "1000";
    } else {
        topBar.style.transform = "translateY(0)";
        navbar.style.position = "static";
    }
});






