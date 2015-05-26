$(function  () {


	function init () {
		
		var user = JSON.parse(localStorage.getItem("user"));

		console.log($(user).length);

		if($(user).length > 0){

			$('.profile header').addClass("color"+user.color_code);
			$('.profile header h1 span.naam').text(user.name+" "+user.last_name);
			$('.profile header h2.studie').text(user.field_of_study);
			$('.profile header p.locatie').text(user.town+", "+user.country);

			$('.profile aside .info').text(user.about);

		}
	}


	init();
});