let sliderItem = 1;

jQuery(document).ready(function ($) {
  $(".slider__left-arrow").click(left_arrow);
  $(".slider__right-arrow").click(right_arrow);
  $(".slider__carousel").click(function (event) {
    select_slider_item($(".slider__carousel > div").index(event.target) + 1);
  });

  function left_arrow() {
    if (sliderItem <= 1) sliderItem = slideCount;
    else sliderItem--;
    for (let index = 1; index <= slideCount; index++) {
      if (index == sliderItem)
        $(".slider__carousel > div:nth-child(" + index + ")").attr(
          "class",
          "slider__carousel-item_active"
        );
      else
        $(".slider__carousel > div:nth-child(" + index + ")").attr(
          "class",
          "slider__carousel-item"
        );
    }
  }

  function right_arrow() {
    if (sliderItem >= slideCount) sliderItem = 1;
    else sliderItem++;
    for (let index = 1; index <= slideCount; index++) {
      if (index == sliderItem)
        $(".slider__carousel > div:nth-child(" + index + ")").attr(
          "class",
          "slider__carousel-item_active"
        );
      else
        $(".slider__carousel > div:nth-child(" + index + ")").attr(
          "class",
          "slider__carousel-item"
        );
    }
  }

  var slideCount = $("#slider ul li").length;
  var slideWidth = $("#slider ul li").width();

  $("#slider").css({ width: "100vw" });
  $(" #slider ul").css({ marginLeft: -slideWidth });
  $("#slider ul li:last-child").prependTo("#slider ul");

  function select_slider_item(n) {
    if (n <= 0 || n > slideCount) return;
    if (sliderItem < n) {
      for (let index = sliderItem; index < n; index++) {
        moveRight(1);
      }
    } else
      for (let index = sliderItem; index > n; index--) {
        moveLeft(1);
      }
    sliderItem = n;
    for (let index = 1; index <= slideCount; index++) {
      if (index == sliderItem)
        $(".slider__carousel > div:nth-child(" + index + ")").attr(
          "class",
          "slider__carousel-item_active"
        );
      else
        $(".slider__carousel > div:nth-child(" + index + ")").attr(
          "class",
          "slider__carousel-item"
        );
    }
    clearInterval(refreshInterval);
    refreshInterval = setInterval(function () {
      moveRight(2);
      right_arrow();
    }, 3000);
  }

  var refreshInterval = setInterval(function () {
    moveRight(2);
    right_arrow();
  }, 3000);

  function moveLeft(speed) {
    $("#slider ul").animate(
      {
        left: +slideWidth,
      },
      200 * speed,
      function () {
        $("#slider ul li:last-child").prependTo("#slider ul");
        $("#slider ul").css("left", "");
      }
    );
    clearInterval(refreshInterval);
    refreshInterval = setInterval(function () {
      moveRight(2);
      right_arrow();
    }, 3000);
  }

  function moveRight(speed) {
    $("#slider ul").animate(
      {
        left: -slideWidth,
      },
      200 * speed,
      function () {
        $("#slider ul li:first-child").appendTo("#slider ul");
        $("#slider ul").css("left", "");
      }
    );
    clearInterval(refreshInterval);
    refreshInterval = setInterval(function () {
      moveRight(2);
      right_arrow();
    }, 3000);
  }

  $(".slider__left-arrow").click(function () {
    moveLeft(2);
  });

  $(".slider__right-arrow").click(function () {
    moveRight(2);
  });
});

$("#slider").resize(function () {
  slideCount = $("#slider ul li").length;
  slideWidth = $("#slider ul li").width();
  $("#slider").css({ width: "100vw" });
  $("#slider ul li:last-child").prependTo("#slider ul");
});
