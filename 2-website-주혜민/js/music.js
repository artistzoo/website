$(document).ready(function(){

   //gnb------------------------------------------------------
  $(".gnb").hover(function(){
    $(this).find(".sub").stop().slideDown();
    $(".gnb-sub").stop().slideDown();
  }, function(){
    $(this).find(".sub").stop().slideUp();
    $(".gnb-sub").stop().slideUp();

  });
  /* 좌우버튼 시 전 후 이미지 나타내기 */
  let $items = $(".music-item");
  let currentIndex = 0;

  $items.removeClass("active");
  $items.eq(currentIndex).addClass("active");

  $(".ban_right").click(function(e){
    e.preventDefault();
    $items.eq(currentIndex).removeClass("active");
    currentIndex = (currentIndex + 1) % $items.length; // 마지막 → 처음으로
    $items.eq(currentIndex).addClass("active");
  });

  $(".ban_left").click(function(e){
    e.preventDefault();
    $items.eq(currentIndex).removeClass("active");
    currentIndex = (currentIndex - 1 + $items.length) % $items.length; // 처음 
    $items.eq(currentIndex).addClass("active");
  });


  /* 메인페이지 각 회차별 클릭 시 해당 페이지 */
    $(".music-item").click(function () {
    let $parentBox = $(this).closest(".music-item");
    $parentBox.toggleClass("show-detail");
    });

    let url = new URL(window.location.href);
    let targetId = url.hash.substring(1);

    if (targetId) {

    $("#music .music-item").removeClass("active show-detail");

    let $targetBox = $("#" + targetId);

    $targetBox.addClass("active show-detail");
    }
});
