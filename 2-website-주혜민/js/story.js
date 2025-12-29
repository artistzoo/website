$(document).ready(function(){
 //gnb------------------------------------------------------
    $(".gnb").hover(function(){
    $(this).find(".sub").stop().slideDown();
    $(".gnb-sub").stop().slideDown();
    }, function(){
    $(this).find(".sub").stop().slideUp();
    $(".gnb-sub").stop().slideUp();

    });
    /* 회차마다의 이미지 자동애니메이션 및 버튼 */
    $(".story-inner > div").each(function(){
        let storyContainer = $(this),
        storyImage = storyContainer.find(".story-img img"),
        storyIndicator = storyContainer.find(".story-indicator a"),
        oldidx = 0,
        idx = 0,
        storyCount = storyImage.length,
        interval = 4000, 
        timer;

    function storyAni(idx){
        if(oldidx != idx){
            storyIndicator.eq(oldidx).removeClass("active");
            storyIndicator.eq(idx).addClass("active");

            storyImage.eq(oldidx).stop().fadeOut(300);
            storyImage.eq(idx).stop().fadeIn(300);

            oldidx = idx;
        }
    }
        storyIndicator.click(function(e){
            e.preventDefault();
            idx = $(this).index();
            storyAni(idx);
    });

    function startAutoSlide(){
        timer = setInterval(function(){
        idx++;
        if (idx >= storyCount) idx = 0;
        storyAni(idx);
        }, interval);
    }

    startAutoSlide();

    storyContainer.hover(
    function(){
        clearInterval(timer);
    },
    function(){
        startAutoSlide();
            }
        );
    });  
    /* 상세내용 중 trailer 이미지 클릭 시 모달창 생성 후 동영상 재생 */
    const nwindow = document.getElementById("myModal");
    const trailerVideo = document.getElementById("trailerVideo");
    const closeModal = document.querySelector(".close1");
    const openButtons = document.querySelectorAll(".openModal");

    openButtons.forEach(btn => {
    btn.addEventListener("click", () => {
    const videoUrl = btn.getAttribute("data-video") + "?autoplay=1&mute=1";
    trailerVideo.src = videoUrl;
    nwindow.style.display = "flex";
    });
});

    closeModal.onclick = function() {
    nwindow.style.display = "none";
    trailerVideo.src = "";
};

    window.onclick = function(event) {
    if (event.target === modal) {
    nwindow.style.display = "none";
    trailerVideo.src = "";
    }
}
    /* 메인페이지 각 회차별 클릭 시 해당 페이지 */
    $(".story-box").click(function () {
    let $parentBox = $(this).closest(".story-box");
    $parentBox.toggleClass("show-detail");
    });

    let url = new URL(window.location.href);
    let targetId = url.hash.substring(1);

    if (targetId) {

    $(".story-inner .story-box").removeClass("active show-detail");

    let $targetBox = $("#" + targetId);

    $targetBox.addClass("active show-detail");
    }
});