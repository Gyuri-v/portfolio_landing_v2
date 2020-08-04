$(document).ready(function(){
    
    //Plug-in AOS
    AOS.init();
    
    //scrollwidth
    var screenWidth = $(window).width();
    
    
    
    //main >> main_vis -- text scroll masic ---------------------
    if( screenWidth > 768){
        var controller = new ScrollMagic.Controller();

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
    
    
    
    // main >> main_about >> greet -- text change event  ---------------------
    class ChangingTitle {
      constructor(x = null) {
        this.node = x;
        this.letterfy(this.node.querySelector("strong"));
      }
      letterfy(node) {
        let text = node.innerText;
        node.innerText = "";
        node.classList.add("current");
        for (let c in text) {
          let span = document.createElement("span");
          span.innerText = text[c];
          span.classList.add("letter", "in");
          span.style.animationDelay = `${c * 0.1}s`;
          node.appendChild(span);
        }
      }
      changeText(newText) {
        let oldTitle = this.node.querySelector(".current");
        let i = 0;
        for (let letter of oldTitle.children) {
          letter.style.animationDelay = `${i++ * 0.1}s`;
          letter.classList.remove("in");
          letter.classList.add("out");
        }
        oldTitle.classList.remove("current");
        let newTitle = document.createElement("strong");
        newTitle.classList.add("current");
        for (let c in newText) {
          let span = document.createElement("span");
          span.innerText = newText[c];
          span.classList.add("letter", "in");
          span.style.animationDelay = `${c * 0.1 + 0.5}s`;
          newTitle.appendChild(span);
        }
        this.node.appendChild(newTitle);
        setTimeout(this.removeNode(oldTitle), 2000);
      }
      removeNode(x) {
        return () => {
          x.remove();
        };
      }
    }

    let ct = new ChangingTitle(document.querySelector(".changing-title"));
    const texts = ["신입 웹 퍼블리셔", "코드를 사랑하는", "협업에 자신있는", "항상 열심히 하는"];
    let count = 0;
    setInterval(() => {
      ct.changeText(texts[++count % texts.length]);
    }, 2000);
    
    
    
    //main >> main_about >> keyword -- text scroll masic  ---------------------                             settween 이거 하나로 정리 & 위에 vis도
    
    if( screenWidth > 768){
        var controller = new ScrollMagic.Controller();

        var key1 = TweenMax.to('.key_1', 0.5, {
            rotation: -60,
            x: -140,
            y: -110
        });


        var scene = new ScrollMagic.Scene({
            triggerElement: ".keyword",
            duration: "120%",
            offset : +100,
        })
        .setTween(key1)
        .addTo(controller)
//        .addIndicators({
//            name: "1"
//        }) 

        var key2 = TweenMax.to('.key_2', 0.5, {
            rotation: 40,
            x: 100,
            y: -140
        });

        var scene = new ScrollMagic.Scene({
            triggerElement: ".keyword",
            duration: "120%",
            offset : +100,
        })
        .setTween(key2)
        .addTo(controller)
//        .addIndicators({
//            name: "2"
//        }) 

        var key3 = TweenMax.to('.key_3', 0.5, {
            rotation: 30,
            x: -100,
            y: 100
        });

        var scene = new ScrollMagic.Scene({
            triggerElement: ".keyword",
            duration: "120%",
            offset : +100,
        })
        .setTween(key3)
        .addTo(controller)
//        .addIndicators({
//            name: "3"
//        }) 

         var key4 = TweenMax.to('.key_4', 0.5, {
            rotation: 40,
            x: 80,
            y: 110
        });

        var scene = new ScrollMagic.Scene({
            triggerElement: ".keyword",
            duration: "120%",
            offset : +100,
        })
        .setTween(key4)
        .addTo(controller)
//        .addIndicators({
//            name: "4"
//        }) 
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
    
    if( screenWidth <= 480 ){
        var controller = new ScrollMagic.Controller();

        var key1 = TweenMax.to('.key_1', 0.5, {
            rotation: -60,
            x: -60,
            y: -80
        });


        var scene = new ScrollMagic.Scene({
            triggerElement: ".keyword",
            duration: "100%",
            offset : 0,
        })
        .setTween(key1)
        .addTo(controller)
//        .addIndicators({
//            name: "1"
//        }) 

        var key2 = TweenMax.to('.key_2', 0.5, {
            rotation: 40,
            x: 0,
            y: -80
        });

        var scene = new ScrollMagic.Scene({
            triggerElement: ".keyword",
            duration: "100%",
            offset : 0,
        })
        .setTween(key2)
        .addTo(controller)
//        .addIndicators({
//            name: "2"
//        }) 

        var key3 = TweenMax.to('.key_3', 0.5, {
            rotation: 30,
            x: -20,
            y: 20
        });

        var scene = new ScrollMagic.Scene({
            triggerElement: ".keyword",
            duration: "100%",
            offset : 0,
        })
        .setTween(key3)
        .addTo(controller)
//        .addIndicators({
//            name: "3"
//        }) 

         var key4 = TweenMax.to('.key_4', 0.5, {
            rotation: 40,
            x: 10,
            y: 20
        });

        var scene = new ScrollMagic.Scene({
            triggerElement: ".keyword",
            duration: "100%",
            offset : 0,
        })
        .setTween(key4)
        .addTo(controller)
//        .addIndicators({
//            name: "4"
//        }) 
    }
    
    
    
    
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
    
    
    //main >> main_contact -- scroll h4 scale ----------------
    if( screenWidth > 768){
        var h4 = TweenMax.to('.main_cont h4', 1, {
            scale: 80,
            x: -750,
        });

        var scene = new ScrollMagic.Scene({
            triggerElement: ".main_cont",
            duration: "100%",
            offset: 0,
        })
        .setTween(h4)
        .setPin(h4, {pushFollowers: false})
        .addTo(controller)
//        .addIndicators({
//            name: "h4"
//        }) 
    }
    if( screenWidth <= 768){
        var h4 = TweenMax.to('.main_cont h4', 1, {
            scale: 110,
            x: -400,
        });

        var scene = new ScrollMagic.Scene({
            triggerElement: ".main_cont",
            duration: "100%",
            offset: 150,
        })
        .setTween(h4)
        .setPin(h4, {pushFollowers: false})
        .addTo(controller)
//        .addIndicators({
//            name: "h4"
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