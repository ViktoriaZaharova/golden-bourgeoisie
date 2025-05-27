$('[name="phone"]').mask('+7 (999) 999-99-99');

// sliders
$('.certificate-slider').slick({
  slidesToShow: 3,
  appendArrows: '.certificate-slider__arrows',
  prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 440,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
        arrows: false
      },
    },
  ],
});

$('.specialists-slider').slick({
  slidesToShow: 5,
  appendArrows: '.specialists-slider__arrows',
  prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
        arrows: false
      },
    }
  ],
});

$('.home-slider').slick({
  slidesToShow: 1,
  fade: true,
  arrows: false,
  dots: true,
  autoplay: true,
});

$('.services-slider').slick({
  slidesToShow: 4,
  prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
        arrows: false,
      },
    },
  ],
});

$('.why-us-slider').slick({
  slidesToShow: 1,
  fade: true,
  appendArrows: '.why-us-slider__arrows',
  prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
});

$('.sales-slider').slick({
  slidesToShow: 5,
  appendArrows: '.sales-slider__arrows',
  prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        arrows: false,
        autoplay: true,
        variableWidth: true,
      },
    },
  ],
});

$('.results-slider').slick({
  slidesToShow: 3,
  swipe: false,
  swipeToSlide: false,
  appendArrows: '.results-slider__arrows',
  prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
});

$('.video-gallery-slider').slick({
  slidesToShow: 3,
  appendArrows: '.video-gallery-slider__arrows',
  prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
});

// Fancybox
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

// tabs
$(document).ready(function ($) {
  $('.tabs-wrap li a').click(function (e) {
    e.preventDefault();
  });
  $('.tabs-wrap li').click(function () {
    $('.tabs-wrap li').removeClass('active');
    $(this).addClass('active').closest('.tabs-wrap').find('.tab_content').removeClass('active');

    var selectTab = $(this).find('a').attr("href");

    $(selectTab).addClass('active');

    function slicks() {
      $('.slick-slider').slick("refresh");
    }

    slicks()
  });
});


// twenty twenty
$(function () {
  $(".twentytwenty-container").twentytwenty({
    orientation: 'horizontal', // Orientation of the before and after images ('horizontal' or 'vertical')
    before_label: 'До', // Set a custom before label
    after_label: 'После', // Set a custom after label
    click_to_move: false // Allow a user to click (or tap) anywhere on the image to move the slider to that location.
  });
});

// mobile menu
$('.dropdown-mobile__link').on('click', function (e) {
  e.preventDefault();
  $('.dropdown-mobile__wrapper').fadeIn();
});

$('.link-step-menu').on('click', function (e) {
  e.preventDefault();
  $('.dropdown-mobile__wrapper').fadeOut();
});

$('.menu-link__burger, .btn-burger').on('click', function (e) {
  e.preventDefault();
  $('.overlay').fadeIn();
  $('.mobile-menu').css('left', '0');
});

$('.mobile-menu__close, .overlay').on('click', function (e) {
  e.preventDefault();
  $('.mobile-menu').css('left', '-100%');
  $('.overlay').fadeOut();
});


// accordeon
function accordeon() {
  var panel = $('.panel_heading');

  if (panel.hasClass('in')) {
    $('.in').find('.block_hover').slideDown();
  }

  $('.panel_heading .block_title').on('click', function () {
    $(this).parent().toggleClass('in').find('.block_hover').slideToggle();
  });
}

accordeon();

// animate scroll
$('.go_to').click(function (e) {
  e.preventDefault();
  var scroll_el = $(this).attr('href');
  if ($(scroll_el).length !== 0) {
      $('html, body').animate({
          scrollTop: $(scroll_el).offset().top
      }, 500);
  }
  return false;
});

$('.form-callback [type="submit"]').on('click', function(e){
  e.preventDefault();
  $('.form-callback').fadeOut();
  $('.callback-thanks').fadeIn();
});

// filter prices toggle
$('.filter-prices__toggle').on('click', function (e) {
  e.preventDefault();
  
});