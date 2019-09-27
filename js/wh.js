$(document).ready(function() {
    var scrollT;
    var timer = 0;
    $(window).on('scroll', function () {

        clearTimeout(timer);


        timer = setTimeout(function () {
            scrollT = $(this).scrollTop();

            $('#Week_content .fade').each(function () {
                if (scrollT > $(this).offset().top - 597) $(this).addClass('on');
                else $(this).removeClass('on');
            });
        }, 100);
        console.log(timer);

    });
});