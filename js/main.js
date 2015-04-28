/* Main JS */

/* global blueimp, $ */
$(function () {
    'use strict';

    // Image Gallery on xs
    $('#image-gallery-button').on('click', function (event) {
        event.preventDefault();
        blueimp.Gallery($('#links a'), $('#blueimp-gallery').data());
    });

    // Initialize the Gallery as video carousel and get vidoes:
    blueimp.Gallery([
        {
            title: 'Fallout: End Of The World Remix ',
            href: 'https://www.youtube.com/watch?v=f31n4s8SKzA',
            type: 'text/html',
            youtube: 'f31n4s8SKzA',
            poster: 'img/video/f31n4s8SKzA.jpg'
        },
        {
            title: 'Fallout: What A Wonderful World',
            href: 'https://www.youtube.com/watch?v=S2WJkdmPAY8',
            type: 'text/html',
            youtube: 'S2WJkdmPAY8',
            poster: 'img/video/S2WJkdmPAY8.jpg'
        },
        {
            title: 'Battlfield 3: Heart of Courage',
            href: 'https://www.youtube.com/watch?v=M_yg1mezF3w',
            type: 'text/html',
            youtube: 'M_yg1mezF3w',
            poster: 'img/video/M_yg1mezF3w.jpg'
        },
        {
            title: 'Fallout: Home on the Wastes',
            href: 'https://www.youtube.com/watch?v=i9cnDmdPXDk',
            type: 'text/html',
            youtube: 'i9cnDmdPXDk',
            poster: 'img/video/i9cnDmdPXDk.jpg'
        },
        {
            title: 'Halo: Deliver Hope Remix',
            href: 'https://www.youtube.com/watch?v=x1ot0oaG_yg',
            type: 'text/html',
            youtube: 'x1ot0oaG_yg',
            poster: 'img/video/x1ot0oaG_yg.jpg'
        },
        {
            title: 'Halo: Reach Mad World ',
            href: 'https://www.youtube.com/watch?v=lsh-HH-0ezo',
            type: 'text/html',
            youtube: 'lsh-HH-0ezo',
            poster: 'img/video/lsh-HH-0ezo.jpg'
        },
        {
            title: 'Halo: Fortunate Son',
            href: 'https://www.youtube.com/watch?v=DRWjDcwVwN4',
            type: 'text/html',
            youtube: 'DRWjDcwVwN4',
            poster: 'img/video/DRWjDcwVwN4.jpg'
        }


    ], {
        container: '#blueimp-video-carousel',
        carousel: true,
        youTubeClickToPlay: false,
        transitionSpeed: 800
    });

});

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

