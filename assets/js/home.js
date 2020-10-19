$(document).ready(function () {

    jcf.replaceAll();

    //Tabs
    $('#responsiveTabs').responsiveTabs({
        startCollapsed: 'tabs',
        active: 0
    });

    //More
    $('.text-overflow').readmore({
        moreLink: '<a href="#" class="more">Показать больше</a>',
        lessLink: '<a href="#" class="more">Показать больше</a>',
        speed: 500,
        collapsedHeight: 557,
        afterToggle: function (trigger, element, expanded) {
            if (!expanded) { // The "Close" link was clicked
                $('html, body').animate({
                    scrollTop: element.offset().top
                }, {
                    duration: 100
                });
            }
        }
    });

    //Подсказка
    $('.question').on('click', function () {
        $(this).next('.answer').toggleClass('active');
        $('.cloze-menu').on('click', function () {
            $('.answer').removeClass('active');
        })
    })

    //section-number

    function countup(className) {
        var countBlockTop = $("." + className).offset().top;
        var windowHeight = window.innerHeight;
        var show = true;

        $(window).scroll(function () {
            if (show && (countBlockTop < $(window).scrollTop() + windowHeight)) {
                show = false;

                $('.' + className).spincrement({
                    from: 1,
                });
            }
        })
    }


    $(function () {
        countup("count", $(".section-number.count").text());
        countup("count2", $(".section-number.count2").text());
    });

    //end

    //Section-causes
    var dots = $('.section-causes ul.slick-dots')
    var $status = $('.section-causes .pagingInfo');
    var $slickElement = $('.section-causes .list');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        if (!slick.$dots) {
            return;
        }

        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.html("<span>" + '0' + i + "</span>" + "<span>" + '0' + (slick.$dots[0].children.length) + "</span>");
    });

    if ($(window).width() < 1024) {
        $('.section-causes .list').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            speed: 600,
            arrows: true,
            infinite: true,
            fade: true,
            dots: true,
            cssEase: 'linear',
            adaptiveHeight: true,
            appendArrows: $('.section-causes .holder-btn'),
            prevArrow: '<button type="button" id="prev-1" class="btn-arrow prev"><i class="icon-back" aria-hidden="true"></i></button>',
            nextArrow: '<button type="button" id="next-1"class="btn-arrow next"><i class="icon-right" aria-hidden="true"></i></button>',
            responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    },
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesPerRow: 1,
                        rows: 2,
                    },
                },
            ]
        })

    }

    //end

    //Section-services
    slideControls = $(this).find('.pagingInfo');

    if ($(window).width() < 1600) {
        var dots2 = $('.section-services ul.slick-dots')
        var $status2 = $('.section-services .pagingInfo');
        var $slickElement2 = $('.section-services .list');

        $slickElement2.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
            if (!slick.$dots) {
                return;
            }

            var i = (currentSlide ? currentSlide : 0) + 1;
            $status2.html("<span>" + '0' + i + "</span>" + "<span>" + '0' + (slick.$dots[0].children.length) + "</span>");
        });

    }

    $('.section-services .list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 600,
        arrows: true,
        infinite: true,
        fade: true,
        dots: true,
        cssEase: 'linear',
        slidesPerRow: 4,
        rows: 1,
        // adaptiveHeight: true,
        appendDots: slideControls,
        dotsClass: 'custom-dots',
        appendArrows: $('.section-services .holder-btn'),
        prevArrow: '<button type="button" id="prev-2" class="btn-arrow prev"><i class="icon-back" aria-hidden="true"></i></button>',
        nextArrow: '<button type="button" id="next-2"class="btn-arrow next"><i class="icon-right" aria-hidden="true"></i></button>',
        customPaging: function (slider, i) {
            var slideNumber = (i + 1),
                totalSlides = slider.slideCount;
            return '<button class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></button>';
        },
        responsive: [{
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    adaptiveHeight: true,
                    slidesPerRow: 1,
                    rows: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 2,
                    rows: 1,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 2,
                    rows: 2,
                },
            },
        ]
    })

    //end

    //Section Partners

    var dots3 = $('.section-partners ul.slick-dots')
    var $status3 = $('.section-partners .pagingInfo');
    var $slickElement3 = $('.section-partners .list');

    $slickElement3.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        if (!slick.$dots) {
            return;
        }

        var i = (currentSlide ? currentSlide : 0) + 1;
        $status3.html("<span>" + '0' + i + "</span>" + "<span>" + '0' + (slick.$dots[0].children.length) + "</span>");
    });

    $('.section-partners .list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        slidesPerRow: 3,
        rows: 2,
        speed: 600,
        arrows: true,
        infinite: true,
        fade: true,
        dots: true,
        cssEase: 'linear',
        // adaptiveHeight: true,
        appendArrows: $('.section-partners .holder-btn'),
        prevArrow: '<button type="button" id="prev-3" class="btn-arrow prev"><i class="icon-back" aria-hidden="true"></i></button>',
        nextArrow: '<button type="button" id="next-3"class="btn-arrow next"><i class="icon-right" aria-hidden="true"></i></button>',
        responsive: [{
            breakpoint: 1280,
            settings: {
                slidesToShow: 1,
                slidesPerRow: 2,
                rows: 3,
            },
        }, ]
    })

    //end


});