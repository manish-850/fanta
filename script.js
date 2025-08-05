gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page2",
        start:"0% 95%",
        end:"50% 50%",
        scrub:true,
    }
});

tl.to("#fanta",{
    top:"121%",
    left:"0%",
    ease: "power2.out",
},"anim");

tl.to("#half-orange",{
    top:"160%",
    left:"22%",
    ease: "power2.out",
},"anim");

tl.to("#oranges",{
    width:"22%",
    top:"150%",
    right:"5%",
    ease: "power2.out",
},"anim");

tl.to("#leaf",{
    rotate:"310deg",
    top:"110%",
    left:"80%",
    ease: "power2.out",
},"anim");

tl.to("#leaf2",{
    rotate:"-270deg",
    top:"105%",
    right:"85%",
    ease: "power2.out",
},"anim");



var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page3",
        start:"0% 95%",
        end:"20% 50%",
        scrub:true,
        markers:true,
    }
});

tl2.to("#fanta",{
    width:"30%",
    top:"220%",
    left:"35%",
    ease: "power2.out",
},"anime2");

tl2.to("#half-orange",{
    width:"17%",
    top:"205%",
    left:"41.5%",
    ease: "power2.out",
},"anime2");

tl2.from(".main-img1",{
    rotate:"-90deg",
    left:"-100%",
    ease: "power2.out",
},"anime2");

tl2.from(".bg-img1",{
    rotate:"-90deg",
    left:"-100%",
    ease: "power2.out",
},"anime2");

tl2.from(".main-img3",{
    rotate:"90deg",
    left:"100%",
    ease: "power2.out",
},"anime2");

tl2.from(".bg-img3",{
    rotate:"90deg",
    left:"100%",
    ease: "power2.out",
},"anime2");