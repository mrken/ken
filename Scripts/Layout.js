$(function () {
    var $nav = $("#nav");
    var current = $(".current");
    $nav.find("a").hover(function () {
        $("#nav .nav-menu a").removeClass("current");
        $(this).addClass("current");
    }, function () {
        $("#nav .nav-menu a").removeClass("current");
        current.addClass("current");
    });
    var head = $(".head").height();
    var h = document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
    //document.getElementById("main").style.minHeight = h - head - 70 + "px";
    //var height = $(".body").height();
    //if (height < 672) {
    //    $(".body").height(672);
    //}
    $(".body").css("minHeight", h - head - 102 + "px");
});