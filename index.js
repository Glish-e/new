const phone = document.getElementById("phonne");
const work = document.getElementById("work");
const sleep = document.getElementById("sleep");
const social = document.getElementById("social");
const hobbies = document.getElementById("hobbies");
const others = document.getElementById("others");
const hero = document.getElementById("hero");
const divv = document.getElementById("divv");
const btn = document.getElementById("start");
const tex = document.getElementById("text");

btn.addEventListener("click", () => {
    const value = Number(work.value)
    const num = value * 365
    tex.textContent = `in a year you ll be working ${num} hours`
    console.log(num)
});


gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#hero",
        start: "top 5%",
        end: "bottom 150%",
        scrub: 15,
    }
});
tl.to(".anibox", {
    y: 500,
    x: 300,
    scale: 2
});

    gsap.registerPlugin(ScrollTrigger);
        const card = document.querySelectorAll(".divv");
        gsap.utils.toArray(card).forEach(element => {
            gsap.fromTo(card, {
                y: 50,
                autoAlpha: 0,
                scale: 0.5,
                duration: 0.7,
                ease: "power3.out",
            }, {
                autoAlpha: 1,
                scale: 1,
                scrollTrigger: {
                    trigger: card,
                    start: "top center",
                    end: "bottom center",
                    scrube: true               }
            })
        });





            