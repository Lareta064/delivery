$(document).ready(function () {

    //-фиксироват меню при прокрутке
    window.addEventListener('scroll', function () {
        if (this.pageYOffset > 100) {
            document.querySelector('header').classList.add('header--fixed');
        } else {
            document.querySelector('header').classList.remove('header--fixed');
        }
    })
    const menuToggle = document.querySelector('.menu-toggle');
    const mobMenu = document.querySelector('.header-menu');
    const overlayBlock = document.querySelector('#overlay');
    const backTopButton = document.querySelector('#back-top');

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

    //main-slider
    $('.banner-slider').owlCarousel({
        items: 1,
        nav: false,
        loop: true,
        // autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
        autoplayTimeout: 5000,
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


    plusBtn.on('click', function (e) {
        e.preventDefault()
        startCount = $(this).siblings('.product-counter--num').html();
        if (startCount < 20) {
            startCount = ++startCount;
            $(this).siblings('.product-counter--num').html(startCount);
            $(this).closest('.product-counter').children('input').val(startCount)
        }

    });

    minusBtn.on('click', function (e) {
        e.preventDefault()
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


    const checkboxGroup = document.querySelectorAll('label.form-label');
    const requiredInputs = document.querySelectorAll('.form-group  input[type="text"]');
    const textareaElement = document.querySelector('.form-group textarea');

    if (checkboxGroup.length > 0) {}

    //активировать чекбокс по клику на фейковый

    // for (let checkbox of checkboxGroup) {
    //     const thisParent = checkbox.closest('li');
    //     const thisInputCheckbox = thisParent.querySelector('input');
    //     checkbox.addEventListener('click', function () {
    //         thisInputCheckbox.checked != thisInputCheckbox.checked;
    //         if (thisInputCheckbox.checked) {

    //             thisParent.classList.add('check-item');
    //         } else {
    //             thisParent.classList.remove('check-item');
    //         }
    //     })
    // }

    for (let item of requiredInputs) {
        //по клику в текстовый инпут убираем восклиц знак и активируем плейсхолдер
        const thisParent = item.closest('.form-group');
        item.addEventListener('focus', function () {
            thisParent.classList.remove('error');
            thisParent.querySelector('.fake-placeholder').classList.add('active');

        });
        //по блюру у пустого инпута деактивируем плейсхолдер
        item.addEventListener('blur', function () {
            if (this.value.length == 0) {
                thisParent.querySelector('.fake-placeholder').classList.remove('active');
            }
        })
    }
    // для текстареа активируем и деактивируем плейсхолдер при фокусе и блюре
    textareaElement.addEventListener('focus', function () {
        const thisParent = this.closest('.form-group');
        thisParent.querySelector('.fake-placeholder').classList.add('active');

    });
    textareaElement.addEventListener('blur', function () {
        const thisParent = this.closest('.form-group');
        if (this.value.length == '0') {
            thisParent.querySelector('.fake-placeholder').classList.remove('active');
            console.log('');
        }
    });



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
                success = true;
            }
        }

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
    /*кнопка вверх */
    $("#back-top").hide();


    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

    });

    $('.orders-history .panel-collapse').on('show.bs.collapse', function () {
        let tabIcon = $("#" + $(this).attr("aria-labelledby")).children().children('.accordion-item__icon').children("i");
        let tabIconText = $("#" + $(this).attr("aria-labelledby")).children().children('.accordion-item__icon').children("span");
        tabIcon.addClass("up");
        tabIconText.text("Свернуть");
    });

    $('.orders-history .panel-collapse').on('hide.bs.collapse', function () {
        let tabIcon = $("#" + $(this).attr("aria-labelledby")).children().children('.accordion-item__icon').children("i");
        let tabIconText = $("#" + $(this).attr("aria-labelledby")).children().children('.accordion-item__icon').children("span");
        tabIcon.removeClass("up");
        tabIconText.text("Развернуть");
    });
    //TOOLTIP
    const tooltip = document.querySelector('.tooltip-div');
    const tooltipShowIcon = document.querySelector('.tooltip-icon');

    if (tooltip) {
        const tooltipCloseIcon = tooltip.querySelector('.close-toooltip');
        tooltipShowIcon.addEventListener('click', function (e) {
            e.preventDefault();
            tooltip.classList.add('active');
        });
        tooltipCloseIcon.addEventListener('click', function (e) {
            e.preventDefault();
            tooltip.classList.remove('active');
        });
    }
    /*--------------ANIMATE ADD PRODUCT IN BASKET   ------------ */
    let buttonBay = $('.product-set__footer .page-button')
    let imgToAnimate = $('.product-image img')
    let cartIcon = $('.user-basket')
    buttonBay.on('click', function (item) {
        let cloneImg = imgToAnimate.width()
        imgToAnimate.clone().css({
            'width': cloneImg,
            'position': 'absolute',
            'z-index': 100,
            'top': imgToAnimate.offset()['top'],
            'left': imgToAnimate.offset()['left'],
        }).appendTo('body').animate({
            'opacity': 0.3,
            'top': cartIcon.offset()['top'],
            'left': cartIcon.offset()['left'],
            'width': 20
        }, 2000, function () {
            $(this).remove()
        })
    });

    /*-------------PAGE-BASKET-------------*/

    /*-------REMOVE BASKET ITEM-----*/
    const basketPage = document.querySelector('.basket');
    if (basketPage) {

        const basketTable = document.getElementById('basket-table')
        const basketItems = basketTable.querySelectorAll('.basket-item');
        const cleanBasket = basketPage.querySelector('.basket-clean');

        const basketResultRow = basketPage.querySelector('.basket-result');
        const basketStateText = basketPage.querySelector('.basket-state');


        for (let i = 0; i < basketItems.length; i++) {

            const iconRemoveItem = basketItems[i].querySelector('.remove-basket-item');
            const iconRemoveAddProduct = basketItems[i].querySelector('.remove-addition');
            const addProducts = basketItems[i].querySelector('.addition-set');

            basketItems[i].addEventListener('click', function (e) {

                if (e.target == iconRemoveAddProduct) {
                    e.stopPropagation();
                    addProducts.remove();
                }

                if (e.target == iconRemoveItem) {
                    console.log(basketItems.length);
                    const data = basketTable.querySelectorAll('.basket-item');

                    if (data.length == 1) {
                        e.stopPropagation();
                        this.remove();
                        basketResultRow.remove();
                        basketStateText.classList.remove('d-none');


                    } else {
                        e.stopPropagation();

                        this.remove();

                    }


                }
            })
        }

        /*  очистить по клику на иконку корзины*/
        cleanBasket.addEventListener('click', function () {
            basketTable.remove();
            basketResultRow.remove();
            basketStateText.classList.remove('d-none');
        })

    }



    /*---------ЛИЧНЫЕ ДАННЫЕ------- */
    const showPasswIcon = document.querySelector('#toggle-passw');
    if (showPasswIcon) {

        showPasswIcon.addEventListener('click', function () {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                this.nextElementSibling.setAttribute('type', 'password')
            } else {
                this.classList.add('active');
                this.nextElementSibling.setAttribute('type', 'text')
            }
        })
    }


})