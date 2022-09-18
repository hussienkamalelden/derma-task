'use strict';

//Small
$(".size-small").click(function () {
    $("html").attr("data-font", "size-sm");
    localStorage.setItem("data-font", "size-sm");
});

//Medium
$(".size-medium").click(function () {
    $("html").attr("data-font", "size-md");
    localStorage.setItem("data-font", "size-md");
});

//Large
$(".size-large").click(function () {
    $("html").attr("data-font", "size-lg");
    localStorage.setItem("data-font", "size-lg");
});