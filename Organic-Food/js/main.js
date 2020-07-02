$(function () {
  $(".feedback__slider ").slick({
    dots: true,
    dotsClass: "my-dots",
    arrows: false,
  });

  $(".nav-toogler").click(function (event) {
    $(".nav-toogler, .header__list").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
