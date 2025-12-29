
$(document).ready(function(){
  //gnb------------------------------------------------------
  $(".gnb").hover(function(){
    $(this).find(".sub").stop().slideDown();
    $(".gnb-sub").stop().slideDown();
  }, function(){
    $(this).find(".sub").stop().slideUp();
    $(".gnb-sub").stop().slideUp();

  });

  //section2-------------------------------------------------
  let cloneElement = $(".section2-track").clone(true);
  $(cloneElement).appendTo(".section2-slides");

});

