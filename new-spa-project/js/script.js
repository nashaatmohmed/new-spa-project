$(document).ready(function () {
  //navbar-toggler
  $('.navbar-toggler').on('click', function () {
    $('nav .one').toggleClass('top');
    $('nav .two').toggleClass('hidden');
    $('nav .three').toggleClass('bottom');
  });

  //scroll navbar
  $('nav li a').on('click', function () {

    //add active class to navbar in links
    // $(this).addClass('active').parent().siblings().find('a').removeClass('active')


    $('html,body').animate({
      scrollTop: $('#' + $(this).data('scroll')).offset().top - 100
    })
  });


  $("#news-slider").owlCarousel({
    pagination: false,
    navigationText: false,
    loop: true,
    smartSpeed: 450,
    margin:30,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      480: {
        items: 1,
        nav: false
      },
      768: {
        items: 2,
        nav: false
      },
      1024: {
        items: 3,
        nav: false
      },
      1300: {
        items: 4,
        nav: false
      },
    }
  });




  

})