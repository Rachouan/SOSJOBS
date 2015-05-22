$(function  () {

	function init () {

		$("article section .info").on("click",function (e) {

			e.preventDefault();

			console.log("clicked");

			var currentId = $(this).attr("id");
			
			showDetail(currentId);
			
		});

		$(".detail header h1 .back").on("click",function () {
			$(".detail").addClass("close");

		});
	}

	init();

	function showDetail (id) {

		console.log(id);

		$(".detail").removeClass("close");
		
	}

});