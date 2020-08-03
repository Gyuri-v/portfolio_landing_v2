$(document).ready(function(){
    //main_vis txt effect
    
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
//    .addIndicators({
//        name: "1"
//    })
    
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
//    .addIndicators({
//        name: "2"
//    })
    
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
    .addTo(controller)
//    .addIndicators({
//        name: "3"
//    })
    
    
    //vis_img
    var tween3 = TweenMax.to('.vis_img', 0.5, {
        opacity: 0,
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: ".main_vis .con",
        duration: "20%",
        offset : +400,
    })
    .setTween(tween3)
    .addTo(controller)
//    .addIndicators({
//        name: "4"
//    })
})