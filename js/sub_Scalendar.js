$(document).ready(function() {
    var scrollT;
    var timer = 0;
    $(window).on('scroll', function () {

        clearTimeout(timer);


        timer = setTimeout(function () {
            scrollT = $(this).scrollTop();

            $('#SC_subCnt01 .fade').each(function () {
                if (scrollT > $(this).offset().top - 597) $(this).addClass('on');
                else $(this).removeClass('on');
            });
        }, 100);

    });
  //move banner icon
  var $s_clder = $('#SC_subCnt01 a.s_ban');
  var banT = $s_clder.offset().top;
  var footT = $('#footer').offset().top;
  var banHei = $s_clder.outerHeight();     
  var maxT = footT - banHei;          

  $(window).on('scroll', function () {
      var scrollT = $(this).scrollTop()+94;
      if (scrollT < banT) $s_clder.css({position: 'absolute',top: 40});
      else if (scrollT < maxT) $s_clder.css({position: 'fixed',top: 130});
      else $s_clder.css({position: 'absolute',top: maxT});
  });

  
  $("#SC_subCnt01 .APP").on("click", function(){
      alert("신청되었습니다 :)");
  });


});