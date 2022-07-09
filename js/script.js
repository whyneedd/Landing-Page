
 var tl;

 tl = gsap.timeline({defaults: {ease: "power1.out"}});

 tl.to(".logo a", {y: "0%", duration: .5 })
 tl.to(".nav-link", {y: "0%", duration: .5, stagger: 0.25 })

 tl.to(".text__title", {opacity: 1, y: "0%", duration: .5, stagger: 0.25 })
 tl.to(".text__description", {opacity: 1, y: "0%", duration: .5, stagger: 0.25 })
 tl.to(".content__btn", {opacity: 1, y: "0%", duration: .5, stagger: 0.25 })
 tl.to(".img", {opacity: 1, x: "0%", duration: .5, stagger: 0.25 })

