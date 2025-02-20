// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// Initialize Locomotive Scroll
// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector('[data-scroll-container]'),
//   smooth: true,
// });

// Sync ScrollTrigger with Locomotive Scroll
// locoScroll.on('scroll', ScrollTrigger.update);
// ScrollTrigger.scrollerProxy('[data-scroll-container]', {
//   scrollTop(value) {
//     return arguments.length
//       ? locoScroll.scrollTo(value, 0, 0)
//       : locoScroll.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {
//       top: 0, left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };
//   },
//   pinType: 'transform',
// });

// Refresh ScrollTrigger
// ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
// ScrollTrigger.refresh();





let tl = gsap.timeline()

gsap.from(".top-bar .icon", {
    y: -100,
    opacity: 0,
    duration: 2,
    ease: "power3.out"
})

gsap.from(".social", {
    x: "100%",
    opacity: 0,
    duration: 2,
    ease: "power3.out"
})
gsap.from(".social .navigations i", {
    opacity: 0,
    duration: 2,
    delay: 0,
    ease: "power2"
})
gsap.to(".box", {
    x: "0%",
    duration: 3,
    ease: "power3.out",
})

gsap.from(".box .content", {
    opacity: 0,
    duration: 2,
    delay: 1,
    ease: "power3.out"
})
gsap.from("nav", {
    x: "100%",
    opacity: 0,
    duration: 2,
    ease: "power4.out"
})


  // Mobile Scroll Effect
function mobileGsap() {
    gsap.to(".services .container", {
        x: "-40%", // Use 'x' for horizontal translation
        scrollTrigger: {
          trigger: ".services ",
          // scroller: "[data-scroll-container]",
          scroller: "main",
          start: "top 0%",
          end: "top -100%",
          scrub: 2,
          pin: true,
        },
      });
  }

  // Viewport Check
  if (window.innerWidth <= 768) {
    mobileGsap();
  } else {
    gsap.to(".services .container", {
        x: "-20%", // Use 'x' for horizontal translation
        scrollTrigger: {
          trigger: ".services ",
          // scroller: "[data-scroll-container]",
          scroller: "main",
          start: "top 0%",
          end: "top -100%",
          scrub: 2,
          pin: true,
        },
      });
  }

