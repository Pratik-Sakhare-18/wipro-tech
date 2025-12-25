let navTL = gsap.timeline();
let nav = document.querySelector(".nav")

navTL.to(".nav", {
    top: "0",
    opacity: 0,
    duration: 0.7,
    opacity: 1,
    display: "flex",
});

navTL.from('.video-overlay', {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
})
    .from('.main-text-container', {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.6')


let WhatWeDoTL = gsap.timeline();

WhatWeDoTL.to(".what-we-do-container", {
    top: "9%",
    duration: 0.7,
    opacity: 1,
    display: "flex",
})

WhatWeDoTL.pause()
let isNavbarOpen = 0

document.querySelector(".what-we-do-page").addEventListener("click", () => {

    let DB1 = document.querySelector(".down-btn1");
    DB1.style.rotate = "180deg";
    DB1.style.transition = "transform 0.2s ease";

    if (isNavbarOpen == 0) {
        WhatWeDoTL.play();
        isNavbarOpen = 1
    } else {
        WhatWeDoTL.reverse();
        isNavbarOpen = 0
        DB1.style.rotate = "0deg";
    }
})

let AboutWiproTL = gsap.timeline();

AboutWiproTL.to(".about-wipro-container", {
    top: "9%",
    duration: 0.7,
    opacity: 1,
    display: "flex",
})

AboutWiproTL.pause()
let isNavbarOpen3 = 0

document.querySelector(".about-wipro-page").addEventListener("click", () => {

    let DB2 = document.querySelector(".down-btn2");
    DB2.style.rotate = "180deg";
    DB2.style.transition = "transform 0.2s ease";

    if (isNavbarOpen3 == 0) {
        AboutWiproTL.play();
        isNavbarOpen3 = 1
    } else {
        AboutWiproTL.reverse();
        isNavbarOpen3 = 0
        DB2.style.rotate = "0deg";
    }
})

