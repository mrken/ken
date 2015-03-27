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
	resize();
    var h = document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
    //document.getElementById("main").style.minHeight = h - head - 70 + "px";
    //var height = $(".body").height();
    //if (height < 672) {
    //    $(".body").height(672);
    //}
    $(".body").css("minHeight", h - head - 102 + "px");
});

	window.onresize = resize;
function resize(){
	var width = $(".main").width();
	var w = document.documentElement.clientWidth;
	if(w>width)
	{
		var persent = (w-width)/2/w*100;
		$(".main").css("margin-left",persent+"%");
	}
    var head = $(".head").height();
}