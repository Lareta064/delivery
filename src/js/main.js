$(document).ready(function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobMenu = document.querySelector('.header-menu');
    const overlayBlock = document.querySelector('#overlay');
    const bodyEl = document.body;
    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                mobMenu.classList.remove('active');
                overlayBlock.classList.remove('active');
                bodyEl.classList.remove('active');
            } else {
                this.classList.add('active');
                mobMenu.classList.add('active');
                overlayBlock.classList.add('active');
                bodyEl.classList.add('active');
            }
        });
        window.addEventListener('resize', function () {
            menuToggle.classList.remove('active');
            overlayBlock.classList.remove('active');
            bodyEl.classList.remove('active');
            mobMenu.classList.remove('active');
        });
    }

    //main-slider
    $('.banner-slider').owlCarousel({
        items: 1,
        nav: false,
        loop: true,
        smartSpeed: 800,
        dots: true,
        navSpeed: 800,
        dotsSpeed: 800,
        navText: ["<span class='arrow-left'><i class='fas fa-chevron-left'></i></span>", "<span class='arrow-left'><i class='fas fa-chevron-right'></i></span>"],

    });
    //-lazy
    $(function () {
        $('.lazy').lazy();
    });

    /** Счетчик количества **/

    let plusBtn = $('.product-counter--plus');
    let minusBtn = $('.product-counter--minus');


    plusBtn.on('click', function () {
        startCount = $(this).siblings('.product-counter--num').html();
        if (startCount < 20) {
            startCount = ++startCount;
            $(this).siblings('.product-counter--num').html(startCount);
            $(this).closest('.product-counter').children('input').val(startCount)
        }

    });

    minusBtn.on('click', function () {
        startCount = $(this).siblings('.product-counter--num').html();
        if (startCount > 1) {
            startCount = --startCount;
            $(this).siblings('.product-counter--num').html(startCount);
            $(this).closest('.product-counter').children('input').val(startCount)

        }
    });

    /** //Счетчик количества **/

})