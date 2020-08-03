$(document).ready(function(){
    
    
    //main >> main_vis -- txt effect
    
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
    
    


    /* Intro - Tilt */
//    setInterval(function () {
//      $('.main_vis .con').tilt({
//        reset: false,
//        speed: 400,
//        maxTilt: 5,
//      });
//    }, 6400);

    
    
    // main >> main_about >> greet -- text change event
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
    const texts = ["웹 퍼블리셔", "코드를 사랑하는", "협업에 자신있는", "열심히 하는"];
    let count = 0;
    setInterval(() => {
      ct.changeText(texts[++count % texts.length]);
    }, 2000);
  
})