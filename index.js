const phone = document.getElementById("phonne");
const work = document.getElementById("work");
const sleep = document.getElementById("sleep");
const social = document.getElementById("social");
const hobbies = document.getElementById("hobbies");
const others = document.getElementById("others");
const hero = document.getElementById("hero");
const divv = document.getElementById("divv");
const btn = document.getElementById("start");
async function multiply() {
    const number = await phone.value;
    const valu = Number(number);
   if(valu){
   console.log(valu * 2)
   } else {
       console.log("entre a number")
}
}
btn.addEventListener("click", () => {
    if (hero.style.background !== "yellow"){
        hero.style.background = "yellow";
    }
     else {
        hero.style.background = "gray";
    }
});
const body = document.querySelector("body")

gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#hero",
        start: "top 5%",
        end: "bottom 150%",
        markers: true,
        toggleActions: "restart play reverse play",
        scrub: 15,
    }
});
tl.to(".anibox", {
    y: 500,
    x: 300,
    scale: 2
});

// Cool horizontal scroll animation for #loop section
gsap.registerPlugin(ScrollTrigger);
const horizontalScroll = gsap.to(".group", {
    x: () => -(document.querySelector(".group").scrollWidth - document.querySelector(".contain").clientWidth),
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "#loop",
        start: "top top",
        end: () => "+=" + document.querySelector(".group").scrollWidth,
        pin: true,
        scrub: true,
        markers: true,
        anticipatePin: 1
    }
});
const text = document.getElementById("text");
const btc_url = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json'
async function fetcha() {
    const response = await fetch(btc_url);
    try {
        if(response.ok) {
            const data = await response.json();
            text.innerText = `Current BTC Price: $${data.bpi.USD.rate}`;
        } else {
            throw Error("A problem has been detected")
        }
    } catch (error) {
        console.error(error)
    }

}


            