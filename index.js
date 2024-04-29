var cur=document.querySelector(".cursor")
document.addEventListener("mousemove",function(dets){
cur.style.left = dets.x+30+ "px"
cur.style.top = dets.y + "px"
})

var crur=document.querySelector(".cursorblurr")
document.addEventListener("mousemove",function(dets){
crur.style.left = dets.x -150+ "px"
crur.style.top = dets.y -150 + "px"
})

gsap.to(".nav",{
 backgroundColor:"black",
 height:"70px",
 duration:1,
 scrollTrigger:{
    trigger:".nav",
    scroller:"body",
    // markers:true,
    start:"top  -10%",
    // end:"top-11%",
    scrub:1
 }
 
})
gsap.to(".main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
 
    }
})

var h4all=document.querySelectorAll(".nav h4");
h4all.forEach(function(element){
element.addEventListener("mouseenter",function(){
    cur.style.scale=2.5;
    cur.style.border="1px solid white";
    cur.style.backgroundColor="transparent";
})
element.addEventListener("mouseleave",function(){
    cur.style.scale=1;
    cur.style.border="0px solid #95c11e";
    cur.style.backgroundColor="#95c11e";
})
})

gsap.from(".page2part img ,.aboutus",{
    y:50,
    capacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
     trigger:".page2part",
     scroller:"body",
    
    }
});






