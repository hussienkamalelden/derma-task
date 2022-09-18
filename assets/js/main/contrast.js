'use strict';

$(".contrast-icon").click(function () {
    if ($('html').hasClass('contrast')) {
        $('html').removeClass('contrast')
        localStorage.setItem("contrast", false);
    } else {
        $('html').addClass('contrast')
        localStorage.setItem("contrast", true);
    }
});