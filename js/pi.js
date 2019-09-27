$(document).ready(function() {
    var scrollT;
    var timer = 0;
    $(window).on("scroll", function () {

        clearTimeout(timer);
        timer = setTimeout(function () {
            scrollT = $(this).scrollTop();

            $(".ei_content li").each(function () {
                if (scrollT > $(this).offset().top-450) $(this).addClass("on");
                else $(this).removeClass("on");
            });
        }, 100);

    });
});