$(function(){
  
  let ani = $(".ani");

  $.fn.scrollMoving = function(){
    let elementTop = $(this).offset().top;
    let elementBottom = elementTop + $(this).outerHeight();

    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height();
    
    return (viewportTop < elementBottom) && (elementTop < viewportBottom);
  };

  $(window).on('load scroll',function(){

    ani.each(function(){
      if($(this).scrollMoving()){
        $(this).addClass("moving");
      }else{
        $(this).removeClass("moving");
      };
    });
  });
});
