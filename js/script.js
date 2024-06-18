$(document).ready(function() {

    // 모달
    $('#myModal').show();

    setTimeout(function() { $('#myModal').hide(); }, 4000);

    $(".modal-content").click(function(){
      $('#myModal').hide();
    });

    $(".top").click(function(){
      $("html, body").animate({
        scrollTop : 0
      }, "slow");
      return false;
    });



    //  마우스 휠 이벤트     
    function handleMouseWheel(e) {
      e.preventDefault(); 
      
      var delta = e.originalEvent.wheelDelta / 100 || -e.originalEvent.detail / 3;
      var moveTop = null;
      
      if (delta < 0) {
          moveTop = $(this).next().offset().top; 
      } else {
        
          moveTop = $(this).prev().length ? $(this).prev().offset().top : $(this).parent().prev().offset().top;
      }

      $("html, body").stop().animate({
          scrollTop: moveTop + 'px'
      }, 300);
  }

  // $(".active").on("mousewheel DOMMouseScroll", handleMouseWheel);
 

  // 웹 사이트 디테일 사이트 팝업 -1
   $('#tab_2 .button li:first').click(function(){
    $('.popup').css({
      "top": (($(window).height()-$(".popup").outerHeight())/2+$(window).scrollTop())+"px",
      "left": (($(window).width()-$(".popup").outerWidth())/2+$(window).scrollLeft())+"px"
   
   }); 
    $('.popup').show();
    
});

  $('.button button').click(function(){
    $('.popup').hide();
});


// 웹 사이트 디테일 사이트 팝업 -2
$('#tab_3 .button li:first').click(function(){
  $('.popup1').css({
    "top": (($(window).height()-$(".popup1").outerHeight())/2+$(window).scrollTop())+"px",
    "left": (($(window).width()-$(".popup1").outerWidth())/2+$(window).scrollLeft())+"px"
 }); 

  $('.popup1').show();
  
});

$('.button button').click(function(){
  $('.popup1').hide();
});


// sns banner

$('.ui img').click(function(){
  $('.popup3').show();
  
});

$('.popup3 button').click(function(){
  $('.popup3').hide();
});


// 디테일 페이지
$('.detail img:last').click(function(){
  $('.popup4').show();
  
});

$('.popup4 button').click(function(){
  $('.popup4').hide();
});



$('.detail img:first').click(function(){
  $('.popup5').show();
  
});

$('.popup5 button').click(function(){
  $('.popup5').hide();
});


$('.sns img:first').click(function(){
  $('.popup8').show();
  
});

$('.popup8 button').click(function(){
  $('.popup8').hide();
});

$('.sns img:last').click(function(){
  $('.popup6').show();
  
});

$('.popup6 button').click(function(){
  $('.popup6').hide();
});


$('.sns img:nth-child(3)').click(function(){
  $('.popup7').show();
  
});

$('.popup7 button').click(function(){
  $('.popup7').hide();
});
});
