$(function () {

	var prevScroll = 0;


	localStorage.setItem("id", 11);

	function init () {

		console.log("init");

		$(window).on("scroll",function () {

			console.log("scroll");

			var top = $(window).scrollTop();

			if(prevScroll+50 < top){

				$("header#main_head").addClass("close");
				$("footer nav").addClass("close");

				prevScroll = top;

			}

			if(prevScroll-20 > top){

				$("header#main_head").removeClass("close");
				$("footer nav").removeClass("close");

				//prevScroll = top;

			}	

		});

		$("achievement_container .close").on("click",function  (e) {
			e.preventDefault();
			console.log("close");

			if($(".achievement_container").hasClass("open")){
				$(".achievement_container").removeClass("open");
			}else{
				$(".achievement_container").addClass("open");
			}
		});


		$(document).on("scrollstop",function(){

			console.log("scroll stopped");
			var top = $(window).scrollTop();

			prevScroll = top;

		});

	}	
	function toggleAchievements () {
		// body...
	}

	init();
});