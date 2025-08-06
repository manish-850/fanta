gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", (event) => {
  var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page2",
        start:"0% 95%",
        end:"50% 50%",
        scrub:1,
    }
});

tl.to("#fanta",{
    top:"120%",
    left:"20%",
    ease:"power1.out",
},"anim");

tl.to("#half-orange",{
    top:"160%",
    left:"22%",
    ease: "power1.out",
},"anim+=0.1");

tl.to("#oranges",{
    width:"22%",
    bottom:"-100%",
    right:"5%",
    ease: "power1.out",
},"anim");

tl.to("#leaf",{
    rotate:"310deg",
    top:"110%",
    left:"80%",
    ease: "power1.out",
},"anim");

tl.to("#leaf2",{
    rotate:"-270deg",
    bottom:"-30%",
    right:"85%",
    ease: "power1.out",
},"anim+=0.1");

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page3",
        start:"0% 95%",
        end:"20% 50%",
        scrub:1,
    }
});

tl2.to("#fanta",{
    width:"31%",
    top:"215%",
    left:"50%",
    ease: "power1.out",
},"anim2");

tl2.to("#half-orange",{
    top:"204%",
    left:"42%",
    ease: "power1.out",
},"anim2+=0.1");
 
tl2.from("#main #page3 .card .main-img1",{
    rotate:-90,
    top: "0%",
    left: "-100%",
    ease: "power1.out",
},"anim2");

tl2.from("#main #page3 .card .bg-img1",{
    rotate:-90,
    top: "-20%",
    left: "-100%",
    ease: "power1.out",
},"anim2+=0.1");

tl2.from("#main #page3 .card .main-img3",{
    rotate:90,
    top: "-2%",
    left: "100%",
    ease: "power1.out",
},"anim2");

tl2.from("#main #page3 .card .bg-img3",{
    rotate:90,
    top: "-28%",
    left: "100%",
    ease: "power1.out",
},"anim2+=0.1");

});
