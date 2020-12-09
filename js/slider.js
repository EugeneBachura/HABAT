let sliderItem = 1;

$('.slider__left-arrow').click(function() {
    switch(sliderItem) {
        case 1: 
            $('.slider__group').css("margin-left","-200%");
            $('.slider__carousel > div:nth-child(2)').attr("class","slider__carousel-item_active");
            $('.slider__carousel > div:nth-child(3)').attr("class","slider__carousel-item_active");
            sliderItem = 3;
            break;
        case 2: 
            $('.slider__group').css("margin-left","");
            $('.slider__carousel > div:nth-child(2)').attr("class","slider__carousel-item");
            $('.slider__carousel > div:nth-child(3)').attr("class","slider__carousel-item");
            sliderItem = 1;
            break;
        case 3: 
            $('.slider__group').css("margin-left","-100%");
            $('.slider__carousel > div:nth-child(3)').attr("class","slider__carousel-item");
            sliderItem = 2;
            break;
        default: break;
    }
});
$('.slider__right-arrow').click(function() {
    switch(sliderItem) {
        case 1: 
            $('.slider__group').css("margin-left","-100%");
            $('.slider__carousel > div:nth-child(2)').attr("class","slider__carousel-item_active");
            sliderItem = 2;
            break;
        case 2: 
            $('.slider__group').css("margin-left","-200%");
            $('.slider__carousel > div:nth-child(3)').attr("class","slider__carousel-item_active");
            sliderItem = 3;
            break;
        case 3: 
            $('.slider__group').css("margin-left","");
            $('.slider__carousel > div:nth-child(2)').attr("class","slider__carousel-item");
            $('.slider__carousel > div:nth-child(3)').attr("class","slider__carousel-item");
            sliderItem = 1;
            break;
        default: break;
    }
});