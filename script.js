
// var crsr = document.getElementById("cursor");
// var crsr_blur = document.getElementById("cursor_blur");
// document.addEventListener("mousemove", function (dots) {
//     crsr.style.left = dots.x - 10 + "px";
//     crsr.style.top = dots.y - 10 + "px";
//     crsr_blur.style.left = dots.x - 100 + "px";
//     crsr_blur.style.top = dots.y - 100 + "px";
// })




gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "90px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1.5
    }
})
gsap.to("#main", {
    backgroundColor: "#000",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        markers: false,
        start: "top -30%",
        end: "top -100%",
        scrub: 1.5
    }
})