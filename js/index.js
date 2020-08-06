$(document).ready(function(){

    //AOS
    AOS.init();



	/*new*/




	$(window).scroll(function(){
		var $bg = $('.main_vis .bg');
		scrollTop = $(window).scrollTop();
		scrollTop2 = $(window).scrollTop()/5000;
		TweenLite.to($bg, 0.5,
			{
				y: -scrollTop/2,
				css:{scale:1+scrollTop2},
			},
		);


    var $img = $('.con img');
		//scroll01 = $(window).scrollTop();
		scrollTop2 = $(window).scrollTop()/10000;
		TweenLite.to($img, 0.5,
			{
				//scale: -scrollTop/2,
				css:{scale:1+scrollTop2},
			},
		);





	})



    //scrollwidth
    var screenWidth = $(window).width();



    // translate3d(-212.984px, -53.9017px, 0px)
    // scale3d(1, 1, 1)
    // rotateX(0deg)
    // rotateY(0deg)
    // rotateZ(-25.3132deg)
    // skew(0deg, 0deg)


    //main >> main_vis -- text scroll masic ---------------------
    if( screenWidth > 768){
        var controller = new ScrollMagic.Controller();





    //bg

    var tween_bg = TweenMax.to('.all_bg2', 0.5, {
          opacity: 1,
      });


    var scene = new ScrollMagic.Scene({
          triggerElement: ".main_cont",
          offset :0,
      })
      .setTween(tween_bg)
      .addTo(controller)


		  var tween0 = TweenMax.to('.all_bg', 0.5, {
            opacity: 1,
        });

		  var scene = new ScrollMagic.Scene({
            triggerElement: ".pj_con",
            offset : 0,
        })
        .setTween(tween0)
        .addTo(controller)



        //vis_tit first txt
        var tween1 = TweenMax.to('.vis_tit .link.t_f', 0.5, {
            top: -100,
            opacity: 0,
        });

        var scene = new ScrollMagic.Scene({
            triggerElement: ".main_vis .con",
            duration: "20%",
            offset : +250,
        })
        .setTween(tween1)
        .addTo(controller)
//        .addIndicators({
//            name: "vis1"
//        })

        //vis_tit second txt
        var tween2 = TweenMax.to('.vis_tit .link.t_s', 0.5, {
            top: -100,
            opacity: 0,
        });

        var scene = new ScrollMagic.Scene({
            triggerElement: ".main_vis .con",
            duration: "20%",
            offset : +320,
        })
        .setTween(tween2)
        .addTo(controller)
//        .addIndicators({
//            name: "vis2"
//        })

        //vis_tit third txt
        var tween3 = TweenMax.to('.vis_tit .link.t_t', 0.5, {
            top: -100,
            opacity: 0,
        });

        var scene = new ScrollMagic.Scene({
            triggerElement: ".main_vis .con",
            duration: "20%",
            offset : +400,
        })
        .setTween(tween3)
        .setTween(tween4)
        .addTo(controller)
//        .addIndicators({
//            name: "vis3"
//        })


        //vis_img
        var tween4 = TweenMax.to('.vis_img', 0.5, {
            opacity: 0,
        });

        var scene = new ScrollMagic.Scene({
            triggerElement: ".main_vis .con",
            duration: "20%",
            offset : +400,
        })
        .setTween(tween4)
        .addTo(controller)
//        .addIndicators({
//            name: "vis4"
//        })
    }
    if( screenWidth <= 768){
        var controller = new ScrollMagic.Controller();

        //vis_tit first txt
        var tween1 = TweenMax.to('.vis_tit .link.t_f', 0.5, {
            top: -100,
            opacity: 0,
        });

        var scene = new ScrollMagic.Scene({
            triggerElement: ".main_vis .con",
            duration: "20%",
            offset : +300,
        })
        .setTween(tween1)
        .addTo(controller)
//        .addIndicators({
//            name: "vis1"
//        })

        //vis_tit second txt
        var tween2 = TweenMax.to('.vis_tit .link.t_s', 0.5, {
            top: -100,
            opacity: 0,
        });

        var scene = new ScrollMagic.Scene({
            triggerElement: ".main_vis .con",
            duration: "20%",
            offset : +370,
        })
        .setTween(tween2)
        .addTo(controller)
//        .addIndicators({
//            name: "vis2"
//        })

        //vis_tit third txt
        var tween3 = TweenMax.to('.vis_tit .link.t_t', 0.5, {
            top: -100,
            opacity: 0,
        });

        var scene = new ScrollMagic.Scene({
            triggerElement: ".main_vis .con",
            duration: "20%",
            offset : +450,
        })
        .setTween(tween3)
        .setTween(tween4)
        .addTo(controller)
//        .addIndicators({
//            name: "vis3"
//        })


        //vis_img
        var tween4 = TweenMax.to('.vis_img', 0.5, {
            opacity: 0,
        });

        var scene = new ScrollMagic.Scene({
            triggerElement: ".main_vis .con",
            duration: "20%",
            offset : +450,
        })
        .setTween(tween4)
        .addTo(controller)
//        .addIndicators({
//            name: "vis4"
//        })
    }



    //main >> main_about >> keyword -- text scroll masic  ---
    if( screenWidth > 768 ){
        var controller = new ScrollMagic.Controller();

        var key1 = TweenMax.to('.key_1', 0.5, {
          ease: Power4.easeOuteaseOut,
            rotation: -120,
            x: -340,
            y: -110
        });


        var scene = new ScrollMagic.Scene({
          ease: Power4.easeOuteaseOut,
            triggerElement: ".keyword",
            duration: "120%",
            offset : -50,
        })
        .setTween(key1)
        .addTo(controller)
//        .addIndicators({
//            name: "1"
//        })

        var key2 = TweenMax.to('.key_2', 0.5, {
          ease: Power4.easeOuteaseOut,
            rotation: 80,
            x: 300,
            y: -50
        });

        var scene = new ScrollMagic.Scene({
            triggerElement: ".keyword",
            duration: "120%",
            offset : -50,
        })
        .setTween(key2)
        .addTo(controller)
//        .addIndicators({
//            name: "2"
//        })

        var key3 = TweenMax.to('.key_3', 0.5, {
          ease: Power4.easeOuteaseOut,
            rotation: 30,
            x: -200,
            y: 20
        });

        var scene = new ScrollMagic.Scene({
            triggerElement: ".keyword",
            duration: "120%",
            offset : 0,
        })
        .setTween(key3)
        .addTo(controller)
//        .addIndicators({
//            name: "3"
//        })

         var key4 = TweenMax.to('.key_4', 0.5, {
           ease: Power4.easeOuteaseOut,
            rotation: 40,
            x: 280,
            y: 30
        });

        var scene = new ScrollMagic.Scene({
            triggerElement: ".keyword",
            duration: "120%",
            offset : 0,
        })
        .setTween(key4)
        .addTo(controller)
//        .addIndicators({
//            name: "4"
//        })


        var key5 = TweenMax.to('.key_5', 0.5, {
          ease: Power4.easeOuteaseOut,
           rotation: -40,
           x: 380,
           y: -80
        });

        var scene = new ScrollMagic.Scene({
           triggerElement: ".keyword",
           duration: "120%",
           offset : 0,
        })
        .setTween(key5)
        .addTo(controller)
    }
    
    
    if( screenWidth < 480 ){
        var controller = new ScrollMagic.Controller();

        var key1 = TweenMax.to('.key_1', 0.5, {
          ease: Power4.easeOuteaseOut,
            rotation: -100,
            x: -100,
            y: -110
        });


        var scene = new ScrollMagic.Scene({
          ease: Power4.easeOuteaseOut,
            triggerElement: ".keyword",
            duration: "100%",
            offset : +150,
        })
        .setTween(key1)
        .addTo(controller)
//        .addIndicators({
//            name: "1"
//        })

        var key2 = TweenMax.to('.key_2', 0.5, {
          ease: Power4.easeOuteaseOut,
            rotation: 80,
            x: 80,
            y: -50
        });

        var scene = new ScrollMagic.Scene({
            triggerElement: ".keyword",
            duration: "100%",
            offset : +150,
        })
        .setTween(key2)
        .addTo(controller)
//        .addIndicators({
//            name: "2"
//        })

        var key3 = TweenMax.to('.key_3', 0.5, {
          ease: Power4.easeOuteaseOut,
            rotation: 30,
            x: -30,
            y: 20
        });

        var scene = new ScrollMagic.Scene({
            triggerElement: ".keyword",
            duration: "100%",
            offset : +150,
        })
        .setTween(key3)
        .addTo(controller)
//        .addIndicators({
//            name: "3"
//        })

         var key4 = TweenMax.to('.key_4', 0.5, {
           ease: Power4.easeOuteaseOut,
            rotation: 40,
            x: 70,
            y: 30
        });

        var scene = new ScrollMagic.Scene({
            triggerElement: ".keyword",
            duration: "100%",
            offset : +150,
        })
        .setTween(key4)
        .addTo(controller)
//        .addIndicators({
//            name: "4"
//        })


        var key5 = TweenMax.to('.key_5', 0.5, {
          ease: Power4.easeOuteaseOut,
           rotation: -40,
           x: 100,
           y: -80
        });

        var scene = new ScrollMagic.Scene({
           triggerElement: ".keyword",
           duration: "100%",
           offset : +150,
        })
        .setTween(key5)
        .addTo(controller)
    }
    
    if( screenWidth <= 768 && screenWidth > 480 ){
        var controller = new ScrollMagic.Controller();

        var key1 = TweenMax.to('.key_1', 0.5, {
          ease: Power4.easeOuteaseOut,
            rotation: -100,
            x: -170,
            y: -110
        });


        var scene = new ScrollMagic.Scene({
          ease: Power4.easeOuteaseOut,
            triggerElement: ".keyword",
            duration: "100%",
            offset : -50,
        })
        .setTween(key1)
        .addTo(controller)
//        .addIndicators({
//            name: "1"
//        })

        var key2 = TweenMax.to('.key_2', 0.5, {
          ease: Power4.easeOuteaseOut,
            rotation: 80,
            x: 150,
            y: -50
        });

        var scene = new ScrollMagic.Scene({
            triggerElement: ".keyword",
            duration: "100%",
            offset : -50,
        })
        .setTween(key2)
        .addTo(controller)
//        .addIndicators({
//            name: "2"
//        })

        var key3 = TweenMax.to('.key_3', 0.5, {
          ease: Power4.easeOuteaseOut,
            rotation: 30,
            x: -100,
            y: 20
        });

        var scene = new ScrollMagic.Scene({
            triggerElement: ".keyword",
            duration: "100%",
            offset : +100,
        })
        .setTween(key3)
        .addTo(controller)
//        .addIndicators({
//            name: "3"
//        })

         var key4 = TweenMax.to('.key_4', 0.5, {
           ease: Power4.easeOuteaseOut,
            rotation: 40,
            x: 140,
            y: 30
        });

        var scene = new ScrollMagic.Scene({
            triggerElement: ".keyword",
            duration: "100%",
            offset : +100,
        })
        .setTween(key4)
        .addTo(controller)
//        .addIndicators({
//            name: "4"
//        })


        var key5 = TweenMax.to('.key_5', 0.5, {
          ease: Power4.easeOuteaseOut,
           rotation: -40,
           x: 170,
           y: -80
        });

        var scene = new ScrollMagic.Scene({
           triggerElement: ".keyword",
           duration: "100%",
           offset : +100,
        })
        .setTween(key5)
        .addTo(controller)
    }


//    if( screenWidth > 480 ){
//        var controller = new ScrollMagic.Controller();
//
//        var key1 = TweenMax.to('.key_1', 0.5, {
//            rotation: -60,
//            x: -80,
//            y: -50
//        });
//
//
//        var scene = new ScrollMagic.Scene({
//            triggerElement: ".keyword",
//            duration: "100%",
//            offset : 0,
//        })
//        .setTween(key1)
//        .addTo(controller)
////        .addIndicators({
////            name: "1"
////        })
//
//        var key2 = TweenMax.to('.key_2', 0.5, {
//            rotation: 40,
//            x: 40,
//            y: -80
//        });
//
//        var scene = new ScrollMagic.Scene({
//            triggerElement: ".keyword",
//            duration: "100%",
//            offset : 0,
//        })
//        .setTween(key2)
//        .addTo(controller)
////        .addIndicators({
////            name: "2"
////        })
//
//        var key3 = TweenMax.to('.key_3', 0.5, {
//            rotation: 30,
//            x: -40,
//            y: 40
//        });
//
//        var scene = new ScrollMagic.Scene({
//            triggerElement: ".keyword",
//            duration: "100%",
//            offset : 0,
//        })
//        .setTween(key3)
//        .addTo(controller)
////        .addIndicators({
////            name: "3"
////        })
//
//         var key4 = TweenMax.to('.key_4', 0.5, {
//            rotation: 40,
//            x: 20,
//            y: 50
//        });
//
//        var scene = new ScrollMagic.Scene({
//            triggerElement: ".keyword",
//            duration: "100%",
//            offset : 0,
//        })
//        .setTween(key4)
//        .addTo(controller)
////        .addIndicators({
////            name: "4"
////        })
//    }

//    if( screenWidth <= 480 ){
//        var controller = new ScrollMagic.Controller();
//
//        var key1 = TweenMax.to('.key_1', 0.5, {
//            rotation: -60,
//            x: -60,
//            y: -80
//        });
//
//
//        var scene = new ScrollMagic.Scene({
//            triggerElement: ".keyword",
//            duration: "100%",
//            offset : 0,
//        })
//        .setTween(key1)
//        .addTo(controller)
////        .addIndicators({
////            name: "1"
////        })
//
//        var key2 = TweenMax.to('.key_2', 0.5, {
//            rotation: 40,
//            x: 0,
//            y: -80
//        });
//
//        var scene = new ScrollMagic.Scene({
//            triggerElement: ".keyword",
//            duration: "100%",
//            offset : 0,
//        })
//        .setTween(key2)
//        .addTo(controller)
////        .addIndicators({
////            name: "2"
////        })
//
//        var key3 = TweenMax.to('.key_3', 0.5, {
//            rotation: 30,
//            x: -20,
//            y: 20
//        });
//
//        var scene = new ScrollMagic.Scene({
//            triggerElement: ".keyword",
//            duration: "100%",
//            offset : 0,
//        })
//        .setTween(key3)
//        .addTo(controller)
////        .addIndicators({
////            name: "3"
////        })
//
//         var key4 = TweenMax.to('.key_4', 0.5, {
//            rotation: 40,
//            x: 10,
//            y: 20
//        });
//
//        var scene = new ScrollMagic.Scene({
//            triggerElement: ".keyword",
//            duration: "100%",
//            offset : 0,
//        })
//        .setTween(key4)
//        .addTo(controller)
////        .addIndicators({
////            name: "4"
////        })
//    }




    //main >> main_about >> keyword -- hover event  ---------------------                                         반복문 정리하기

    $('.key_t_1').hover(function(){
        $('.key_1').css({backgroundColor:'#d2687b'});
    },function(){
        $('.key_1').css({backgroundColor:'#708658'});
    })
    $('.key_t_2').hover(function(){
        $('.key_2').css({backgroundColor:'#d2687b'});
    },function(){
        $('.key_2').css({backgroundColor:'#708658'});
    })
    $('.key_t_3').hover(function(){
        $('.key_3').css({backgroundColor:'#d2687b'});
    },function(){
        $('.key_3').css({backgroundColor:'#708658'});
    })
    $('.key_t_4').hover(function(){
        $('.key_4').css({backgroundColor:'#d2687b'});
    },function(){
        $('.key_4').css({backgroundColor:'#708658'});
    })


    //main >> main_proj -- scroll pin -----------------


    if( screenWidth > 768){
        var controller = new ScrollMagic.Controller({
            globalSceneOptions: {
                triggerHook: 'onLeave',
                duration: "50%"
            }
        });
        var slides = document.querySelectorAll(".project");

        for (var i=0; i<slides.length; i++) {
            var scene = new ScrollMagic.Scene({
                triggerElement: slides[i]
            })
            .setPin(slides[i], {pushFollowers: false})
//            .addIndicators()
            .addTo(controller);
        }
    }





    //main >> main_proj -- scroll bg color ----------------
    if( screenWidth > 768){
        var bg2 = TweenMax.to('.bg', 0.5, {
            backgroundColor: '#0d4432',
        });

        var scene = new ScrollMagic.Scene({
            triggerElement: ".proj_2",
            duration: "100%",
            offset : -350,
        })
        .setTween(bg2)
        .addTo(controller)
//        .addIndicators({
//            name: "bg2"
//        })

        var bg3 = TweenMax.to('.bg', 0.5, {
            backgroundColor: '#005982',
        });

        var scene = new ScrollMagic.Scene({
            triggerElement: ".proj_3",
            duration: "100%",
            offset : -350,
        })
        .setTween(bg3)
        .addTo(controller)
//        .addIndicators({
//            name: "bg3"
//        })
    }






    /* main >> contact -- Tilt */
    if( screenWidth > 768){
        setInterval(function () {
          $('.main_cont .img_wrap').tilt({
            reset: false,
            speed: 400,
            maxTilt: 20,
          });
        }, 6400);
    }

    if( screenWidth <= 768){
        $('.link--kukuri').removeClass('link--kukuri');
    }

    





})

//copy text
function copyEmail() {
  var copyText = document.getElementById("copyEmail");
      copyText.select();
      copyText.setSelectionRange(0, 99999)
      document.execCommand("copy");
}
function copyNumber() {
  var copyText = document.getElementById("copyNumber");
      copyText.select();
      copyText.setSelectionRange(0, 99999)
      document.execCommand("copy");
}
