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
        mobMenu.addEventListener('click', function () {
            this.classList.remove('active');
            menuToggle.classList.remove('active');
            overlayBlock.classList.remove('active');
            bodyEl.classList.remove('noscroll');
        })
    }
    /**PageNav */
    $(".header-menu").onePageNav({
        currentClass: "active",
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: "",
        easing: "swing",
        begin: function () {},
        end: function () {},
        scrollChange: function ($currentListItem) {}
    });
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


    // маска для телефона
    $(".phone").mask("+7(999)999-99-99");
    $.fn.setCursorPosition = function (pos) {
        if ($(this).get(0).setSelectionRange) {
            $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
            var range = $(this).get(0).createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };
    $('input.phone').click(function () {
        $(this).setCursorPosition(3); // set position number
    });

    const requiredInputs = document.querySelectorAll('#contact-form input[type="text"]');
    const agreeInput = document.querySelector('#contact-form input[type="checkbox"]');
    const chekboxLabel = document.querySelector('#contact-form label');
    let chekboxStatus = agreeInput.getAttribute('checked');

    //по клику по кастомному чекбоксу меняем чекед реального, скрытого под кастомным
    chekboxLabel.addEventListener('click', function () {
        this.classList.remove('error');
        chekboxStatus !== chekboxStatus;
        if (agreeInput.getAttribute('checked') == false) {
            this.classList.add('error')
        }
    })

    //по клику в текстовый инпут убираем восклиц знак
    for (let item of requiredInputs) {
        item.addEventListener('click', function () {
            this.closest('.form-group').classList.remove('error');
        })
    }


    /*ВАЛИДАЦИЯ ФОРМЫ */
    $("#contact-form").on('submit', function (event) {
        event.preventDefault();

        let success = false;

        for (let item of requiredInputs) {
            const thisParent = item.closest('.form-group');

            if (item.value.length == 0) {
                thisParent.classList.add('error');
                success = false;

            } else {
                if (agreeInput.checked) {
                    success = true;
                } else {
                    chekboxLabel.classList.add('error');

                }
            }
        }
        console.log(success);
        if (success) {
            var string = $("#contact-form").serialize(); // Соханяем данные введенные в форму в строку.

            // Формируем ajax запрос
            $.ajax({
                type: "POST", // Тип запроса - POST
                url: "php/mail.php", // Куда отправляем запрос
                data: string, // Какие даные отправляем, в данном случае отправляем переменную string

                // Функция если все прошло успешно
                success: function (html) {
                    $("#contact-form").slideUp(800);
                    $('#answer').html(html);
                }
            });

            // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
            return false;
        }

    });

})