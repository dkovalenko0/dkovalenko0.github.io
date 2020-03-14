$(function () {

  $('.photos__slider').slick({
    infinity: true,
    fade: true,
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="">',
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="">',
    asNavFor: '.slider-num',
  })

  $('.slider-num').slick({
    fade: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.photos__slider',
  });


});