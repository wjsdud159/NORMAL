$(document).ready(function(){

    /* header hover effect, active */
    $("#header nav ul li").on({
        "mouseenter focusin": function(){
            if($("#header").hasClass("bg")){
                $(this).stop().animate({fontSize: 22, color: "#000"}).addClass("on").siblings().addClass("off");
            }
            $(this).stop().animate({fontSize: 22, color: "#f0f0f0"}).addClass("on").siblings().stop().animate({fontSize: 18, color: "#555"});
        },
        "mouseleave focusout": function(){
            if($("#header").hasClass("bg")){
                $(this).stop().animate({fontSize: 18}).removeClass("on").siblings().removeClass("off");
            }
            $(this).stop().animate({fontSize: 18}).removeClass("on").siblings().stop().animate({color: "#f0f0f0"});
        }
    });


    //scroll evnet
    var scrollT;
    var timer = 0;

    $(window).on("scroll", function(){
        timer = setTimeout(function(){
            clearTimeout(timer);

            scrollT = $(this).scrollTop();

            /* totop opacity */
            if(scrollT > 200) $(".move_top").addClass("view");
            else $(".move_top").removeClass("view");

        },10);

    });

    /* totop move */
    $(".move_top").on("click", function(){
        $("html, body").stop().animate({scrollTop: 0}, 500);
        return false;
    });


    $("#follow div").each(function(idx){
        $(this).css({width: 3*(idx*0.6+1), height: 3*(idx*0.6+1), opacity: 0.1*(idx*0.3)});
    });

    $(document).on("mousemove", function(e){
        var mouseX = e.pageX;
        var mouseY = e.pageY;

        $("#follow div").each(function(idx){
            $(this).stop(true, false).delay(40*(idx+1)).animate({top: mouseY + 50, left: mouseX + 25}, 900, "easeOutQuart");
        });
    });

});