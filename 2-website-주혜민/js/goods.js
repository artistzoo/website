$(document).ready(function(){
   //gnb------------------------------------------------------
  $(".gnb").hover(function(){
    $(this).find(".sub").stop().slideDown();
    $(".gnb-sub").stop().slideDown();
  }, function(){
    $(this).find(".sub").stop().slideUp();
    $(".gnb-sub").stop().slideUp();

  });
  
  let totalNum = $('.modal-content5 li').length;
  let pageNum = 0;

  $(".goods").click(function(){
    pageNum =$(this).index();
    
    $(".page-num span:nth-child(1)").text(pageNum+1);
    $(".modal-content5 li").hide();
    $(".modal-content5 li").eq(pageNum).stop().fadeIn();
    $(".modal5").stop().fadeIn();
    $("html, body").scrollTop(0);
  });

 //이전다음버튼
  $(".pre").click(function(){
    $("html, body").scrollTop(0);
    if(pageNum > 0){
      $(".modal-content5 li").eq(pageNum).hide();
      pageNum--;
      $(".page-num span:nth-child(1)").text(pageNum+1);
      $(".modal-content5 li").eq(pageNum).stop().fadeIn();
      
    }
  });
  $(".next").click(function(){
    $("html, body").scrollTop(0);
    if(pageNum < totalNum-1){
      $(".modal-content5 li").eq(pageNum).hide();
      pageNum++;
      $(".page-num span:nth-child(1)").text(pageNum+1);
      $(".modal-content5 li").eq(pageNum).stop().fadeIn();
    }
  });
  $(".close5").click(function(){
    $(".modal5").stop().fadeOut();
    $(".modal-content5 li").stop().fadeOut();
  });
});