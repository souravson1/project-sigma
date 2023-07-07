const cursor = document.getElementById('cursor');
const cursorBlur = document.getElementById('cursor-blur');
document.addEventListener('mousemove', function (dets) {
    cursor.style.left = dets.x + 30 + 'px';
    cursor.style.top = dets.y + 'px';
    cursorBlur.style.left = dets.x - 200 + 'px';
    cursorBlur.style.top = dets.y - 200 + 'px';
})

const h4all = document.querySelectorAll('#nav h4');
h4all.forEach(function (elem) {
    elem.addEventListener('mouseenter', function () {
        cursor.style.scale = 3;
        cursor.style.border = '1px solid #fff';
        cursor.style.backgroundColor = "transparent"
    })
    elem.addEventListener('mouseleave', function () {
        cursor.style.scale = 1;
        cursor.style.border = '0px solid #95C11E';
        cursor.style.backgroundColor = "#64CCC5"
    })
})

const nav = gsap.timeline();

nav
    .from('#nav', {
        top: "-60px",
        duration: 0.5
    })
    .from(['#page1 h1', '#page1 h2'], {
        opacity: 0,
        scale: 1.2,
        duration: 0.5
    })
    .from('#page1 p', {
        opacity: 0,
        y: 20,
    })
    .to('#page1 #arrow', {
        y: 30,
        yoyo: true,
        repeat: "-1"
    })


gsap.to('#nav', {
    backgroundColor: '#000',
    height: '90px',
    duration: 0.5,
    scrollTrigger: {
        trigger: '#nav',
        scroller: 'body',
        // markers: true,
        start: 'top -10%',
        end: 'top -11%',
        scrub: 1
    }
})
gsap.to('#main', {
    backgroundColor: '#000',
    scrollTrigger: {
        trigger: '#main',
        scroller: 'body',
        start: 'top -25%',
        end: 'top -70%',
        scrub: 3,
    }
})
gsap.from('#about-us img, #about-us-in', {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: 'body',
        // markers: true,
        start: 'top 60%',
        end: 'top 55%',
        scrub: 2
    }
})
gsap.from('#page4 h1', {
    y: '40%',
    scrollTrigger: {
        trigger: '#page4 h1',
        // markers: true,
        start: '0% 85%',
        end: 'bottom 75%',
        scrub: 2
    }
})
gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 })

const animation = gsap.to(".photo:not(:first-child)", {
    opacity: 1,
    scale: 1,
    duration: 1,
    stagger: 1
})

ScrollTrigger.create({
    trigger: "#gallery",
    start: "top 10%",
    end: "bottom bottom",
    pin: ".right",
    animation: animation,
    scrub: 2,
    // markers: true
})
