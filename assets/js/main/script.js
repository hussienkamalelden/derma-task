'use strict';

////////////////Start Scroll to top////////////////
//Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {

    //Script for button move to top .. 
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
////////////////End Scroll to top////////////////

////////////////Start Close Nav In Responsive////////////////
$(function () {
    var navMain = $(".navbar-collapse");
    navMain.on("click", "a:not(.dropdown-toggle)", null, function () {
        navMain.collapse('hide');
    });
});
////////////////End Close Nav In Responsive////////////////


////////////////Start Get Video Duration And Pause Video////////////////
var vid = document.getElementById("myVideo"),
    vidtext = document.querySelector(".video-duration"),
    minutes = parseInt(vid.duration / 60, 10),
    seconds = vid.duration % 60;

vidtext.innerHTML = `Duration:  ${minutes}:${Math.floor(seconds)}`;

$('#openVideo').on('hidden.bs.modal', function (e) {
    vid.pause();
})
////////////////End Get Video Duration And Pause Video////////////////