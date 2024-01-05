(function ($) {
    $(function () {
    });
    $(document).ready(function () {
        $(this).initSwiper();
        $(this).initKakao();
        $(this).resizeFrame();
        $(window).resize(function () {
            $(this).resizeFrame();
        });
    });
})($);

$.fn.initKakao = function () {
    var shareObj = $('#kakao-share');
    Kakao.init('3171be89801ae0b8c6f1665e20401960');
    Kakao.Link.createDefaultButton({
        container: '#kakao-share',
        objectType: 'feed',
        content: {
            title: shareObj.data('title'),
            description: shareObj.data('description'),
            imageUrl: shareObj.data('thumbnail'),
            link: {
                mobileWebUrl: shareObj.data('url'),
                webUrl: shareObj.data('url')
            }
        }
    });
}
$.fn.resizeFrame = function () {
    $('.swiper-frame').css('width', $('.swiper-slide-active').css('width'));
    $('.swiper-frame').css('height', $('.swiper-slide-active').find('img').css('height'));
}
$.fn.initSwiper = function () {
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

