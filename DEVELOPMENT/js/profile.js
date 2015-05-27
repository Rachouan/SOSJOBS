$(function  () {


	function init () {
		
		var user = JSON.parse(localStorage.getItem("user"));

		console.log($(user).length);

		if($(user).length > 0){

			$('.profile header').addClass("color"+user.color_code);
			$('.profile header h1 span.naam').text(user.name+" "+user.last_name);
			$('.profile header h2.studie').text(user.field_of_study);
			$('.profile header p .locatie').text(user.town+", "+user.country);

			$('.profile aside .info').text(user.about);
			$('.profile aside nav ul li.number a').attr("href","mailto:"+user.phone);
			$('.profile aside nav ul li.mail a').attr("href","mailto:"+user.email);

			var url = "http://rachouanrejeb.be/sosjobs/api/achievements/" + user.id;
            $.ajax({
                url: url
            }).done(function (data) {


                var htmlstring = "";
                $(data).each(function (key, val) {

                	console.log(val);
                	var unlocked = parseInt(val.unlocked);
                	var image = val.name.toLowerCase()+"-locked.svg";
                	if(unlocked == 1){
                		image = val.name.toLowerCase()+"-unlocked.svg";
                	}
                	htmlstring += "<li><img src='pics/Achievements/"+image+"' alt='"+val.name+"'><h1>"+val.name+"</h1></li>"

                });

            	$(".achievements_profile section ul").html(htmlstring);

            	$(".achievement_ico").on('click',function  () {

            		$(".achievements_profile").addClass("open");
            		$(".achievements_profile .back").on("click",function  () {
            			$(".achievements_profile").removeClass("open");
            		});

            	});
            });

		}

	}


	init();
});