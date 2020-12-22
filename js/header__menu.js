$(".header__menu-title-item").click(handlerIn);

$(document).click(function() {
    if ((!$(".header__menu-title-item").is(":focus"))&&($(".body").width()>=1300)) handlerOut();
});

function handlerIn() {
    if ($(".body").width()>=1300) 
    {
        $(".header__container").css("align-items","center");
        $(".header__container").css("height","66px");
        $(".header__logo").css("background-image","url(./img/habat.svg)");
        $(".header__logo").css("width","71px");
        $(".header__logo").css("height","14px");
        $(".header__flag").css("visibility","hidden");
        $(".header__flag").css("opacity","0");
        $(".header__contacts").css("visibility","hidden");
        $(".header__request").css("bottom","0");
        $(".header__menu-title-item").css("align-self","flex-end");
        $(".header__menu-title-item").css("height","40px");
        $(".header__menu-item").css("display","flex");
        $(".header__menu-item").css("height","60px");
    }
}

function handlerOut() {
    $(".header__container").css("align-items","");
    $(".header__container").css("height","");
    $(".header__logo").css("background-image","");
    $(".header__logo").css("width","");
    $(".header__logo").css("height","");
    $(".header__flag").css("visibility","");
    $(".header__flag").css("opacity","");
    $(".header__contacts").css("visibility","");
    $(".header__request").css("bottom","");
    $(".header__menu-title-item").css("align-self","");
    $(".header__menu-title-item").css("height","");
    $(".header__menu-item").css("display","");
    $(".header__menu-item").css("height","");
}

/* mobile */
let openMenu = false;

$(window).resize(function() {
    if ($(".body").width()<1300) handlerOut();
});

$(".header__mobile-menu-btn").click(function() {
    if (!openMenu) {
        $(".header__mobile-menu-bg").css("visibility","visible");
        $(".header__mobile-menu-bg").css("opacity","1");
        $(".header__mobile-menu-btn .header__mobile-menu-line:first-child").css("transform","rotate(45deg)");
        $(".header__mobile-menu-btn .header__mobile-menu-line:nth-child(2)").css("transform","rotate(-45deg)");
        $(".header__mobile-menu-btn .header__mobile-menu-line:first-child").css("position","absolute");
        $(".header__mobile-menu-btn .header__mobile-menu-line:first-child").css("top","25.5px");
        $(".header__mobile-menu-btn .header__mobile-menu-line:nth-child(2)").css("position","absolute");
        $(".header__mobile-menu-btn .header__mobile-menu-line:nth-child(2)").css("top","26.5px");
        $(".header__mobile-menu-btn .header__mobile-menu-line:nth-child(3)").css("opacity","0");
        $(".header__menu").css("opacity","1");
        $(".header__menu").css("display","flex");
        $(".header__request").css("opacity","1");
        $(".header__request").css("display","flex");
        $(".header__contacts").css("opacity","1");
        $(".header__contacts").css("display","flex");
        openMenu = true;
    } else {
        $(".header__mobile-menu-bg").css("visibility","");
        $(".header__mobile-menu-bg").css("opacity","");
        $(".header__mobile-menu-btn .header__mobile-menu-line:first-child").css("transform","");
        $(".header__mobile-menu-btn .header__mobile-menu-line:nth-child(2)").css("transform","");
        $(".header__mobile-menu-btn .header__mobile-menu-line:first-child").css("position","");
        $(".header__mobile-menu-btn .header__mobile-menu-line:first-child").css("top","");
        $(".header__mobile-menu-btn .header__mobile-menu-line:nth-child(2)").css("position","");
        $(".header__mobile-menu-btn .header__mobile-menu-line:nth-child(2)").css("top","");
        $(".header__mobile-menu-btn .header__mobile-menu-line:nth-child(3)").css("opacity","");
        $(".header__menu").css("opacity","");
        $(".header__menu").css("display","");
        $(".header__request").css("opacity","");
        $(".header__request").css("display","");
        $(".header__contacts").css("opacity","");
        $(".header__contacts").css("display","");
        openMenu = false;
    }
});

