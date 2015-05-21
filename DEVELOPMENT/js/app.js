$(function () {

	var prevScroll = 0;

	function init () {

		console.log("init");

		$(window).on("scroll",function () {

			console.log("scroll");
			$("header#main_head").addClass("close");

		});

	}	

	init();
});