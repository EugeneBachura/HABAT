$(document).on('click','.services__content-btn', function(){
    $('.services__content-btn_active').attr("class","services__content-btn");
    $(this).attr("class","services__content-btn_active");
    if ($(this).index() == 1) {
        $('.services__blocks').css("display","none");
        $('.services__business').css("display","flex");
    } else {
        $('.services__business').css("display","");
        $('.services__blocks').css("display","");
    }
});

/*mobile*/
let blockIsOpen = [false, false, false, false, false, false]

$('.info-block__arrow-btn').click(function() {
    if (!blockIsOpen[$(this).parent().index()]) {
        $(this).css("transform","rotate(-180deg)");
        $(this).siblings(".info-block__description").css("display","block");
        blockIsOpen[$(this).parent().index()] = true;
    } else {
        $(this).css("transform","");
        $(this).siblings(".info-block__description").css("display","");
        blockIsOpen[$(this).parent().index()] = false;
    }
});