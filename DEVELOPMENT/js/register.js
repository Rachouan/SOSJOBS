$(function () {

    function init() {

        $('article div.slider_container').on('click', function () {

            if ($(this).find('.slider').hasClass('on')) {
                $(this).find('.slider').removeClass('on');

                $('article form .gender').val('V');

            } else {
                $('article form .gender').val('M');
                $(this).find('.slider').addClass('on');
            }

        });

    }

    init();

});

$(function () {
    $("#accordion").accordion({
        collapsible: true
    });
});