(function ($) {
    $(function () {
    });
    $(document).ready(function () {
        $(this).initMap();
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
$.fn.initMap = function () {
    var mapId = 'map';
    var mapObj = $('#' + mapId);
    var mapWidth = mapObj.closest('.map-area').outerWidth();
    var latitude = mapObj.data('latitude');
    var longitude = mapObj.data('longitude');
    var mapAddress = mapObj.data('address');
    var mapHeight = 240;
    var oMap = new naver.maps.Map('map', {
        size: new naver.maps.Size(mapWidth, mapHeight),
        zoom: 15,
        minZoom: 8,
        scrollWheel: false,
        logoControl: false,
        scaleControl: false,
        mapDataControl: false,
        draggable: false,
        pinchZoom: false,
    });
    naver.maps.Service.geocode({ address: mapAddress }, function (status, response) {
        if (status === naver.maps.Service.Status.ERROR) {
            return alert('Something Wrong!');
        }
        var item = response.result.items[0];
        var setLongitude = longitude ? longitude : item.point.x
        var setLatitude = latitude ? latitude : item.point.y
        var point = new naver.maps.Point(setLongitude, setLatitude);
        oMap.setCenter(point);
        var marker = new naver.maps.Marker({
            position: point,
            map: oMap,
            draggable: false,
        });
    });
}
