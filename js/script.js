
window.onload = function () {
    //loading
    $('.preloader').fadeOut(1500); // set duration in brackets   
  
       //스크롤이 .s2지점을 지날때 로고 display: block; 
       $(window).scroll(function() { 
       var scrollPosition = $(".s2").offset().top;
       var height = $(document).scrollTop();
        if(height < scrollPosition)
           {
            $('.menu img').css('display','none');
           }
           else{
               $('.menu img').css('display','block');
           }
       })
       
       //----------------------------화면이동 스크롤
//            $(".contents").each(function () {
//                // 개별적으로 Wheel 이벤트 적용
//                $(this).on("mousewheel DOMMouseScroll", function (e) {
//                    e.preventDefault();
//                    var delta = 0;
//                    if (!event) event = window.event;
//                    if (event.wheelDelta) {
//                        delta = event.wheelDelta / 120;
//                        if (window.opera) delta = -delta;
//                    } else if (event.detail) delta = -event.detail / 3;
//                    var moveTop = null;
//                    // 마우스휠을 위에서 아래로
//                    if (delta < 0) {
//                        if ($(this).next() != undefined) {
//                            moveTop = $(this).next().offset().top;
//                        }
//                    // 마우스휠을 아래에서 위로
//                    } else {
//                        if ($(this).prev() != undefined) {
//                            moveTop = $(this).prev().offset().top;
//                        }
//                    }
//                    // 화면 이동 0.8초(800)
//                    $("html,body").stop().animate({
//                        scrollTop: moveTop + 'px'
//                    }, {
//                        duration: 800, complete: function () {
//                        }
//                    });
//                });
//            })
//       
       
       
       
       
       //--------------------------ㅡmenubar클릭시 효과----
       
            $(".menu_bar").click(function(){
            
            var dp = $('.menu img').css('display');
                
            if (dp == 'block')
            $('.menu img').toggleClass('active');    
            $('html').toggleClass('active');
            setTimeout(function() {
            $('.t1').toggleClass('active');
            }, 400);
            setTimeout(function() {
            $('.t2').toggleClass('active');
            }, 550);
            setTimeout(function() {
            $('.t3').toggleClass('active');
            }, 600);
            $(".menu_wrap").toggleClass('active');
            $(".top").toggleClass('active');
            $(".bottom").toggleClass('active');
            $(".middle").toggleClass('active');
   });
       
       //-----------------------메뉴텍스트클릭시 이동-----------

             $('.t1').click(function(){
                 
            var scrollPosition = $(".s1").offset().top;
            $('.menu img').toggleClass('active');
            $('html').toggleClass('active');
            $('.t1').toggleClass('active');
            $('.t2').toggleClass('active');
            $('.t3').toggleClass('active');
            $(".menu_wrap").toggleClass('active');
            $(".top").toggleClass('active');
            $(".bottom").toggleClass('active');
            $(".middle").toggleClass('active');
            $("html, body").animate({ scrollTop: scrollPosition}, 800);
             });
       
             $('.t2').click(function(){
            
            var scrollPosition = $(".s2").offset().top;
            $('.menu img').toggleClass('active');
            $('html').toggleClass('active');
            $('.t1').toggleClass('active');
            $('.t2').toggleClass('active');
            $('.t3').toggleClass('active');
            $(".menu_wrap").toggleClass('active');
            $(".top").toggleClass('active');
            $(".bottom").toggleClass('active');
            $(".middle").toggleClass('active');
            $("html, body").animate({ scrollTop: scrollPosition}, 800);
    
             });
       
             $('.t3').click(function(){
    
            var scrollPosition = $(".s3").offset().top;
            $('.menu img').toggleClass('active');
            $('html').toggleClass('active');
            $('.t1').toggleClass('active');
            $('.t2').toggleClass('active');
            $('.t3').toggleClass('active');
            $(".menu_wrap").toggleClass('active');
            $(".top").toggleClass('active');
            $(".bottom").toggleClass('active');
            $(".middle").toggleClass('active');
            $("html, body").animate({ scrollTop: scrollPosition }, 1600);
    
             });

       $('.indicator-container').click(function(){
           
           var scrollPosition = $(".s2").offset().top;
           $("html, body").animate({ scrollTop: scrollPosition}, 800);
           
           
       });
       
       
       
       
      }