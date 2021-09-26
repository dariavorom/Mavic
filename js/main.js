$(function () {

    $('.product__slider').slick({
        prevArrow: '<button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>',
        nextArrow: '<button class="slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>',
        infinite: false,
    })
    $('.question__item-title').on('click', function () {
        $('.question__item').removeClass('question__item--active');
        $(this).parent().addClass('question__item--active');
    })
    $('#fullpage').fullpage({
        //options here
        licenseKey: null,
        autoScrolling:true,
        scrollHorizontally: false,
        sectionSelector: '.page-section',
        scrollingSpeed: 700,
        lazyLoading: true,
        scrollOverflow: true,
        anchors: ['top', 'product', 'benefits', 'specification', 'questions', 'contacts'],
        menu: '#header__nav'
    });
    $('.menu__btn').on('click', function () {
        $('.menu__btn').toggleClass('menu__btn--active');
        $('.menu__list').toggleClass('menu__list--active');
    });
    $('.menu__list-item').on('click', function () {
        $('.menu__list').removeClass('menu__list--active');
        $('.menu__btn').removeClass('menu__btn--active');
    });
});