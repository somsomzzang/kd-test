/*******************custom.js********************************************** */


/*///////////header////////////*/
$(window).scroll(function () {
    var winTop = $(window).scrollTop();
    console.log('scrollTop: ' + winTop);

    if (winTop > 80) {
        $('header').addClass('active');
        $('.up').show();
    } else {
        $('header').removeClass('active');
        $('.up').hide();
    }
    /*////////playlist text//////////*/
    if (winTop > 1760) {
        $('.pic-wrap >div img').animate({
            top: '0',
            opacity: '1'
        }, 500, 'linear');
    }

}); //scroll()
/*/////////up버튼 클릭//////////*/
$(function(){
    $('.up').click(function() {
        $('html, body').animate({scrollTop : 0}, 400);
        return false;
      });
});
/*/////////서브메뉴 슬라이드 다운//////////*/
$(function(){
    $('.gnb > li:first, .gnb > li:nth-child(2)').on({
        'mouseenter': function(){
            $('header').addClass('active');
            $(this).find('ul').stop().slideDown();
            $(this).css('border-bottom','1px solid #333')
        },
        'mouseleave' : function(){
            $(this).find('ul').stop().slideUp();
            $('header').removeClass('active');
            $(this).css('border-bottom','none')
        }
    });
});

/*/////////main슬라이드 텍스트//////////*/
$(function(){
    $('.slide-tit').removeClass('active');
    $('.swiper-slide-active .slide-tit').addClass('active');
});


/*/////////insta 슬라이드//////////*/
$(document).ready(function () {

    var slider = $('.slide');
    console.log(slider);

    $('.slide > li:last').insertBefore($('.slide > li:first'));
    slider.css('margin-left', '-100%');

    function moveAfter() {
        slider.animate({
            marginLeft: '-200%'
        }, 500, function () {
            $('.slide > li:first').insertAfter($('.slide > li:last'));
            slider.css('margin-left', '-100%');
        });
    }
    function autoplay() {
        setInterval(moveAfter, 5000);
    }
    autoplay();
});

/*/////////what's 클릭하면 이미지 바꾸기/////////*/
window.onload = function () {
    var test = document.getElementsByClassName('choo-btn');
    //console.log(test);
    var chgImg = [
        'images/curlfix2023_black.png',
        'images/curlfix2023_brown.png',
        'images/curlfix2023_graybrown.png',
        'images/heartpop_01sqeezeberry.png',
        'images/heartpop_02supersunset.png',
        'images/heartpop_03borntobechic.png',
        'images/playcoloreyes2023_cool.png',
        'images/playcoloreyes2023_warm.png',
        'images/glowfixing_tint_01purecoral.png',
        'images/glowfixing_tint_02mellowpink.png',
        'images/glowfixing_tint_03dewyfig.png',
        'images/glowfixing_tint_04chillingred.png',
        'images/glowfixing_tint_05mauvement.png',
        'images/fixeyes1.png',
        'images/fixeyes2.png',
        'images/fixeyes3.png'
    ];
    //console.log(chgImg);

    for (var i = 0; i < chgImg.length; i++) {
        (function (num) {
            test[num].addEventListener('click', function () {
                var newTop = this.closest('.newbox').querySelector('.newtop');
                var nImg = newTop.querySelector('a > img');
                //nImg.src = chgImg[num];
                newTop.classList.toggle('active');

                if (newTop.classList.contains('active')) {
                    nImg.src = chgImg[num];
                    this.classList.add('choose');
                } else {
                    var newBox = this.closest('.newbox');
                    var newBoxIndex = Array.from(document.querySelectorAll('.newbox')).indexOf(newBox);
                    console.log("뉴박스" + newBoxIndex);
                    nImg.src = 'images/new' + (newBoxIndex + 1) + '.jpg';
                    this.classList.remove('choose');
                }
            });
        })(i);
    }
};