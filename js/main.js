function openCoin(id1,id2){
    document.getElementById(id1).style.display='none';
    document.getElementById(id2).style.display='block';
};
function hideCoin(id1,id2){
    document.getElementById(id1).style.display='block';
    document.getElementById(id2).style.display='none';
};

$(document).ready(function(){
    $('.my-slider').slick({
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        prevArrow: $('#prev'),
        nextArrow: $('#next'),
        responsive:[
            {
                breakpoint:1600,
                settings:{
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint:1200,
                settings:{
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint:900,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint:600,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

$(function(){
    $('a[href*=\\#]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 500);//скорость прокрутки
                return false;
            }
        }
    });
});