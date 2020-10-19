document.addEventListener("touchstart", function () {}, true);

$(document).ready(function () {

    //Меню

    $('.open-menu').on('click', function () {
        $('.menu-mobile').toggleClass('active');
    });

    $('.menu-mobile .menu-item').on('click', function () {
        $(this).children('.sub-menu').toggleClass('active');
    });

    $('.menu-item a').on('click', function () {
        if ($(this) !== $('.menu-item.menu-item-has-children a')) {
            $('.menu-mobile').removeClass('active');
        }
    });

    $('.cloze-menu').on('click', function () {
        $('.menu-mobile').removeClass('active');
        $('.answer').removeClass('active');
    })

    jQuery(function ($) {
        $(document).mouseup(function (e) {
            var div = $(".menu-mobile");
            if (!div.is(e.target) &&
                div.has(e.target).length === 0) {
                div.removeClass('active');
            }
        });
    });

    jQuery(function ($) {
        $(document).mouseup(function (e) {
            var div = $(".answer");
            if (!div.is(e.target) &&
                div.has(e.target).length === 0) {
                div.removeClass('active');
            }
        });
    });

    if ($(window).width() < 1280) {
        $('.header').addClass('mobile');
    }


    //Попапы
    jQuery(function (a) {
            a(document).mouseup(function (b) {
                var c = a(".modall-body");
                c.is(b.target) || 0 !== c.has(b.target).length || (c.removeClass("active-modall"),
                    a(".modall").removeClass("active-modall"),
                    a(".body").removeClass("showing-modal"))
            })
        }),

        $('.close, ok').on('click', function () {
            $(".modall").removeClass('active-modall');
            $('.body').removeClass('showing-modal');
        });

    $('.request').on('click', function () {
        $(".modall").removeClass('active-modall');
        $(".modall-request").addClass('active-modall');
        $('.body').addClass('showing-modal');
    });



    jQuery(".only_number").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });

    $(".phone_mask").mask("+7 (000) 000 00 00", {
        placeholder: ""
    })

});
