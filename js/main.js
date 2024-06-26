$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 300) {
        $(".header").addClass("sticky");
        $(".logo").addClass("logo-show");
        $(".search-icons").addClass("icon-show");
        // $(".burger").addClass("bg-blue");
    } else {
        $(".header").removeClass("sticky");
        $(".logo").removeClass("logo-show");
        $(".search-icons").removeClass("icon-show");
        // $(".burger").removeClass("bg-blue");
    }
});



// function isIE() {
//     ua = navigator.userAgent;
//     /* MSIE used to detect old browsers and Trident used to newer ones*/
//     var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;

//     return is_ie;
// }
// /* Create an alert to show if the browser is IE or not */
// if (isIE()) {
//     $('body').addClass('internetExplorer');
// } else {
//     $('body').removeClass('internetExplorer');
// }


//viewport
// $.fn.isInViewport = function () {
//     var elementTop = $(this).offset().top + 10;
//     var elementBottom = elementTop + $(this).outerHeight();

//     var viewportTop = $(window).scrollTop();
//     var viewportBottom = viewportTop + $(window).height();

//     return elementBottom > viewportTop && elementTop < viewportBottom;
// };
// $(window).on('resize scroll', function () {

//     if ($('.blue-area').isInViewport()) {
//         // $(".inverse-heder").addClass("inverse");
//         $(".white-logo").removeClass("hide");
//         $(".white-search").removeClass("hide");
//         $(".blue-logo").addClass("hide");
//         $(".blue-search").addClass("hide");
//     } else {
//         // $(".inverse-heder").removeClass("inverse");
//         $(".white-logo").addClass("hide");
//         $(".white-search").addClass("hide");
//         $(".blue-logo").removeClass("hide");
//         $(".blue-search").removeClass("hide");
//     }
// });

$(document).ready(function () {

    if (window.matchMedia("(max-width: 767px)").matches) {
        
        $(".hamburger").click(function () {
            $(".hamburger").toggleClass("active");
            $(".navigation").toggleClass("active");
            $(".dropdown_nav").removeClass("active");
        });

        // $('.m_nav').click(function () {
        //     $(this).toggleClass("rotateArrow");
        //     $(this).next().toggleClass("active");
        // });

        $('.back_btn').click(function () {
            $(".dropdown_nav").removeClass("active");
        });

        $('header .navigation nav ul li .dropdown_nav .sub_nav h3').click(function () {
            $(this).next().slideToggle();
            $(this).toggleClass("arrowRotate");
        });

        $('.search_icon').click(function () {
            $(".search_container").toggle();
        });

        $(".team").addClass("owl-carousel");
        $(".team .col-sm-3").addClass("item");
        $('.team').owlCarousel({
            items: 1,
            margin: 0,
            navigation: true,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: false,
            pagination: true,
            loop:true
        })
        

        $(".features").addClass("owl-carousel");
        $(".features .col-sm-3").addClass("item");
        $('.features').owlCarousel({
            items: 1,
            margin: 0,
            navigation: true,
            nav: false,
            dots: true,
            autoplay: false,
            autoplayHoverPause: true,
            autoHeight:true,
            pagination: true
        })


        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 250) {
                $(".header").addClass("sticky");
                $(".logo").addClass("logo-show");
                $(".search-icons").addClass("icon-show");
                // $(".burger").addClass("bg-blue");
            } else {
                $(".header").removeClass("sticky");
                $(".logo").removeClass("logo-show");
                $(".search-icons").removeClass("icon-show");
                // $(".burger").removeClass("bg-blue");
            }
        });


    }


    

    $('.search_icon a').click(function () {
        $(".search_container").toggle();
    });   

    $('.burger, .overlay').click(function () {
        $('.burger').toggleClass('clicked');
        $('.overlay').toggleClass('show');
        $('nav').toggleClass('show');
        $('body').toggleClass('overflow');
        $('body').toggleClass('hidden-scroll');
        // $("body").css({ "overflow-y": "hidden" });
        // enableScroll();
    });

    $('.m_nav').click(function () {
        $(this).toggleClass("rotateArrow");
        $(this).next().toggleClass("active");
        
    });
    
});

$('#services-slider').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    margin: 0,
    navText: ['', ''],
    autoplay: true,
    responsive: {
        0: {
            items: 2,
            dots: true
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});
$('#testimonial').owlCarousel({
    loop: false,
    nav: false,
    dots: true,
    margin: 0,
    navText: ['', ''],
    autoplay: false,
    singleItem: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
$('.csr').owlCarousel({
    loop: false,
    nav: false,
    dots: true,
    margin: 0,
    navText: ['', ''],
    autoplay: false,
    singleItem: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
$('.calendar').owlCarousel({
    loop: false,
    nav: false,
    dots: true,
    margin: 10,
    navText: ['', ''],
    autoplay: false,
    singleItem: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});

$('.owl-item.active').click(function () {
    $(".banner .banner-item h1").addClass("fadeInDown");
});
 
$('.notification-icon').click(function () {
    $(".popup").show();
}); 
setTimeout(function () {
    $('.notification-div .popup').fadeOut('fast');
}, 5000);
$('.close').click(function () {
    $(".popup").hide();
}); 

//Input Fields
(function () {
    $('.input_container')
        .find('.floatlabel')
        .each(function () {
            $(this).on('blur', function () {
                $this = $(this);
                if (this.value !== "") {
                    $this.addClass('filled');
                }
                else {
                    $this.removeClass('filled');
                }
            });
        });
})();

$('.btn01').click(function () {
    $(this).hide();
    $(".open-logo-01").toggle(1000);
});
$('.btn02').click(function () {
    $(this).hide();
    $(".open-logo-02").toggle(1000);
});
$('.btn03').click(function () {
    $(this).hide();
    $(".open-logo-03").toggle(1000);
});
$('.btn04').click(function () {
    $(this).hide();
    $(".open-logo-04").toggle(1000);
});
$('.btn05').click(function () {
    $(this).hide();
    $(".open-logo-05").toggle(1000);
});
$('.btn06').click(function () {
    $(this).hide();
    $(".open-logo-06").toggle(1000);
});
$('.btn07').click(function () {
    $(this).hide();
    $(".open-logo-07").toggle(1000);
});
$('.btn08').click(function () {
    $(this).hide();
    $(".open-logo-08").toggle(1000);
});
$('.btn09').click(function () {
    $(this).hide();
    $(".open-logo-09").toggle(1000);
});
$('.btn10').click(function () {
    $(this).hide();
    $(".open-logo-10").toggle(1000);
});


$('.home-banner').owlCarousel({
    items: 1,
    margin: 0,
    navigation: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
    // autoplayHoverPause: true,
    pagination: false,
    loop: true
});



// banner text
// values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.
var i = 0,
    a = 0,
    isBackspacing = false,
    isParagraph = false;

// Typerwrite text content. Use a pipe to indicate the start of the second line "|".  
var textArray = [
    // "The network that powers the aspiration of a billion people",
    "A Reserve Bank of India Subsidiary",
    "Strengthening India's Critical Infrastructure Services",
    "The network that powers the aspiration of a billion people",
    "Fueling Innovation, Financial Inclusion and Digitization for banks and financial institutions",
];

// Speed (in milliseconds) of typing.
var speedForward = 40, //Typing Speed
    speedWait = 1000, // Wait between typing and backspacing
    speedBetweenLines = 1000, //Wait between first and second lines
    speedBackspace = 15; //Backspace Speed

//Run the loop
typeWriter("output", textArray);

function typeWriter(id, ar) {
    var element = $("#" + id),
        aString = ar[a],
        eHeader = element.children("h1"), //Header element
        eParagraph = element.children("p"); //Subheader element

    // Determine if animation should be typing or backspacing
    if (!isBackspacing) {

        // If full string hasn't yet been typed out, continue typing
        if (i < aString.length) {

            // If character about to be typed is a pipe, switch to second line and continue.
            if (aString.charAt(i) == "|") {
                isParagraph = true;
                eHeader.removeClass("cursor");
                eParagraph.addClass("cursor");
                i++;
                setTimeout(function () { typeWriter(id, ar); }, speedBetweenLines);

                // If character isn't a pipe, continue typing.
            } else {
                // Type header or subheader depending on whether pipe has been detected
                if (!isParagraph) {
                    eHeader.text(eHeader.text() + aString.charAt(i));
                } else {
                    eParagraph.text(eParagraph.text() + aString.charAt(i));
                }
                i++;
                setTimeout(function () { typeWriter(id, ar); }, speedForward);
            }

            // If full string has been typed, switch to backspace mode.
        } else if (i == aString.length) {

            isBackspacing = true;
            setTimeout(function () { typeWriter(id, ar); }, speedWait);

        }

        // If backspacing is enabled
    } else {

        // If either the header or the paragraph still has text, continue backspacing
        if (eHeader.text().length > 0 || eParagraph.text().length > 0) {

            // If paragraph still has text, continue erasing, otherwise switch to the header.
            if (eParagraph.text().length > 0) {
                eParagraph.text(eParagraph.text().substring(0, eParagraph.text().length - 1));
            } else if (eHeader.text().length > 0) {
                eParagraph.removeClass("cursor");
                eHeader.addClass("cursor");
                eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
            }
            setTimeout(function () { typeWriter(id, ar); }, speedBackspace);

            // If neither head or paragraph still has text, switch to next quote in array and start typing.
        } else {

            isBackspacing = false;
            i = 0;
            isParagraph = false;
            a = (a + 1) % ar.length; //Moves to next position in array, always looping back to 0
            setTimeout(function () { typeWriter(id, ar); }, 50);

        }
    }
}





// chart

// new Chart(document.getElementById("myGraphLineNEFT"), {
//     "type": "line",
//     "data": {
//         labels: ["Mar 20", "Apr 20", "May 20", "Jun 20", "Jul 20", "Aug 20"],
//         "datasets": [{
//             "label": "NEFT Volume (in Cr)",
//             "data": [26.24, 17.60, 19.29, 22.74, 24.01, 23.46],
//             "fill": false,
//             "borderColor": "#22346e",
//             "lineTension": 0.1
//         },
//         {
//             "label": "NEFT Value (in Cr)",
//             "data": [22.83, 13.06, 14.81, 19.06, 19.63, 19.30],
//             "fill": false,
//             "borderColor": "#f6d70a",
//             "lineTension": 0.1
//         }]
//     },
//     "options": {
//         labels: {
//             padding: {
//                 left: 0,
//                 right: 0,
//                 top: 0,
//                 bottom: 20
//             }
//         }
//     }
// });

// new Chart(document.getElementById("myGraphLineRTGS"), {
//     "type": "line",
//     "data": {
//         labels: ["Mar 20", "Apr 20", "May 20", "Jun 20", "Jul 20", "Aug 20"],
//         "datasets": [
//         {
//             "label": "RTGS Volume (in Cr)",
//             "data": [1.19, 0.54, 0.90, 1.20, 1.25, 1.17],
//             "fill": false,
//             "borderColor": "#14EF14",
//             "lineTension": 0.1
//         },
//         {
//             "label": "RTGS Value (in Cr)",
//             "data": [120.47, 64.43, 70.41, 86.51, 83.35, 72.92],
//             "fill": false,
//             "borderColor": "#FB210F",
//             "lineTension": 0.1
//         }]
//     },
//     "options": {
//         labels: {
//             padding: {
//                 left: 0,
//                 right: 0,
//                 top: 0,
//                 bottom: 20
//             }
//         }
//     }
// });



// function isScrolledIntoView(elem) {
//     var docViewTop = $(window).scrollTop();
//     var docViewBottom = docViewTop + $(window).height();

//     var elemTop = $(elem).offset().top;
//     var elemBottom = elemTop + $(elem).height();

//     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }

// $(window).scroll(function () {
//     $('.blue-area').each(function () {
//         if (isScrolledIntoView(this) === true) {
//             $(".white-logo").hide();
//             $(".blue-logo").show();
//         }
//     });

// });

