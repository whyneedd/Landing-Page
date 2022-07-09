 const ActiveNavBar = () => {
    window.addEventListener("scroll", function() {
        if (this.scrollY > 0) {
            document.querySelector(".js-header").classList.add("active");
        } else {
            document.querySelector(".js-header").classList.remove("active");

        }
    })
    
 }
 ActiveNavBar();

 var tl;

 tl = gsap.timeline({defaults: {ease: "power1.out"}});

 tl.to(".logo a", {y: "0%", duration: .5 })
 tl.to(".nav-link", {y: "0%", duration: .5, stagger: 0.25 })

 tl.to(".text__title", {opacity: 1, y: "0%", duration: .5, stagger: 0.25 })
 tl.to(".text__description", {opacity: 1, y: "0%", duration: .5, stagger: 0.25 })
 tl.to(".content__btn", {opacity: 1, y: "0%", duration: .5, stagger: 0.25 })

