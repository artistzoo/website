$(document).ready(function(){
   //gnb------------------------------------------------------
  $(".gnb").hover(function(){
    $(this).find(".sub").stop().slideDown();
    $(".gnb-sub").stop().slideDown();
  }, function(){
    $(this).find(".sub").stop().slideUp();
    $(".gnb-sub").stop().slideUp();

  });

  const modal2 = document.getElementById('modal2');
  const modalImg = document.getElementById('modalImg');
  const closeBtn = document.querySelector('.close2');


document.querySelectorAll('.modal-btn1').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault(); 
    const imgSrc = this.getAttribute('data-img'); 
    modalImg.src = imgSrc; 
    modal2.style.display = 'block'; 
  });
});

closeBtn.addEventListener('click', () => {
  modal2.style.display = 'none';
});

modal2.addEventListener('click', (e) => {
  if (e.target === modal2) {
    modal2.style.display = 'none';
  }
});

  
});