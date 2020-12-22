let sliderItem = 1;

$('.slider__left-arrow').click(left_arrow);
$('.slider__right-arrow').click(right_arrow);

function left_arrow() {
    switch(sliderItem) {
        case 1: 
            $('.slider__carousel > div:nth-child(2)').attr("class","slider__carousel-item_active");
            $('.slider__carousel > div:nth-child(3)').attr("class","slider__carousel-item_active");
            sliderItem = 3;
            break;
        case 2: 
            $('.slider__carousel > div:nth-child(2)').attr("class","slider__carousel-item");
            $('.slider__carousel > div:nth-child(3)').attr("class","slider__carousel-item");
            sliderItem = 1;
            break;
        case 3: 
            $('.slider__carousel > div:nth-child(3)').attr("class","slider__carousel-item");
            sliderItem = 2;
            break;
        default: break;
    }
}

function right_arrow() {
    switch(sliderItem) {
        case 1: 
            $('.slider__carousel > div:nth-child(2)').attr("class","slider__carousel-item_active");
            sliderItem = 2;
            break;
        case 2: 
            $('.slider__carousel > div:nth-child(3)').attr("class","slider__carousel-item_active");
            sliderItem = 3;
            break;
        case 3: 
            $('.slider__carousel > div:nth-child(2)').attr("class","slider__carousel-item");
            $('.slider__carousel > div:nth-child(3)').attr("class","slider__carousel-item");
            sliderItem = 1;
            break;
        default: break;
    }
}

jQuery(document).ready(function ($) {

      var refreshInterval = setInterval(function () {
          moveRight();
          right_arrow();
      }, 300000);
    
      var slideCount = $('#slider ul li').length;
      var slideWidth = $('#slider ul li').width();
      var slideHeight = $('#slider ul li').height();
      var sliderUlWidth = (slideCount - 1) * slideWidth;
      
      $('#slider').css({ width: slideWidth, height: slideHeight });
      $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
      $('#slider ul li:last-child').prependTo('#slider ul');

      function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
        clearInterval(refreshInterval);
        refreshInterval = setInterval(function () {
            moveRight();
            right_arrow();
        }, 3000);
      };
  
      function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
        clearInterval(refreshInterval);
        refreshInterval = setInterval(function () {
            moveRight();
            right_arrow();
        }, 3000);
      };
  
      $('.slider__left-arrow').click(function () {
          moveLeft();
      });

      $('.slider__right-arrow').click(function () {
          moveRight();
      });

      $(window).resize(function() {
        slideCount = $('#slider ul li').length;
        slideWidth = $('#slider ul li').width();
        slideHeight = $('#slider ul li').height();
        sliderUlWidth = slideCount * slideWidth;
        $('#slider').css({ width: slideWidth, height: slideHeight });
        $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
        $('#slider ul li:last-child').prependTo('#slider ul');
      });
  
  });   