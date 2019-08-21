$(document).ready(function() {
  $(function() {
    $(".burger").click(function() {
      $(this).toggleClass("burger--active");
      $(this)
        .siblings(".nav__list")
        .toggleClass("nav__list--open");
      $(this)
        .closest(".header")
        .toggleClass("header--open");
      return false;
    });
  });

  $(function() {
    $(".scroll").click(function() {
      $(this).addClass("active");
      $("html, body").animate(
        { scrollTop: $("#about").position().top - 60 },
        900
      );
    });
  });
  $(function() {
    $(".review__slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      centerMode: true,
      centerPadding: "0",
      autoplay: true,

      dots: true
    });
  });
});
