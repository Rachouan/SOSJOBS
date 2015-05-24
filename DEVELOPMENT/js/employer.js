$(function (){

	currentPage = 0;

	function init () {
			
		console.log("init employer");

		$(window).on("keyup",function  (e) {
			console.log(e.keyCode);
			switch(e.keyCode){
				case 39:
					nextPackage();
				break;

				case 37:
					prevPackage();
				break;
			}
		});

	}

	init();

	function nextPackage () {

		currentPage++;

		if(currentPage > 2){
			currentPage = 0;
		}
		setPackage();
	}

	function prevPackage () {
		currentPage--;
		if(currentPage < 0){
			currentPage = 2;
		}

		setPackage();
	}

	function setPackage () {



		var mainWidth = $(".packages").width()/3.2;
		console.log(mainWidth*currentPage);
		$(".packages").css("left","-"+mainWidth*currentPage+"px");
	}

});