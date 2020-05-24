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
                bodyEl.classList.remove('noscroll');
            } else {
                this.classList.add('active');
                mobMenu.classList.add('active');
                overlayBlock.classList.add('active');
                bodyEl.classList.add('noscroll');
            }
        });
        window.addEventListener('resize', function () {
            menuToggle.classList.remove('active');
            overlayBlock.classList.remove('active');
            bodyEl.classList.remove('noscroll');
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


    /*показать/скрыть обратную сторону карточки товара на главной*/
    const mainProductCard = document.querySelectorAll('.product-card');
    if (mainProductCard) {
        for (let card of mainProductCard) {
            const cardBackSide = card.querySelector('.product-card__addition');
            const cardBtnShowBack = card.querySelector('.show-back');
            const cardBtnHideBack = card.querySelector('.hide-back');

            card.addEventListener('click', function (e) {
                e.stopPropagation;
                e.preventDefault;
                if (e.target == cardBtnShowBack) {
                    cardBackSide.classList.add('active')
                }
            });
            card.addEventListener('click', function (e) {
                e.stopPropagation;
                console.log('555');
                if (e.target == cardBtnHideBack) {
                    cardBackSide.classList.remove('active')
                }

            });
        }
    }

    /* MIXITUP3*/
    let containerEl = document.querySelector('.menu-products__content');
    if (containerEl) {
        let mixer = mixitup(containerEl, {
            classNames: {
                block: ""
            },
            load: {
                filter: '.cat1'
            }
        })
    }




})