function navAnime(){

    var tl = gsap.timeline()

    tl.from('#logo h1',{
        y: -100,
        duration: 0.8,
        delay:0.5,
        opacity:0,
        ease: "expo.out"
    })
    tl.from('#nav-right h4',{
        y: -100,
        duration: 0.5,
        opacity:0,
        ease: "expo.out",
        stagger: 0.2
    })
    tl.from('#main>h1',{
        backgroundPosition: '200% 0',
        y:20,
        duration: 0.5,
        opacity:0,
        filter:"blur(10px)",
        ease: "ease-in",
    })
    tl.from('button',{
        backgroundPosition: '200% 0',
        y:20,
        duration: 0.5,
        opacity:0,
        ease: "ease-in",
    })
    
}
navAnime()


let flag = 0;
let tl1;

function boxAnime() {
    tl1 = gsap.timeline()
    tl1.to("#box", {
        x: 1500,
        duration: 2,
        rotate: 360,
        backgroundColor: "salmon",
        repeat: -1,
        yoyo: true
    });
    tl1.to("#box1", {
        x: 1200,
        duration: 2,
        backgroundColor: "royalblue",
        rotate: 360,
        borderRadius: "50%",
        repeat: -1,
        yoyo: true
    });
}

var btn = document.querySelector("button");

btn.addEventListener("click", () => {
    if (flag === 0) {
        boxAnime();
        flag = 1;
    } else if (flag === 1) {
        if (tl1) {
            tl1.kill(); // Stop the animation
        }
        flag = 0;
    }
});

