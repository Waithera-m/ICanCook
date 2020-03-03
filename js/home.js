$(document).ready(function () {
    $("#carouselHome").carousel();

    $(".corousel-control-prev").click(function () {
        $("#carouselHome").carousel("prev")
    });
    $(".corousel-control-next").click(function () {
        $("#carouselHome").carousel("next")
    });
    $(".imageOne").click(function () {
        $("#carouselHome").carousel(0);
    });
    $(".imageTwo").click(function () {
        $("#carouselHome").carousel(1);
    });
    $(".imageThree").click(function () {
        $("#carouselHome").carousel(2);
    });
    $(".imageFour").click(function () {
        $("#carouselHome").carousel(3);
    });
});




