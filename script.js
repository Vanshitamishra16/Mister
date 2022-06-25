var tl = gsap.timeline();
tl.from("#nav>h1, #right",{
    opacity:0,
    y:-50,
    duration:0.8
})
.from("img, #leftpart>h1",{
    opacity:0,
    duration:1,
    x:-50,
})
.from("#middle>h3",{
    opacity:0,
    duration: 1,
    stagger: 0.2
})
.from("#bottom, #leftpart>h2,button",{
    opacity:0,
    duration:0.8,
    y:50

})
