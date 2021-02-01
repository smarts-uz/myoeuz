// some scripts

// jquery ready start
$(document).ready(function() {
  // jQuery code
  "use strict";
   

    $(".hamburger").click(function(e){
        e.preventDefault();
        $(this).toggleClass("is-active");
        $('.nav').toggleClass('active');
        $('body').toggleClass('active-menu');
    });


    $(document).on('click', '.section-intro-page .container .intro-wrap .intro-bottom', function(){
      $(this).find('.page-scroll')[0].click();
    });


    $(document).on( 'click', '.nav.active .nav-services h2', function(){
      var this_h2 = $(this);
      if ($(window).width() < 768) {
        $('.nav.active .nav-services ul').slideToggle();
      }
    });

    var $span = $( document.createElement('span') );
    $span.html('<i class="fa fa-chevron-up"></i>').addClass('for_top_scroll');
    $('body').append($span);
    $(document).on('click', '.for_top_scroll', function(){
        $('html, body').stop().animate({ scrollTop: 0 }, 1000);
    });

    $('.steps-wrap').find('.btn-next').click( function(e){
        e.preventDefault();
        if ($(this).closest('.step').find('input').val()!='')
        {
            if($(this).closest('.step').find('input').hasClass('telephone') && $(this).closest('.step').find('input.telephone').val().length != 19)
            {
                $(this).closest('.step').find('.error').removeClass('hidden');
                return false;
            }
            else
            {
                $(this).closest('.step').removeClass('active').next('.step').addClass('active');
            }
        }
        else
        {
            $(this).closest('.step').find('.error').removeClass('hidden');
            return false;
        }
    });
  $('.steps-wrap').find('.btn-back').click( function(e){
    e.preventDefault();
    $(this).closest('.step').removeClass('active').prev('.step').addClass('active');
    
  });


  $('#mytab a').on('click', function (e) {
      e.preventDefault();
      var $this = $(this);
      $this.siblings().removeClass('active');
      $this.addClass('active');

      $('.tab-content').find('.tab-pane').hide();
      $($this.attr('href')).show();
  })

    ////////////////// block same height

      function block_height(argument) {

        $(window).bind("load", function() {
          var mh = 0;
          $(argument).each(function () {
            var height_block = parseInt($(this).height());
            if (height_block > mh) {
              mh = height_block;
            }
          });
          $(argument).height(mh);
        });
      }

    ////////////////// tooltip moves with cursor
      $('[data-tooltip]').hover(function(event) {
        //alert('salam');
        var tooltip_text = $(this).find('.tooltip-text').html();
          $('<span class="mytip"></span>').html(tooltip_text)
              .appendTo('body')
              .hide()
              .css('top', (event.pageY + 15) + 'px')
              .css('left', (event.pageX + 15) + 'px')
              .fadeIn();
      }, function() {
          $('.mytip').remove();
      }).mousemove(function(event) {
          $('.mytip')
          .css('top', (event.pageY + 15) + 'px')
          .css('left', (event.pageX + 15) + 'px');
    });

    //////////////////////// INDEX SERVICES
    $('.index-services .item-serv-home').click(function(event) {
      if ($(window).width() < 768) {
        $('html, body').stop().animate({ scrollTop: $('.index-services .col-md-5').offset().top - 70  }, 500);
      }
    });

    //////////////////////// Menu scroll to section for landing
    $('a.page-scroll').click(function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top - 50  }, 1000);
        event.preventDefault();
    });

    ///////////////// fixed menu on scroll for desctop
    $(window).scroll(function () {

      if($('.section-steps-line').length) {
          var offset_stepline = $('.section-steps-line').offset().top;

          if ($(this).scrollTop() > offset_stepline - 350) {
                  $('.step-wrapper').addClass('move-line');
              } else if( $(this).scrollTop() < offset_stepline + 600 ) {
                 $('.step-wrapper').removeClass('move-line');
          }
      } // end of checking


      if($('.section-bottom').length) {
        var offset_bottom = $('.section-bottom').offset().top;

        if ($(this).scrollTop() > offset_bottom - 400) {
              $('.envelopes').addClass('spread');
          } else if( $(this).scrollTop() < offset_bottom + 200 ) {
              $('.envelopes').removeClass('spread');
        }
      } // end of checking


      if ($(document).scrollTop() > $(window).height()){
        $('.for_top_scroll').addClass('active');
      }else{
        $('.for_top_scroll').removeClass('active')
      }

    });


    $('.accordion').find('.accordion-heading').click(function(){
        //Expand or collapse this panel
        $(this).next().slideToggle('fast');
        $('.accordion-heading').removeClass('active');
        $(this).addClass('active');
        //Hide the other panels
        $(".accordion-content").not($(this).next()).slideUp('fast');
    });


    /////////////////  items slider. /plugins/slickslider/
    if ($('.slick-slider').length > 0) { // check if element exists
        $('.slick-slider').slick({
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1,
            prevArrow: $('.slick-prev'),
            nextArrow: $('.slick-next') 
        });
    } // end if

    

    /////////////////  items slider. /plugins/slickslider/
    if ($('.slide-clients-home').length > 0) { // check if element exists
        $('.slide-clients-home').slick({
            slidesToShow: 7,
            infinite: true,
            speed: 1500,
            pauseOnHover: false,
            autoplay: true,
            autoplaySpeed:200,
            pauseOnFocus: false,
            responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            }
            ]
        });
    } // end if


    /////////////////  items slider. /plugins/slickslider/
    if ($('.index-bottom-slider-main').length > 0) { // check if element exists
        $('.index-bottom-slider-main').slick({
            slidesToShow: 4,
            infinite: true,
            speed: 3000,
            pauseOnHover: false,
            autoplay: true,
            autoplaySpeed:200,
            pauseOnFocus: false,
            responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            }
            ]
        });
    } // end if


    /////////////////  items slider. /plugins/slickslider/
    if ($('.clients-wrap-kunuz').length > 0) { // check if element exists
        $('.clients-wrap-kunuz').slick({
            slidesToShow: 5,
            infinite: true,
            speed: 3000,
            pauseOnHover: false,
            autoplay: true,
            autoplaySpeed:200,
            pauseOnFocus: false,
            centerMode: true,
            responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            }
            ]
        });
    } // end if


    /////////////////  items slider. /plugins/slickslider/
    if ($('.slick-slider-review-about').length > 0) { // check if element exists
        $('.slick-slider-review-about').slick({
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1,
            fade: false,
            prevArrow: $('.slick-prev-about-review'),
            nextArrow: $('.slick-next-about-review') 
        });
        var take_info;
        // On before slide change
        $('.slick-slider-review-about').on('afterChange', function(event, slick, currentSlide, nextSlide){
              take_info = $('.item-portfolio.slick-current').find('.info').html();
              $('.info-review-about').html(take_info);
        });
    } // end if




    /////////////////  items slider. /plugins/slickslider/
    if ($('.slick-slider-review-home').length > 0) { // check if element exists
        $('.slick-slider-review-home').slick({
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1,
            fade: false,
            prevArrow: $('.slick-prev-home-review'),
            nextArrow: $('.slick-next-home-review') 
        });
        var take_info;
        // On before slide change
        $('.slick-slider-review-home').on('afterChange', function(event, slick, currentSlide, nextSlide){
              take_info = $('.item-portfolio.slick-current').find('.info').html();
              $('.info-review-home').html(take_info);
        });
    } // end if


    /////////////////  items slider. /plugins/slickslider/
    if ($('.index-review-main').length > 0) { // check if element exists
        $('.index-review-main').slick({
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1,
            fade: false,
            prevArrow: $('.slick-prev-home-review'),
            nextArrow: $('.slick-next-home-review'),
            dots:true
        });
        var take_info;
        // On before slide change
        $('.index-review-main').on('afterChange', function(event, slick, currentSlide, nextSlide){
              take_info = $('.item-portfolio.slick-current').find('.info').html();
              $('.info-review-home').html(take_info);
        });
    } // end if

    

     /////////////////  items slider. /plugins/slickslider/
    if ($('.slide-shape').length > 0) { // check if element exists
        $('.slide-shape').slick({
            centerMode: false,
            centerPadding: '0',
            margin: 30,
            infinite: false,
            mobileFirst: true,
            swipeToSlide: true,
            prevArrow: $('.slick-prev-shape'),
            nextArrow: $('.slick-next-shape'),
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  arrows: false,
                  dots: false,
                  centerMode: false,
                  swipeToSlide: true,
                  slidesToShow: 6
                }
              },
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  dots: false,
                  centerMode: false,
                  swipeToSlide: true,
                  slidesToShow: 4
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  dots: false,
                  centerMode: false,
                  swipeToSlide: true,
                  slidesToShow: 2
                }
              },
               {
                breakpoint: 360,
                settings: {
                  arrows: false,
                  dots: false,
                  centerMode: false,
                  swipeToSlide: true,
                  slidesToShow: 2
                }
              }
            ]

        });
    } // end if

     /////////////////  items slider. /plugins/slickslider/
    if ($('.new_carusel_style .items-type-mobile-wrap').length > 0) { // check if element exists
        $('.new_carusel_style .items-type-mobile-wrap').slick({
            centerMode: false,
            centerPadding: '0',
            margin: 30,
            infinite: false,
            mobileFirst: true,
            swipeToSlide: true,
            prevArrow: $('.slick-prev-shape'),
            nextArrow: $('.slick-next-shape'),
            responsive: [
              {
                breakpoint: 1600,
                settings: {
                  arrows: false,
                  dots: false,
                  centerMode: false,
                  swipeToSlide: true,
                  slidesToShow: 6
                }
              },
              {
                breakpoint: 1300,
                settings: {
                  arrows: false,
                  dots: false,
                  centerMode: false,
                  swipeToSlide: true,
                  slidesToShow: 5
                }
              },
              {
                breakpoint: 992,
                settings: {
                  arrows: false,
                  dots: false,
                  centerMode: false,
                  swipeToSlide: true,
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  dots: false,
                  centerMode: false,
                  swipeToSlide: true,
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  dots: false,
                  centerMode: false,
                  swipeToSlide: true,
                  slidesToShow: 2
                }
              }
            ]

        });
    } // end if

    /////////////////  items slider. /plugins/slickslider/
    if ($('.slide-team').length > 0) { // check if element exists
        $('.slide-team').slick({
            centerMode: false,
            centerPadding: '0',
            infinite: false,
            mobileFirst: true,
            swipeToSlide: true,
            prevArrow: $('.slick-prev'),
            nextArrow: $('.slick-next'),
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  arrows: false,
                  dots: true,
                  centerMode: false,
                  swipeToSlide: true,
                  slidesToShow: 6
                }
              },
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  dots: true,
                  centerMode: false,
                  swipeToSlide: true,
                  slidesToShow: 4
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  dots: true,
                  centerMode: false,
                  swipeToSlide: true,
                  slidesToShow: 2
                }
              }
            ]

        });
    } // end if

    /////////////////  items slider. /plugins/slickslider/
    if ($('.slick-slider-brandbook').length > 0) { // check if element exists
        $('.slick-slider-brandbook').slick({
            centerMode: false,
            centerPadding: '0',
            slidesToShow: 5,
            infinite: true,
            prevArrow: $('.slick-prev-dev'),
            nextArrow: $('.slick-next-dev'),
            responsive: [
              {
                breakpoint: 480,
                settings: {
                  dots: true,
                  centerMode: false,
                  swipeToSlide: true,
                  slidesToShow: 1
                }
              },
              {
                breakpoint: 768,
                settings: {
                  dots: true,
                  centerMode: false,
                  swipeToSlide: true,
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 1024,
                settings: {
                  dots: true,
                  centerMode: false,
                  swipeToSlide: true,
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 1400,
                settings: {
                  dots: true,
                  centerMode: false,
                  swipeToSlide: true,
                  slidesToShow: 4
                }
              }
              
              
            ]
        });

        setTimeout(function(){
          block_height($('.slick-slider-brandbook .item-slide .item-dev-brand h4'))
          block_height($('.slick-slider-brandbook .item-slide .item-dev-brand p'))
        },500)


        // $(document).on('click', '.section-develop-brand .control-slide-dev a', function(e){
        //   console.log('ddd')
        //   e.preventDefault();
        // });

    } // end if

    /////////////////  items slider. /plugins/slickslider/
    if ($('.slick-slider-brandbook-3').length > 0) { // check if element exists
        $('.slick-slider-brandbook-3').slick({
            centerMode: false,
            centerPadding: '0',
            slidesToShow: 4,
            prevArrow: $('.slick-prev-dev'),
            nextArrow: $('.slick-next-dev'),
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  dots: true,
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 768,
                settings: {
                  dots: true,
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  dots: true,
                  slidesToShow: 1
                }
              }
            ]
        });

        setTimeout(function(){
          block_height($('.slick-slider-brandbook-3 .item-slide .item-dev-brand h4'))
          block_height($('.slick-slider-brandbook-3 .item-slide .item-dev-brand p'))
        },500)

    } // end if

    /////////////////  items slider. /plugins/slickslider/
    if ($('.portfolio-temporary-bottom-slide .slide').length > 0) { // check if element exists
        $('.portfolio-temporary-bottom-slide .slide').slick({
            centerMode: false,
            centerPadding: '0',
            slidesToShow: 4,
            swipeToSlide: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            // prevArrow: $('.slick-prev-dev'),
            // nextArrow: $('.slick-next-dev'),
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1
                }
              }
            ]
        });

    } // end if

    /////////////////  items slider. /plugins/slickslider/
    if ($('#seo-text-slider').length > 0) { // check if element exists
        $('#seo-text-slider').slick({
            centerMode: false,
            slidesToShow: 1,
            swipeToSlide: true,
            infinite: false,
            prevArrow: $('.seo-text-slider_arrows .prev'),
            nextArrow: $('.seo-text-slider_arrows .next')
        });

    } // end if



    /////////////////  items slider. /plugins/slickslider/
    if ($('.my-warehouse_content .slider').length > 0) { // check if element exists
        $('.my-warehouse_content .slider').slick({
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 1,
          fade: false,
          dots: true,
          arrows: true,
          adaptiveHeight: true,
        });
        $('.my-warehouse_content .slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
          $('.my-warehouse_content .section-one .slider_nav .links div[data='+currentSlide+']').addClass('active').siblings('div').removeClass('active');
          console.log($('.my-warehouse_content .section-one .slider_nav .links div[data='+currentSlide+']')[0]);
        });
        $(document).on('click', '.my-warehouse_content .section-one .slider_nav .links div', function(){
          $(this).addClass('active').siblings('div').removeClass('active');
          $('.my-warehouse_content .section-one .slider .slick-dots li').eq($(this).attr('data'))[0].click();      
        });
    } // end if


     // AOS animate on scroll
    if ($('[data-aos]').length > 0) { // check if element exists
      AOS.init({
        disable: 'mobile',
        offset: 200, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
      });
    }
    
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  if ($('#particles-js').length > 0) { // check if element exists
      
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 160,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 1,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 5,
            "size_min": 0.3,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 600
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "bubble"
          },
          "onclick": {
            "enable": false,
            "mode": "repulse"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 250,
            "size": 0,
            "duration": 2,
            "opacity": 0,
            "speed": 3
          },
          "repulse": {
            "distance": 400,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });

  } // end if

 

if ($('.item-step-seo .card-body').length > 0) { // check if element exists
  block_height($('.item-step-seo .card-body'));
}
/*if ($('.card .card-body ul').length > 0 && $(window).width() >= 768) { // check if element exists
  block_height($('.card .card-body ul'));
}*/

$(document).on('click', '.nav-portfolio a', function(event){
  event.preventDefault();
  var self = $(this), item = $('.main-item-work');
  self.parent('li').addClass('active').siblings().removeClass('active');
  for (var i = item.length - 1; i >= 0; i--) {
    if (self.attr('href') == item.eq(i).attr('data-filter')) {
      item.eq(i).removeClass('width-zero');
    } else if (self.attr('href') == 'all') {
      item.removeClass('width-zero');
    } else{
      item.eq(i).addClass('width-zero');
    }
  }
});


if ($('input:file').length) {
  $('input:file')[0].onchange = function () {
    var file_name = this.files.item(0).name;
    $(this).prev().html(file_name);
  };
}

// CONTACT FORM

$(document).on('keydown focus click', '.telephone', function (e) {
    var key = e.charCode || e.keyCode || 0;
    var $phone = $(this);

    // Auto-format- do not expose the mask as the user begins to type
    if (key !== 8 && key !== 9) {
        if ($phone.val().length === 0 || $phone.val().length === 1 || $phone.val().length === 2 || $phone.val().length === 3) {
            $phone.val('');
            $phone.val($phone.val() + '+998');
        }     
        if ($phone.val().length === 4) {
            $phone.val($phone.val() + ' (');
        }     
        if ($phone.val().length === 8) {
            $phone.val($phone.val() + ') ');
        }
        if ($phone.val().length === 13) {
            $phone.val($phone.val() + '-');
        }
        if ($phone.val().length === 16) {
            $phone.val($phone.val() + '-');
        }
        if ($phone.val().length === 19) {
            return false
        }
    }

    // Allow numeric (and tab, backspace, delete) keys only
    return (key == 8 || 
    key == 9 ||
    key == 46 ||
    (key >= 48 && key <= 57) ||
    (key >= 96 && key <= 105)); 
})
// .bind('focus click', function () {
//     var $phone = $(this);

//     if ($phone.val().length === 0) {
//         $phone.val('+998');
//     }
//     else {
//         var val = $phone.val();
//         $phone.val('').val(val); // Ensure cursor remains at the end
//     }
// });





$(document).on('click', '#get_popup', function(){
    
    var form_id = $(this).data('param-form_id');
    if($(this).data('param-service-name')){
      var service = $(this).data('param-service-name');
    }
    if($(this).data('param-tariff-name')){
      var tariff = $(this).data('param-tariff-name');
    } 
    
    $.ajax({
      url: "/ajax/form.php?form_id="+form_id+"&service="+service+"&tariff="+tariff,
      success: function(result){
        $(".modal-content").html(result);
      }});
    
});


  ////////////////////////////////////////////// AMO CRM

    function forFixedScroll(obj){
      var a = obj.parent().offset().top - $(window).height(),
          b = obj.parent().offset().top + obj.height(),
          c = $(document).scrollTop();
      if (a < c && b > c) {
        $(obj).addClass('active');
      }
    }
    function setProgress(argument){
      var num = $(argument).find('.percentage1').text().replace('%','');
      var $spinner = $(argument).find('.spinner');
      var $filler = $(argument).find('.filler');
      var $percentage = $(argument).find('.percentage');
      
      if (num < 0) num = 0;
      if (num > 100) num = 100;
      
      var initialNum = $percentage.text().replace('%','');
      $({numVal:initialNum}).animate({numVal:num},{
        duration: 2000,
        easing: 'swing',
        step: function (currVal) {
          $percentage.text(Math.ceil(currVal) + '%');
          if (currVal > 0 && currVal <= 50) {
            $filler.css('display', 'none');
            var spinnerDegs = -180 + ((currVal * 180) / 50);
            rotate($spinner, spinnerDegs);
          } else if (currVal > 50) {
            rotate($spinner, 0);
            $filler.css('display', '');
            var fillerDegs = 0 + ((currVal * 180) / 50);
            rotate($filler, fillerDegs);
          }
        }
      });
    }
    function rotate($el, deg) {
      $el.css({
        '-webkit-transform': 'rotate(' + deg + 'deg)',
        '-moz-transform': 'rotate(' + deg + 'deg)',
        '-ms-transform': 'rotate(' + deg + 'deg)',
        '-o-transform': 'rotate(' + deg + 'deg)',
        'transform': 'rotate(' + deg + 'deg)'
      });
    }

    var for_progress_circle_off = true;
    $(document).scroll(function(){
      if ($('.progress-circle').length) {
        if(for_progress_circle_off == true && $('.progress-circle').hasClass('active')){
          $('.progress-circle.active').each(function(){
            setProgress($(this));
          });
          for_progress_circle_off = false;
        }

        if ($(window).width() > 1200) {
          forFixedScroll($('.progress-circle'));
        }else{
          $('.progress-circle').addClass('active');
        }
      }
    });


    var rangeSlider = document.getElementById("rs-range-line");
    var rangeBullet = document.getElementById("rs-bullet");

    if (rangeSlider) {
      rangeSlider.addEventListener("input", showSliderValue, false);
      $(document).bind("input change", rangeSlider, function(event){
        showSliderValue();
      }, false);
    }
    function showSliderValue() {
      rangeBullet.innerHTML = rangeSlider.value;
      var bulletPosition = (rangeSlider.value /rangeSlider.max);
      rangeBullet.style.left = (bulletPosition * ($('#popup_calculator .modal-dialog .range-container .rs-range').width() - 30)) + "px";
    }


    $(".contentn_video_w100 .pulse-play, .contentn_video_w100 > a").click(function(e){
      e.preventDefault();
      $('.contentn_video_w100').addClass("remove_default_img");
      $('.contentn_video_w100').addClass("active");
      $(".contentn_video_w100 video")[0].play();
    });
    $(".contentn_video_w100 video").click(function(e){
      $('.contentn_video_w100').removeClass("active");
      $(this)[0].pause();
    });
    $(".contentn_video_w100 video").on('ended',function(){
      $('.contentn_video_w100').removeClass("active");
    });

    function openFullscreen(elem) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
    }

    $(document).on('click', '.contentn_video_w100.active svg', function(){
      openFullscreen($(this).parent('.contentn_video_w100').find('video')[0]);
    });
  ////////////////////////////////////////////// AMO CRM END



  ////////////////////////////////////////////// ONLINE STORE
    $(document).on('click', '#online_store .module_5 .btn_bottom_arrow', function(){
      $(this).toggleClass('active');
      $('#online_store .module_5 .content').slideToggle();
    });
  ////////////////////////////////////////////// ONLINE STORE END


}); 



// jquery end