$(document).ready(function () {

  //top_btn
  $(window).scroll(function(){
    $("#txt1").text($(this).scrollTop());
  });
  $(".top_btn").hide()
  $(window).scroll(function(){
    if($(this).scrollTop()>1200){
      $(".top_btn").fadeIn();
    }else{
      $(".top_btn").fadeOut();
    }
  });



  //ko & footer slide
  $(".allmenu>ul>li").hover(function () {
    $(this).find(">ul").stop().slideDown();
  }, function () {
    $(this).find(">ul").stop().slideUp();
  });


  $(".fo>ul>li").hover(function () {
    $(this).find(">ul").stop().slideDown();
  }, function () {
    $(this).find(">ul").stop().slideUp();
  });

  //main slide
  $(".imagess").fadeIn(900, function () {
    $(".imagess img").animate({
      left: "10%"
    }, 1000);
  });

  //news banner 
  function bannerAuto() {

    $(".news2 ul").stop().animate({
      marginLeft: "-=500px"
    }, 1000, function () {
      $(".news2 ul li:first-child").appendTo(".news2 ul");
      $(this).css({
        marginLeft: "0px"
      });
    });
  }
  bauto = setInterval(bannerAuto, 4000);


  
  $(".news1 .side_btn .nex").click(function () {

    clearInterval(bauto);

    $(".news2 ul").stop().animate({
      marginLeft: "-=500px"
    }, 1000, function () {
      $(".news2 ul li:first-child").appendTo(".news2 ul");
      $(this).css({
        marginLeft: "0px"
      });
    });

    bauto = setInterval(bannerAuto, 4000);

  });



  $(".news1 .side_btn .pre").click(function () {

    $(".news2 ul").stop().animate({
      marginLeft: "+=500px"
    }, 1000, function () {
      $(".news2 ul li:last-child").prependTo(".news2 ul");
      $(this).css({
        marginLeft: "0px"
      });
    });

  });

  $(".side_btn").hover(function () {
    clearInterval(bauto);
  }, function () {
    bauto = setInterval(bannerAuto, 4000);
  });



  


function lastAuto(){

  $(".ban ul").stop().animate({marginLeft:"-=275px"},1000,function(){			
    $(".ban ul li:first-child").appendTo(".ban ul"); 
    $(this).css({marginLeft:"0px"}); 
  });	

}
cauto=setInterval (lastAuto,4000);





$(".last").hover(function(){
clearInterval(cauto);
}, function(){
cauto=setInterval(lastAuto,4000);
});


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
});