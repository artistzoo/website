$(document).ready(function(){
   //gnb------------------------------------------------------
  $(".gnb").hover(function(){
    $(this).find(".sub").stop().slideDown();
    $(".gnb-sub").stop().slideDown();
  }, function(){
    $(this).find(".sub").stop().slideUp();
    $(".gnb-sub").stop().slideUp();

  });
  /* 캐릭터 프로필 누르면 상세내용 나오기 */
  $(".character-thumb a").click(function (e) {
    e.preventDefault();
    $("html, body").scrollTop(0);

    let target = $(this).attr("data-alt");
    let $current = $(".character-inner .character-box.active");
    let $next = $("#" + target);

    if ($current.attr("id") === target) return;

    $(this).addClass("active").siblings().removeClass("active");

    $current.removeClass("active").addClass("exit-left");

    $next.css({ left: "0" }).addClass("active");

    setTimeout(function () {
      $current.removeClass("exit-left");
    }, 600);
  });
  /* 메인에서 누르면 해당 페이지 이동 */
  $(".character-box .box-img img").click(function () {
    let $parentBox = $(this).closest(".character-box");
    $parentBox.toggleClass("show-detail");
  });

  let url = new URL(window.location.href);
  let targetId = url.hash.substring(1);

  if (targetId) {

    $(".character-inner .character-box").removeClass("active show-detail");

    let $targetBox = $("#" + targetId);

    $targetBox.addClass("active show-detail");
  }

});