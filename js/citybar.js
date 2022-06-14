$(document).ready(function(){
	
  $(".ban_btn .ban_right").click(function(){
    $(".ban ul").stop().animate(
      {marginLeft:"-=255px"},1000,function(){
        $(".ban ul li:first-child").appendTo(".ban ul"); //첫번째 이미지 맨 뒤로 이동
        $(this).css({marginLeft:"0px"});
      }
    )

  });

  $(".ban_btn .ban_left").click(function(){

    $(".ban ul").stop().animate({marginLeft:"+=255px"},1000,function(){
      $(".ban ul li:last-child").prependTo(".ban ul");
      $(this).css({marginLeft:"0px"});
    });
  });
});