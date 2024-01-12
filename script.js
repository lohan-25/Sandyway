const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var main = document.querySelector("#main");
var cursor = document.querySelector("#mousecircle");

main.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x+"px";
    cursor.style.top = dets.y+"px";
})

function circleShapeCorrect(){

    var xscale = 1;
    var yscale = 1;
    var xprev = 0;
    var yprev = 0;

    main.addEventListener("mousemove",function(dets){

        var xdiff = dets.clientX - xprev;
        var ydiff = dets.clientY - yprev;
        xprev = dets.clientX;
        yprev = dets.clientY;



    })
}

function firstPageAnimation(){
    var timeline = gsap.timeline();
    timeline.from("#nav",{
        y: -10,
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 1.5
    })

    .to(".bounding-elem",{
        y: 0,
        stagger: .2,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1
    })

    .from("#herofooter",{
        y: -10,
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 1.5,
        delay: -1
    })
}


 document.querySelectorAll(".item")
.forEach((item)=>{
var rotate = 0;
var diffrenceRot = 0;
item.addEventListener("mouseleave",function(dets){
   
   gsap.to(item.querySelector("img"),{
    opacity: 0,
    ease: Power3,
    duration: .5
   
    
   })


})
    item.addEventListener("mousemove",function(dets){
        var diffrence = dets.clientY - item.getBoundingClientRect().top;
        diffrenceRot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.utils.clamp(-20, 20,diffrence)
       gsap.to(item.querySelector("img"),{
        opacity: 1,
        ease: Power3,
        top: diffrence,
        left: dets.clientX,
        rotate:gsap.utils.clamp(-20, 20,diffrenceRot*.5)
        
       })


    })
})


firstPageAnimation();