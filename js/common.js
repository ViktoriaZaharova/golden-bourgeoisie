$('[name="phone"]').mask('+7 (999) 999-99-99');

// sliders
$('.certificate-slider').slick({
  slidesToShow: 3,
  appendArrows: '.certificate-slider__arrows',
  prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
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
      breakpoint: 1200,
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
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    }
  ],
});

$('.home-slider').slick({
  slidesToShow: 1,
  fade: true,
  arrows: false,
  dots: true,
});

$('.services-slider').slick({
  slidesToShow: 4,
  prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
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

