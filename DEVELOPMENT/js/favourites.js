$(function () {

    function init() {

        var loggedIn = localStorage.getItem('loggedIn');
        if (loggedIn) {

            var user = JSON.parse(localStorage.getItem('user'));

            var url = "http://rachouanrejeb.be/sosjobs/api/favourites/" + user.id;
            $.ajax({
                url: url
            }).done(function (data) {
                console.log(data);
                $(data).each(function (key, val) {
                    var htmlString = "";

                    console.log(val.id);

                    htmlString += '<header class="color' + val.color_code + '"><a href="" class="info" id="' + val.id + '">';
                    htmlString += '<img src="https://d13yacurqjgara.cloudfront.net/users/180760/avatars/normal/TEC---Dribble-Avatar-Red-01.png">';
                    htmlString += '<div><h1>' + val.title + '</h1><h2>' + val.location + '</h2></div><span class="detail"></span>';
                    htmlString += '</a></header>';
                    htmlString += '<aside><header class="hide"><h1>vacancie options</h1></header>';
                    htmlString += '<nav><header class="hide"><h1>vacancie navigation</h1></header>';
                    htmlString += '<ul><li class="message"><span class="hide">message</span></li><li class="share"><span class="hide">share</span></li><li><span>APPLY</span></li><li class="delete" id="' + val.id + '"><span class="hide">delete</span></li></ul>';
                    htmlString += ' </nav> </aside>';

                    var newSection = $('<section/>').html(htmlString).addClass("animated fadeInUp");

                    $("article.feed").append(newSection);
                });

                $(".preloader").addClass("animated fadeOut");
                                        setTimeout(function  () {
                                                $(".preloader").removeClass("animated fadeOut");
                                                $(".preloader").addClass("hide");
                                        }, 1000);

                                        $('.delete').on("click",function () {
                                            var id = $(this).attr("id");

                                            $.ajax(
                                            {
                                                url : "http://rachouanrejeb.be/sosjobs/api/deleteFavourite/"+id,
                                                type: "GET",
                                                success:function(data, textStatus, jqXHR) 
                                                {
                                                    console.log(data);

                                            
                                                },
                                                error: function(jqXHR, textStatus, errorThrown) 
                                                {
                                                    console.log(textStatus);  
                                                }
                                            });
                                        });
            });
        } else {
            window.location.replace("login.html");
        }


    }
    init();
});