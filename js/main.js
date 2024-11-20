/* -------------------------------------------

------------------------------------------- */

$(function () {
    
    
    "use strict";

 // Nueva versión de logo change//

 $(function () {
    "use strict";

    // Inicializa el evento de clic y el cursor una vez
    $('.mil-logo').css('cursor', 'pointer').on('click', function(event) {
        window.location.href = 'index.html'; // Redirigir a index.html
    });

    var ticking = false;

    function changeLogoOnScroll() {
        var logo = $('#logoanimate');
        var scrollTop = $(window).scrollTop();
        var windowWidth = $(window).width();
        var newLogoSrc;

        if (scrollTop >= 0 && scrollTop < 10) {
            newLogoSrc = windowWidth > 699 ? 'img/logo/black-logo.png' : 'img/logo/white-monogram.png';
        } else if (scrollTop >= 10 && scrollTop < 700) {
            newLogoSrc = 'img/logo/black-monogram.png';
        } else if (scrollTop >= 700 && scrollTop < 1700) {
            newLogoSrc = 'img/logo/purple-monogram.png';
        } else if (scrollTop >= 1700 && scrollTop < 2400) {
            newLogoSrc = 'img/logo/green-monogram.png';
        } else if (scrollTop >= 2400 && scrollTop < 3250) {
            newLogoSrc = 'img/logo/orange-monogram.png';
        } else if (scrollTop >= 3250 && scrollTop < 4300) {
            newLogoSrc = 'img/logo/purple-monogram.png';
        } else if (scrollTop >= 4300) {
            newLogoSrc = 'img/logo/blue-monogram.png';
        }

        if (newLogoSrc && logo.attr('src') !== newLogoSrc) {
            if (logo.attr('src') === 'img/logo/black-logo.png') {
                logo.fadeOut(300, function() {
                    logo.attr('src', newLogoSrc);
                    logo.fadeIn(300);
                });
            } else {
                logo.attr('src', newLogoSrc);
            }
        }
    }

    $(window).on('wheel', function(event) {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                changeLogoOnScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Inicializar el estado del logotipo en el primer desplazamiento
    $(window).scrollTop(1);
    $(window).scrollTop(0);
});


        // Cambiar color del placeholder al seleccionar una opción válida
        $('.styled-select').on('change', function() {
            if ($(this).val()) {
                $(this).removeClass('placeholder-shown');
            } else {
                $(this).addClass('placeholder-shown');
            }
        });
    
        // Inicializar el estado del select
        $('.styled-select').each(function() {
            if ($(this).val()) {
                $(this).removeClass('placeholder-shown');
            } else {
                $(this).addClass('placeholder-shown');
            }
        });



    /***************************

    hero text rotator

    ***************************/

    const words = ["Airbnb", "Booking.com", "short-term"];
const classes = ["airbnb", "booking", "short-term"];
const intervals = [1000, 1000, 3000]; // Duraciones en milisegundos
let currentIndex = 0;

function swapWord() {
    const dynamicWord = document.getElementById("dynamic-word");
    if (dynamicWord) {
        currentIndex = (currentIndex + 1) % words.length;
        dynamicWord.textContent = words[currentIndex];
        dynamicWord.className = classes[currentIndex];

        // Configure the next word change with the corresponding duration
        setTimeout(swapWord, intervals[currentIndex]);
    }
}

// Iniciar el primer cambio de palabra
setTimeout(swapWord, intervals[currentIndex]);



    /***************************

    swup

    ***************************/
    const options = {
        containers: ['#swupMain', '#swupMenu'],
        animateHistoryBrowsing: true,
        linkSelector: 'a:not([data-no-swup])',
        animationSelector: '[class="mil-main-transition"]'
    };
    const swup = new Swup(options);

    /***************************

    register gsap plugins

    ***************************/
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    /***************************

    color variables

    ***************************/

    var accent = 'rgba(255, 152, 0, 1)';
    var dark = '#000';
    var light = '#fff';

    /***************************

    preloader
    
    ***************************/

    var timeline = gsap.timeline();

    if (document.querySelector(".mil-preloader-animation")) {
        timeline.to(".mil-preloader-animation", {
            opacity: 1,
        });
    }

    if (document.querySelector(".mil-animation-1 .mil-h3")) {
        timeline.fromTo(
            ".mil-animation-1 .mil-h3", {
                y: "30px",
                opacity: 0
            }, {
                y: "0px",
                opacity: 1,
                stagger: 0.4
            },
        );

        timeline.to(".mil-animation-1 .mil-h3", {
            opacity: 0,
            y: '-30',
        }, "+=.3");
    }

    // Continue with similar checks for other animations...

    if (document.querySelector(".mil-preloader")) {
        timeline.to(".mil-preloader", 0.8, {
            opacity: 0,
            ease: 'sine',
        }, "+=.2");
    }

    if (document.querySelector(".mil-up-page-load")) {
        timeline.fromTo(".mil-up-page-load", 0.8, {
            opacity: 0,
            y: 40,
            scale: .98,
            ease: 'sine',
        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            onComplete: function () {
                $('.mil-preloader').addClass("mil-hidden");
                $(".mil-up-page-load").addClass("show");
            },
        }, "-=1");
    }

    /***************************

    anchor scroll

    ***************************/
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        var target = $($.attr(this, 'href'));
        var offset = 0;

        if ($(window).width() < 1200) {
            offset = 90;
        }

        $('html, body').animate({
            scrollTop: target.offset().top - offset
        }, 400);
    });
    /***************************

    append

    ***************************/
    $(document).ready(function () {
        $(".mil-arrow").clone().appendTo(".mil-arrow-place");
        $(".mil-dodecahedron").clone().appendTo(".mil-animation");
        $(".mil-lines").clone().appendTo(".mil-lines-place");
        $(".mil-main-menu ul li.mil-active > a").clone().appendTo(".mil-current-page");
    });
    /***************************

    accordion

    ***************************/

    let groups = gsap.utils.toArray(".mil-accordion-group");
    let menus = gsap.utils.toArray(".mil-accordion-menu");
    let menuToggles = groups.map(createAnimation);

    menus.forEach((menu) => {
        menu.addEventListener("click", () => toggleMenu(menu));
    });

    function toggleMenu(clickedMenu) {
        menuToggles.forEach((toggleFn) => toggleFn(clickedMenu));
    }

    function createAnimation(element) {
        let menu = element.querySelector(".mil-accordion-menu");
        let box = element.querySelector(".mil-accordion-content");
        let symbol = element.querySelector(".mil-symbol");
        let minusElement = element.querySelector(".mil-minus");
        let plusElement = element.querySelector(".mil-plus");

        gsap.set(box, {
            height: "auto",
        });

        let animation = gsap
            .timeline()
            .from(box, {
                height: 0,
                duration: 0.4,
                ease: "sine"
            })
            .from(minusElement, {
                duration: 0.4,
                autoAlpha: 0,
                ease: "none",
            }, 0)
            .to(plusElement, {
                duration: 0.4,
                autoAlpha: 0,
                ease: "none",
            }, 0)
            .to(symbol, {
                background: accent,
                ease: "none",
            }, 0)
            .reverse();

        return function (clickedMenu) {
            if (clickedMenu === menu) {
                animation.reversed(!animation.reversed());
            } else {
                animation.reverse();
            }
        };
    }
    /***************************

    back to top

    ***************************/
    const btt = document.querySelector(".mil-back-to-top .mil-link");

    gsap.set(btt, {
        x: -30,
        opacity: 0,
    });

    gsap.to(btt, {
        x: 0,
        opacity: 1,
        ease: 'sine',
        scrollTrigger: {
            trigger: "body",
            start: "top -40%",
            end: "top -40%",
            toggleActions: "play none reverse none"
        }
    });
    /***************************

    cursor

    ***************************/
    const cursor = document.querySelector('.mil-ball');

    gsap.set(cursor, {
        xPercent: -50,
        yPercent: -50,
    });

    document.addEventListener('pointermove', movecursor);

    function movecursor(e) {
        gsap.to(cursor, {
            duration: 0.6,
            ease: 'sine',
            x: e.clientX,
            y: e.clientY,
        });
    }

    $('.mil-drag, .mil-more, .mil-choose').mouseover(function () {
        gsap.to($(cursor), .2, {
            width: 90,
            height: 90,
            opacity: 1,
            ease: 'sine',
        });
    });

    $('.mil-drag, .mil-more, .mil-choose').mouseleave(function () {
        gsap.to($(cursor), .2, {
            width: 20,
            height: 20,
            opacity: .1,
            ease: 'sine',
        });
    });

    $('.mil-accent-cursor').mouseover(function () {
        gsap.to($(cursor), .2, {
            background: accent,
            ease: 'sine',
        });
        $(cursor).addClass('mil-accent');
    });

    $('.mil-accent-cursor').mouseleave(function () {
        gsap.to($(cursor), .2, {
            background: dark,
            ease: 'sine',
        });
        $(cursor).removeClass('mil-accent');
    });

    $('.mil-drag').mouseover(function () {
        gsap.to($('.mil-ball .mil-icon-1'), .2, {
            scale: '1',
            ease: 'sine',
        });
    });

    $('.mil-drag').mouseleave(function () {
        gsap.to($('.mil-ball .mil-icon-1'), .2, {
            scale: '0',
            ease: 'sine',
        });
    });

    $('.mil-more').mouseover(function () {
        gsap.to($('.mil-ball .mil-more-text'), .2, {
            scale: '1',
            ease: 'sine',
        });
    });

    $('.mil-more').mouseleave(function () {
        gsap.to($('.mil-ball .mil-more-text'), .2, {
            scale: '0',
            ease: 'sine',
        });
    });

    $('.mil-choose').mouseover(function () {
        gsap.to($('.mil-ball .mil-choose-text'), .2, {
            scale: '1',
            ease: 'sine',
        });
    });

    $('.mil-choose').mouseleave(function () {
        gsap.to($('.mil-ball .mil-choose-text'), .2, {
            scale: '0',
            ease: 'sine',
        });
    });

    $('a:not(".mil-choose , .mil-more , .mil-drag , .mil-accent-cursor"), input , textarea, .mil-accordion-menu').mouseover(function () {
        gsap.to($(cursor), .2, {
            scale: 0,
            ease: 'sine',
        });
        gsap.to($('.mil-ball svg'), .2, {
            scale: 0,
        });
    });

    $('a:not(".mil-choose , .mil-more , .mil-drag , .mil-accent-cursor"), input, textarea, .mil-accordion-menu').mouseleave(function () {
        gsap.to($(cursor), .2, {
            scale: 1,
            ease: 'sine',
        });

        gsap.to($('.mil-ball svg'), .2, {
            scale: 1,
        });
    });

    $('body').mousedown(function () {
        gsap.to($(cursor), .2, {
            scale: .1,
            ease: 'sine',
        });
    });
    $('body').mouseup(function () {
        gsap.to($(cursor), .2, {
            scale: 1,
            ease: 'sine',
        });
    });
    /***************************

     menu

    ***************************/
    $('.mil-menu-btn').on("click", function () {
        $('.mil-menu-btn').toggleClass('mil-active');
        $('.mil-menu').toggleClass('mil-active');
        $('.mil-menu-frame').toggleClass('mil-active');
    });
    /***************************

    main menu

    ***************************/
    $('.mil-has-children a').on('click', function () {
        $('.mil-has-children ul').removeClass('mil-active');
        $('.mil-has-children a').removeClass('mil-active');
        $(this).toggleClass('mil-active');
        $(this).next().toggleClass('mil-active');
    });

 
    $('.mil-no-children a').on('click', function () {
     
        $('.mil-menu-btn').removeClass('mil-active');
        $('.mil-menu-frame').removeClass('mil-active');
      
    });

    $('.mil-show-children2 a').on('click', function () {
        
        $('.mil-menu-btn').removeClass('mil-active');
        $('.mil-menu-frame').removeClass('mil-active');
     
    });


    /***************************

    progressbar

    ***************************/
    gsap.to('.mil-progress', {
        height: '100%',
        ease: 'sine',
        scrollTrigger: {
            scrub: 0.3
        }
    });
    /***************************

    scroll animations

    ***************************/

    const appearance = document.querySelectorAll(".mil-up");

    appearance.forEach((section) => {
        gsap.fromTo(section, {
            opacity: 0,
            y: 40,
            scale: .98,
            ease: 'sine',

        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: .4,
            scrollTrigger: {
                trigger: section,
                toggleActions: 'play none none reverse',
            }
        });
    });

    const scaleImage = document.querySelectorAll(".mil-scale");

    scaleImage.forEach((section) => {
        var value1 = $(section).data("value-1");
        var value2 = $(section).data("value-2");
        gsap.fromTo(section, {
            ease: 'sine',
            scale: value1,

        }, {
            scale: value2,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
    });

    const parallaxImage = document.querySelectorAll(".mil-parallax");


    if ($(window).width() > 960) {
        parallaxImage.forEach((section) => {
            var value1 = $(section).data("value-1");
            var value2 = $(section).data("value-2");
            gsap.fromTo(section, {
                ease: 'sine',
                y: value1,

            }, {
                y: value2,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    toggleActions: 'play none none reverse',
                }
            });
        });
    }

    const rotate = document.querySelectorAll(".mil-rotate");

    rotate.forEach((section) => {
        var value = $(section).data("value");
        gsap.fromTo(section, {
            ease: 'sine',
            rotate: 0,

        }, {
            rotate: value,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
    });
    /***************************

    fancybox

    ***************************/
    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
            "slideShow",
            "zoom",
            "fullScreen",
            "close"
          ],
        loop: false,
        protect: true
    });
    $.fancybox.defaults.hash = false;
    /***************************

    reviews slider

    ***************************/

    var menu = ['<div class="mil-custom-dot mil-slide-1"></div>', '<div class="mil-custom-dot mil-slide-2"></div>', '<div class="mil-custom-dot mil-slide-3"></div>', '<div class="mil-custom-dot mil-slide-4"></div>', '<div class="mil-custom-dot mil-slide-5"></div>', '<div class="mil-custom-dot mil-slide-6"></div>', '<div class="mil-custom-dot mil-slide-7"></div>']
    var mySwiper = new Swiper('.mil-reviews-slider', {
        // If we need pagination
        pagination: {
            el: '.mil-revi-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (menu[index]) + '</span>';
            },
        },
        speed: 800,
        effect: 'fade',
        parallax: true,
        navigation: {
            nextEl: '.mil-revi-next',
            prevEl: '.mil-revi-prev',
        },
    })

    /***************************

    infinite slider

    ***************************/
    var swiper = new Swiper('.mil-infinite-show', {
        slidesPerView: 2,
        spaceBetween: 30,
        speed: 5000,
        autoplay: true,
        autoplay: {
            delay: 0,
        },
        loop: true,
        freeMode: true,
        breakpoints: {
            992: {
                slidesPerView: 4,
            },
        },
    });

    /***************************

    portfolio slider

    ***************************/
    var swiper = new Swiper('.mil-portfolio-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        parallax: true,
        mousewheel: {
            enable: true
        },
        navigation: {
            nextEl: '.mil-portfolio-next',
            prevEl: '.mil-portfolio-prev',
        },
        pagination: {
            el: '.swiper-portfolio-pagination',
            type: 'fraction',
        },
    });
    /***************************

    1 item slider

    ***************************/
    var swiper = new Swiper('.mil-1-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        parallax: true,
        navigation: {
            nextEl: '.mil-portfolio-next',
            prevEl: '.mil-portfolio-prev',
        },
        pagination: {
            el: '.swiper-portfolio-pagination',
            type: 'fraction',
        },
    });
    /***************************

    2 item slider

    ***************************/
    var swiper = new Swiper('.mil-2-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        parallax: true,
        navigation: {
            nextEl: '.mil-portfolio-next',
            prevEl: '.mil-portfolio-prev',
        },
        pagination: {
            el: '.swiper-portfolio-pagination',
            type: 'fraction',
        },
        breakpoints: {
            992: {
                slidesPerView: 2,
            },
        },
    });

    /*----------------------------------------------------------
    ------------------------------------------------------------

    REINIT

    ------------------------------------------------------------
    ----------------------------------------------------------*/
    document.addEventListener("swup:contentReplaced", function () {

        $('html, body').animate({
            scrollTop: 0,
        }, 0);

        gsap.to('.mil-progress', {
            height: 0,
            ease: 'sine',
            onComplete: () => {
                ScrollTrigger.refresh()
            },
        });
        /***************************

         menu

        ***************************/
        $('.mil-menu-btn').removeClass('mil-active');
        $('.mil-menu').removeClass('mil-active');
        $('.mil-menu-frame').removeClass('mil-active');
        /***************************

        append

        ***************************/
        $(document).ready(function () {
            $(".mil-arrow-place .mil-arrow, .mil-animation .mil-dodecahedron, .mil-current-page a").remove();
            $(".mil-arrow").clone().appendTo(".mil-arrow-place");
            $(".mil-dodecahedron").clone().appendTo(".mil-animation");
            $(".mil-lines").clone().appendTo(".mil-lines-place");
            $(".mil-main-menu ul li.mil-active > a").clone().appendTo(".mil-current-page");
        });
        /***************************

        accordion

        ***************************/

        let groups = gsap.utils.toArray(".mil-accordion-group");
        let menus = gsap.utils.toArray(".mil-accordion-menu");
        let menuToggles = groups.map(createAnimation);

        menus.forEach((menu) => {
            menu.addEventListener("click", () => toggleMenu(menu));
        });

        function toggleMenu(clickedMenu) {
            menuToggles.forEach((toggleFn) => toggleFn(clickedMenu));
        }

        function createAnimation(element) {
            let menu = element.querySelector(".mil-accordion-menu");
            let box = element.querySelector(".mil-accordion-content");
            let symbol = element.querySelector(".mil-symbol");
            let minusElement = element.querySelector(".mil-minus");
            let plusElement = element.querySelector(".mil-plus");

            gsap.set(box, {
                height: "auto",
            });

            let animation = gsap
                .timeline()
                .from(box, {
                    height: 0,
                    duration: 0.4,
                    ease: "sine"
                })
                .from(minusElement, {
                    duration: 0.4,
                    autoAlpha: 0,
                    ease: "none",
                }, 0)
                .to(plusElement, {
                    duration: 0.4,
                    autoAlpha: 0,
                    ease: "none",
                }, 0)
                .to(symbol, {
                    background: accent,
                    ease: "none",
                }, 0)
                .reverse();

            return function (clickedMenu) {
                if (clickedMenu === menu) {
                    animation.reversed(!animation.reversed());
                } else {
                    animation.reverse();
                }
            };
        }

        /***************************

        cursor

        ***************************/

        $('.mil-drag, .mil-more, .mil-choose').mouseover(function () {
            gsap.to($(cursor), .2, {
                width: 90,
                height: 90,
                opacity: 1,
                ease: 'sine',
            });
        });

        $('.mil-drag, .mil-more, .mil-choose').mouseleave(function () {
            gsap.to($(cursor), .2, {
                width: 20,
                height: 20,
                opacity: .1,
                ease: 'sine',
            });
        });

        $('.mil-accent-cursor').mouseover(function () {
            gsap.to($(cursor), .2, {
                background: accent,
                ease: 'sine',
            });
            $(cursor).addClass('mil-accent');
        });

        $('.mil-accent-cursor').mouseleave(function () {
            gsap.to($(cursor), .2, {
                background: dark,
                ease: 'sine',
            });
            $(cursor).removeClass('mil-accent');
        });

        $('.mil-drag').mouseover(function () {
            gsap.to($('.mil-ball .mil-icon-1'), .2, {
                scale: '1',
                ease: 'sine',
            });
        });

        $('.mil-drag').mouseleave(function () {
            gsap.to($('.mil-ball .mil-icon-1'), .2, {
                scale: '0',
                ease: 'sine',
            });
        });

        $('.mil-more').mouseover(function () {
            gsap.to($('.mil-ball .mil-more-text'), .2, {
                scale: '1',
                ease: 'sine',
            });
        });

        $('.mil-more').mouseleave(function () {
            gsap.to($('.mil-ball .mil-more-text'), .2, {
                scale: '0',
                ease: 'sine',
            });
        });

        $('.mil-choose').mouseover(function () {
            gsap.to($('.mil-ball .mil-choose-text'), .2, {
                scale: '1',
                ease: 'sine',
            });
        });

        $('.mil-choose').mouseleave(function () {
            gsap.to($('.mil-ball .mil-choose-text'), .2, {
                scale: '0',
                ease: 'sine',
            });
        });

        $('a:not(".mil-choose , .mil-more , .mil-drag , .mil-accent-cursor"), input , textarea, .mil-accordion-menu').mouseover(function () {
            gsap.to($(cursor), .2, {
                scale: 0,
                ease: 'sine',
            });
            gsap.to($('.mil-ball svg'), .2, {
                scale: 0,
            });
        });

        $('a:not(".mil-choose , .mil-more , .mil-drag , .mil-accent-cursor"), input, textarea, .mil-accordion-menu').mouseleave(function () {
            gsap.to($(cursor), .2, {
                scale: 1,
                ease: 'sine',
            });

            gsap.to($('.mil-ball svg'), .2, {
                scale: 1,
            });
        });

        $('body').mousedown(function () {
            gsap.to($(cursor), .2, {
                scale: .1,
                ease: 'sine',
            });
        });
        $('body').mouseup(function () {
            gsap.to($(cursor), .2, {
                scale: 1,
                ease: 'sine',
            });
        });
        /***************************

        main menu

        ***************************/
        $('.mil-has-children a').on('click', function () {
            $('.mil-has-children ul').removeClass('mil-active');
            $('.mil-has-children a').removeClass('mil-active');
            $(this).toggleClass('mil-active');
            $(this).next().toggleClass('mil-active');
        });
        /***************************

        scroll animations

        ***************************/

        const appearance = document.querySelectorAll(".mil-up");

        appearance.forEach((section) => {
            gsap.fromTo(section, {
                opacity: 0,
                y: 40,
                scale: .98,
                ease: 'sine',

            }, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: .4,
                scrollTrigger: {
                    trigger: section,
                    toggleActions: 'play none none reverse',
                }
            });
        });

        const scaleImage = document.querySelectorAll(".mil-scale");

        scaleImage.forEach((section) => {
            var value1 = $(section).data("value-1");
            var value2 = $(section).data("value-2");
            gsap.fromTo(section, {
                ease: 'sine',
                scale: value1,

            }, {
                scale: value2,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    toggleActions: 'play none none reverse',
                }
            });
        });

        const parallaxImage = document.querySelectorAll(".mil-parallax");


        if ($(window).width() > 960) {
            parallaxImage.forEach((section) => {
                var value1 = $(section).data("value-1");
                var value2 = $(section).data("value-2");
                gsap.fromTo(section, {
                    ease: 'sine',
                    y: value1,

                }, {
                    y: value2,
                    scrollTrigger: {
                        trigger: section,
                        scrub: true,
                        toggleActions: 'play none none reverse',
                    }
                });
            });
        }

        const rotate = document.querySelectorAll(".mil-rotate");

        rotate.forEach((section) => {
            var value = $(section).data("value");
            gsap.fromTo(section, {
                ease: 'sine',
                rotate: 0,

            }, {
                rotate: value,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    toggleActions: 'play none none reverse',
                }
            });
        });
        /***************************

        fancybox

        ***************************/
        $('[data-fancybox="gallery"]').fancybox({
            buttons: [
            "slideShow",
            "zoom",
            "fullScreen",
            "close"
          ],
            loop: false,
            protect: true
        });
        $.fancybox.defaults.hash = false;
        /***************************

        reviews slider

        ***************************/

        var menu = ['<div class="mil-custom-dot mil-slide-1"></div>', '<div class="mil-custom-dot mil-slide-2"></div>', '<div class="mil-custom-dot mil-slide-3"></div>', '<div class="mil-custom-dot mil-slide-4"></div>', '<div class="mil-custom-dot mil-slide-5"></div>', '<div class="mil-custom-dot mil-slide-6"></div>', '<div class="mil-custom-dot mil-slide-7"></div>']
        var mySwiper = new Swiper('.mil-reviews-slider', {
            // If we need pagination
            pagination: {
                el: '.mil-revi-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (menu[index]) + '</span>';
                },
            },
            speed: 800,
            effect: 'fade',
            parallax: true,
            navigation: {
                nextEl: '.mil-revi-next',
                prevEl: '.mil-revi-prev',
            },
        })

        /***************************

        infinite slider

        ***************************/
        var swiper = new Swiper('.mil-infinite-show', {
            slidesPerView: 2,
            spaceBetween: 30,
            speed: 5000,
            autoplay: true,
            autoplay: {
                delay: 0,
            },
            loop: true,
            freeMode: true,
            breakpoints: {
                992: {
                    slidesPerView: 4,
                },
            },
        });

        /***************************

        portfolio slider

        ***************************/
        var swiper = new Swiper('.mil-portfolio-slider', {
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 800,
            parallax: true,
            mousewheel: {
                enable: true
            },
            navigation: {
                nextEl: '.mil-portfolio-next',
                prevEl: '.mil-portfolio-prev',
            },
            pagination: {
                el: '.swiper-portfolio-pagination',
                type: 'fraction',
            },
        });
        /***************************

        1 item slider

        ***************************/
        var swiper = new Swiper('.mil-1-slider', {
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 800,
            parallax: true,
            navigation: {
                nextEl: '.mil-portfolio-next',
                prevEl: '.mil-portfolio-prev',
            },
            pagination: {
                el: '.swiper-portfolio-pagination',
                type: 'fraction',
            },
        });
        /***************************

        2 item slider

        ***************************/
        var swiper = new Swiper('.mil-2-slider', {
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 800,
            parallax: true,
            navigation: {
                nextEl: '.mil-portfolio-next',
                prevEl: '.mil-portfolio-prev',
            },
            pagination: {
                el: '.swiper-portfolio-pagination',
                type: 'fraction',
            },
            breakpoints: {
                992: {
                    slidesPerView: 2,
                },
            },
        });

    });

});

function initializeForm() {
    const form = document.querySelector('#contact-form');
    if (!form) return;

    const MAX_FILE_SIZE = 8 * 1024 * 1024; // 8MB in bytes
    const ALLOWED_FILE_TYPES = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];

    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        const errorMessage = document.getElementById('error-message');
        const formData = new FormData(this);

        // Basic field validation
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        if (!name || !email || !message) {
            if (errorMessage) {
                errorMessage.textContent = 'Please fill in all required fields.';
                errorMessage.style.display = 'block';
            }
            return;
        }
        
        if (!isValidEmail(email)) {
            if (errorMessage) {
                errorMessage.textContent = 'Please enter a valid email address.';
                errorMessage.style.display = 'block';
            }
            return;
        }

        // Prepare the data object
        const data = {
            name,
            email,
            message,
            position: formData.get('position'),
            bedrooms: formData.get('bedrooms'),
            guests: formData.get('guests')
        };

        // File validation for job application form
        const fileInput = form.querySelector('input[name="cv"]');
        
        if (fileInput && fileInput.files.length > 0) {
            const file = fileInput.files[0];

            // Check file type
            if (!ALLOWED_FILE_TYPES.includes(file.type)) {
                if (errorMessage) {
                    errorMessage.textContent = 'Please upload only PDF or Word documents.';
                    errorMessage.style.display = 'block';
                }
                return;
            }

            // Check file size
            if (file.size > MAX_FILE_SIZE) {
                if (errorMessage) {
                    errorMessage.textContent = 'File size must be less than 8MB.';
                    errorMessage.style.display = 'block';
                }
                return;
            }

            try {
                const base64File = await fileToBase64(file);
                data.cv = {
                    filename: file.name,
                    content: base64File,
                    contentType: file.type
                };
            } catch (error) {
                console.error('Error processing file:', error);
                if (errorMessage) {
                    errorMessage.textContent = 'Error processing file. Please try again.';
                    errorMessage.style.display = 'block';
                }
                return;
            }
        }

        await submitForm(data, form);
    });
}

// Helper function to convert file to base64
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// Update the submitForm function
async function submitForm(data, form) {
    const errorMessage = document.getElementById('error-message');
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    

    try {
        // Show loading state with green background
        // Add visual feedback during submission
        submitButton.innerHTML = 'Sending...';
        submitButton.style.backgroundColor = '#4CAF50';
        submitButton.style.borderColor = '#4CAF50';
        submitButton.style.padding = '0 10px'; // Reset padding to be even on both sides
        submitButton.disabled = true;

        // Prepare the form data
        const formData = {
            name: data.name,
            email: data.email,
            message: data.message
        };

        // Add position if it exists
        if (data.position) {
            formData.position = data.position;
        }

        // Add CV if it exists
        if (data.cv) {
            formData.cv = data.cv;
        }

        // Add bedrooms and guests if they exist
        if (data.bedrooms) {
            formData.bedrooms = data.bedrooms;
        }
        if (data.guests) {
            formData.guests = data.guests;
        }

        // Send the data
        const response = await fetch('https://su0bns46e1.execute-api.us-east-1.amazonaws.com/prod/SendMail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();

        // Show success message
        form.reset();
        
        // Hide the form container and show success message
        const formContainer = document.getElementById('form-container');
        const welcomeMessage = document.getElementById('welcome-message');
        const successMessage = document.getElementById('success-message');
        
        if (formContainer) formContainer.style.display = 'none';
        if (welcomeMessage) welcomeMessage.style.display = 'none';
        if (successMessage) successMessage.style.display = 'block';

    } catch (error) {
        console.error('Error:', error);
        if (errorMessage) {
            errorMessage.textContent = 'There was an error sending your application. Please try again.';
            errorMessage.style.display = 'block';
        }
    } finally {
        // Reset button appearance
        submitButton.innerHTML = originalButtonText;
        submitButton.style.backgroundColor = '';
        submitButton.style.borderColor = '';
        submitButton.style.padding = ''; // Reset to original padding
        submitButton.disabled = false;
    }
}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Call initializeForm on page load
document.addEventListener('DOMContentLoaded', initializeForm);

// Call initializeForm after Swup content replacement
document.addEventListener('swup:contentReplaced', initializeForm);

document.addEventListener('DOMContentLoaded', function () {
    // Common function to initialize form handling
    function initializeForm(formSelector, inputSelector, buttonSelector, placeholderText, successPlaceholder) {
        const form = document.querySelector(formSelector);
        if (!form) {
            console.error(`Form not found: ${formSelector}`);
            return;
        }

        const submitButton = form.querySelector(buttonSelector);
        const emailInput = form.querySelector(inputSelector);

        if (!submitButton || !emailInput) {
            console.error(`Missing form elements for: ${formSelector}`);
            return;
        }

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const email = emailInput.value.trim();

            if (!isValidEmail(email)) {
                console.error('Invalid email address:', email);
                emailInput.placeholder = 'Please enter a valid email';
                return;
            }

            // Reset button state and placeholder
            submitButton.classList.remove('success', 'error');
            submitButton.innerHTML = '→';
            emailInput.placeholder = placeholderText;

            // Send email via AWS Lambda
            sendEmailToAWSLambda(email)
            .then(response => {
                try {
                    // Parse the body if it's a JSON string
                    const responseBody = typeof response.body === 'string' ? JSON.parse(response.body) : response.body;
        
                    if (responseBody.message && responseBody.message === 'Chat request sent successfully') {
                        submitButton.classList.add('success');
                        submitButton.innerHTML = '✔';
                        emailInput.placeholder = 'Enviado';
                    } else {
                        console.error('Unexpected response:', responseBody);
                        submitButton.classList.add('error');
                        submitButton.innerHTML = '✖';
                        emailInput.placeholder = 'Error!';
                    }
                } catch (parseError) {
                    console.error('Error parsing response body:', parseError);
                    submitButton.classList.add('error');
                    submitButton.innerHTML = '✖';
                    emailInput.placeholder = 'Error!';
                }
            })
            .catch(error => {
                console.error('Error during email send:', error);
                submitButton.classList.add('error');
                submitButton.innerHTML = '✖';
                emailInput.placeholder = 'Error!';
            });
        });
    }

    // Initialize different forms
    document.addEventListener('DOMContentLoaded', function () {
        initializeForm(
            '#footer-form', 
            'input[name="footer-email"]', 
            '.mil-button.mil-icon-button-sm.mil-arrow-place', 
            "What's your email?", 
            'Enviado'
        );
    });

    initializeForm(
        '.mil-subscribe-form', 
        'input[type="text"]', 
        '.mil-button.mil-icon-button-sm.mil-arrow-place', 
        "What's your email?", 
        'Sent!'
    );
});

// Reusable email validation
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Reusable AWS Lambda email sender
async function sendEmailToAWSLambda(email) {
    try {
        const response = await fetch('https://su0bns46e1.execute-api.us-east-1.amazonaws.com/prod/SendMail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email }),
        });

        if (!response.ok) {
            console.error('Network response error:', response.status, response.statusText);
            throw new Error('Network response error');
        }

        // Parse response body
        const result = await response.json();

        // If result.body is a JSON string, parse it
        if (result.body && typeof result.body === 'string') {
            result.body = JSON.parse(result.body);
        }

        return result;
    } catch (error) {
        console.error('Error in sendEmailToAWSLambda:', error);
        throw error;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.getElementById("cv-upload");
    const fileInfo = document.querySelector(".file-info");

    if (fileInput) {
        fileInput.addEventListener("change", function() {
            if (this.files.length > 0) {
                const file = this.files[0];
                const fileName = file.name;
                const fileSize = (file.size / (1024 * 1024)).toFixed(2); // Convert to MB
                fileInfo.textContent = `${fileName} (${fileSize}MB)`;
                fileInfo.style.color = "green"; // Ensure the text is green
            } else {
                fileInfo.textContent = "";
            }
        });
    }
});