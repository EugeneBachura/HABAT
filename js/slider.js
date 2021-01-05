let sliderItem = 1;

$('.slider__left-arrow').click(left_arrow);
$('.slider__right-arrow').click(right_arrow);

function left_arrow() {
    if (sliderItem <= 1) sliderItem = 3
        else sliderItem--;
    for (let index = 1; index <= 3; index++) {
        if (index == sliderItem) $('.slider__carousel > div:nth-child('+index+')').attr("class","slider__carousel-item_active")
            else $('.slider__carousel > div:nth-child('+index+')').attr("class","slider__carousel-item");
    }
}

function right_arrow() {
    if (sliderItem >= 3) sliderItem = 1
        else sliderItem++;
    for (let index = 1; index <= 3; index++) {
        if (index == sliderItem) $('.slider__carousel > div:nth-child('+index+')').attr("class","slider__carousel-item_active")
            else $('.slider__carousel > div:nth-child('+index+')').attr("class","slider__carousel-item");
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
      
      $('#slider').css({ width: '100vw' });
      //$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
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
  
  });   

$('#slider').resize(function() {
    slideCount = $('#slider ul li').length;
    slideWidth = $('#slider ul li').width();
    slideHeight = $('#slider ul li').height();
    sliderUlWidth = (slideCount - 1) * slideWidth;
    $('#slider').css({ width: '100vw' });
    $('#slider ul li:last-child').prependTo('#slider ul');
});