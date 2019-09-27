$(document).ready(function() {
     //nb click
     $(".nb_content ul li").on("click", function(){

        $(this).siblings().removeClass("on").find(".hidden_box").stop().animate({left: "0"}, 1000, "easeInOutQuad");

       if($(this).hasClass("on")){
            $(this).find("button").eq(1).slideUp(200).prev().slideDown(800);
           if($(this).hasClass("right")) $(this).removeClass("on").find(".hidden_box").stop().animate({left: "0"}, 1000, "easeInOutQuad");
           else $(this).removeClass("on").find(".hidden_box").stop().animate({left: "0"}, 1000);
       } else {
            $(this).find("button").eq(0).slideUp(200).next().slideDown(800);
            if($(this).hasClass("right")) {
                $(this).addClass("on").css({zIndex: 20}).find(".hidden_box").css({zIndex: 10}).stop().animate({left: "-100%"}, 1000, "easeInOutQuad").parent().siblings().css({zIndex: 1});
            }
            else {
                $(this).addClass("on").css({zIndex: 20}).find(".hidden_box").css({zIndex: 10}).stop().animate({left: "100%"}, 1000, "easeInOutQuad").parent().siblings().css({zIndex: 1});
            }
       }
    });

    //img hover effect
    $(".nb_content ul li").on({
        mouseenter: function(){
            $(this).addClass("over");
        },
        mouseleave: function(){
            $(this).removeClass("over");
        }

    });

    //read more hover,focus
    $(".nb_content ul li button").on({
        "mouseenter focus": function(){
            $(this).animate({letterSpacing: 2, fontWeight: 700});
        },
        "mouseleave blur": function(){
            $(this).animate({letterSpacing: 0, fontWeight: 400});
        }

    });

});