(function ($) {
  "use strict";
  // banner silder

  var owl = $('.banner_part .owl-carousel'),
    item,
    itemsBgArray = [], // to store items background-image
    itemBGImg;

  owl.owlCarousel({
    animateOut: 'fadeOut',
    items: 1,
    // smartSpeed: 1000,
    autoplayHoverPause: true,
    autoplay: true,
    // autoplayTimeout: 8000,
    // autoplaySpeed: 1000,
    loop: true,
    nav: false,
    navText: false,
  });

  $('.active').addClass('anim');

  // var owlItem = $('.owl-item'),
  // owlLen = owlItem.length;
  /* --------------------------------
    * store items bg images into array
  --------------------------------- */

  /* --------------------------------------------
    * nav control thump
    * nav control icon
  --------------------------------------------- */
  var owlNav = $('.owl-nav'),
    el;

  // $.each(owlNav.children(), function (i, e) {
  //   el = $(e);
  //   // append navs thump/icon with control pattern(owl-prev/owl-next)
  //   el.append('<div class="' + el.attr('class').match(/owl-\w{4}/) + '-thump">');
  //   el.append('<div class="' + el.attr('class').match(/owl-\w{4}/) + '-icon">');
  // });

  /*-------------------------------------------
    Change control thump on each translate end
  ------------------------------------------- */


  $(document).ready(function () {
    $('select').niceSelect();
  });
  // menu fixed js code
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('.main_menu').addClass('menu_fixed animated fadeInDown');
    } else {
      $('.main_menu').removeClass('menu_fixed animated fadeInDown');
    }
  });

  /*----------------------------
    START - Slider activation
    ------------------------------ */
  $('.screenshot-wrap').slick({
    autoplay: true,
    dots: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    centerPadding: '22%',
    centerMode: true,
    prevArrow: '',
    nextArrow: '',
    responsive: [{

      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        centerPadding: '33.3%'
      }

    }, {

      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        centerPadding: '25.3%'
      }

    }]
  });
  /*---------testimonial_slider js-----------*/
  function testimonial_three() {
    if ($('.testimonial_slider').length) {
      $('.testimonial_slider').owlCarousel({
        loop: true,
        margin: 30,
        items: 1,
        nav: true,
        autoplay: false,
        smartSpeed: 1500,
        dots: true,
        //				navClass: ['btn btn-default owl-carousel-left disabled','btn btn-default owl-carousel-right'],
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsiveClass: true,
        //                responsive: {
        //                    0: {
        //                        items: 1,
        //                    },
        //                    480: {
        //                        items: 2,
        //                    },
        //                    600: {
        //                        items: 4,
        //                    },
        //                    800: {
        //                        items: 6,
        //                    }
        //                }
      })
    }
  }
  testimonial_three();
  // function to copy in footer
  $(".skype-icon").on('click', function () {
    var $temp = $("<input>");
    $(".ripple").remove();
    $(".copied").remove();
    $(this).append($temp);
    $temp.val($('#skype-id').text()).select();
    document.execCommand("copy");
    $(this).prepend("<span class='copied'>Copied!</span>");
    $(this).prepend("<span class='ripple'></span>");
    // Add the ripples CSS and start the animation
    $(".ripple").addClass("rippleEffect");
    $(".copied").addClass("copiedEffect");
    $temp.remove();
  });

}(jQuery));