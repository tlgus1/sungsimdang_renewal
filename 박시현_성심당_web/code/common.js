
$(function(){
    $('.hd_ban i').click(function(){
        $('.hd_ban').hide();
    })
})


let swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: "true",
  });


  $(function(){
    $('.hd_bar i').click(function(){
      $('.backcolor').css('display','block')
      $('.tog_list').animate({right:0})
    })
  
    $('.tog_x').click(function(){
      $('.tog_list').animate({right:'-50%'})
      $('.backcolor').css('display','none')
    })

    $('.hd_bar i').click(function(){
      $('html, body').css({'overflow': 'hidden', 'height': '100%'}); // 모달팝업 중 html,body의 scroll을 hidden시킴
      $('.tog_list').on('scroll touchmove mousewheel', function(event) { // 터치무브와 마우스휠 스크롤 방지
      event.preventDefault();
      event.stopPropagation();
  
      return false;
      });

      
  $('.tog_x').click(function(){
    $('html, body').css({'overflow': 'visible', 'height': '100%'});
    $('.tog_list').off('scroll touchmove mousewheel');
  })

    })
  

  })

  
