$(function  () {

	function init () {


		$.ajax({
		  url: "http://rachouanrejeb.be/sosjobs/api/vacancies/",
		  context: document.body
		}).done(function(data) {

			console.log("done");
			console.log(data);

			$(data).each(function  (key,val) {

				var htmlString = "";

				htmlString += '<header class="color'+val.color_code+'"><a href="" class="info" id="'+val.id+'">';
				htmlString += '<img src="https://d13yacurqjgara.cloudfront.net/users/180760/avatars/normal/TEC---Dribble-Avatar-Red-01.png">';
				htmlString += '<div><h1>'+val.title+'</h1><h2>'+val.location+'</h2></div><span class="detail"></span>';
				htmlString += '</a></header>';
				htmlString += '<aside><header class="hide"><h1>vacancie options</h1></header>';
				htmlString += '<nav><header class="hide"><h1>vacancie navigation</h1></header>';
				htmlString += '<ul><li class="fav"><span class="hide">favorite</span></li><li class="share"><span class="hide">>share</span></li><li><span>APPLY</span></li><li class="delete"><span class="hide">>delete</span></li></ul>';
				htmlString += ' </nav> </aside>';

				var newSection = $('<section/>').html(htmlString);

				$("article.feed").append(newSection);
			});

			$("article section .info").on("click",function (e) {

				e.preventDefault();

				console.log("clicked");

				var currentId = $(this).attr("id");
				
				showDetail(currentId);
				
			});

			$(".detail header h1 .back").on("click",function () {
				$(".detail").addClass("close");

				$("meta[name='theme-color']").attr("content","#F9EACD");
			});

			/*$(".detail header .job").text(data.title);
			$(".detail header .jobinfo .locatie").text(data.location);
			$(".detail header .jobinfo .soort").text(data.category);
			$(".detail aside .info").text(data.description);*/


		});
	}

	init();

	function showDetail (id) {

		console.log(id);
		var url = "http://rachouanrejeb.be/sosjobs/api/vacancies/"+id;

		$.ajax({
		  url: url,
		  context: document.body
		}).done(function(data) {

			console.log("done");
			console.log(data.title);

			$(".detail header .job").text(data.title);
			$(".detail header .jobinfo .locatie").text(data.location);
			$(".detail header .jobinfo .soort").text(data.category);
			$(".detail aside .info").text(data.description);

		  $(".detail").removeClass("close");

		});

		

		$("meta[name='theme-color']").attr("content","#44474D");
	}

});