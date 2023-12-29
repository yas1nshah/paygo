// Ensure DOM content is loaded before running the script

gsap.registerPlugin(ScrollTrigger);


var hero = gsap.timeline(
    {
         defaults: { duration: 1, ease: "power4.inOut" }
    }
)
hero.from(
        "#hero-text span",
        {
            opacity:0,
            x: -50,
            stagger:0.2,
        }
        ,0
    )
    .from(
        '.hero-section .hero-call-to-action',
        {
            opacity:0,
            x:-100,
            
        }
        ,0.5
    )
    .from(
        "#card1",
        {
            opacity:0,
            x:"-50%",
            rotation: 50,
            duration:1 ,
            ease: 'back.inOut(1.7)'
        }
            ,"0.5"
    )
    .from(
        "#card2",
        {
            opacity:0,
            x:"50%",
            rotation: -20,
            duration:1,
            ease: 'back.inOut(1.7)'
        }
            , ">-0.7"
    )
    .from("#card3",
        {
            opacity:0,
            x:"50%",
            y:"20%",
            rotation: 20,
            duration:1,
            ease: 'back.inOut(1.7)'
        }
        , ">-0.8"
    )
    .from(
        ".dp",
        {
            opacity: 0,
            stagger:0.3,
            ease: 'power2.out',
            x: 100,
            duration:0.8,
            scrollTrigger: ".hero-section",
        },
        "<1"
    )
    .from(
        ".text",
        {
            opacity: 0,
            width:0,
            borderRadius: "100% 100%",
            stagger:0.2,
            ease: 'power2.out',
            x: 20,
            duration:0.5
        },">-0.5"
    )
    .from(
        ".pp",
        {
            opacity: 0,
            stagger:0.2,
            ease: 'power2.out',
            x: 20,
            duration:1
        }
        ,">-0.5"
    )
    .from(
        ".p-collection",
        {
            opacity: 0,
            ease: 'power2.out',
            x: 20,
            duration:0.5
        }
    )
    .from(
        "#card-badge",
        {
            opacity: 0,
            ease: 'power2.out',
            x: 50,
            duration:1
        },">-0.5"
    )
    .from(
        "#card-description span",
        {
            opacity:0,
            x: -50,
            stagger:0.2,
        }
        ,""
    )

gsap.to("#card-badge", {
    rotation: 360,
    repeat: -1, 
    duration: 5, 
    ease: 'linear'
});
gsap.from(
    ".p-collection .arrow img",
    {
        repeat:-1,
        scale:1.2,
        yoyo:true,

    }
)





var stats = gsap.timeline(
    {
        scrollTrigger: {
            trigger: ".statistics-section",
            start: "top center", // when the top of the trigger hits the top of the viewport
          },
    }
)
stats.from(".statistic-block",{opacity: 0, x: "-50%",stagger:0.2})


var adv = gsap.timeline(
    {
        scrollTrigger: {
            trigger: ".advantages-section",
            start: "top center",
          },
    }
);

adv.from
    (
        "#adv-title span",
        {
            opacity: 0,
            duration: 0.5,
            stagger: 0.2,
            ease: 'power2.out'
        }   
    )

.from
    (
        ".advantage-description",
        {
            opacity: 0,
            x: -50,
            duration: 1,
            stagger: 0.2,
            ease: 'power2.out'
        }
        , ">-0.5"
    )
.from
    (
        ".advantages-section .hero-call-to-action",
        {
            opacity: 0,
            x: -50,
            duration: 1,
            stagger: 0.2,
            ease: 'power2.out'
        }
        , ">-0.5"
    )
.from
    (
    ".payment-card",
    {
        opacity:0,
        y: "50%",
        duration:1,
    }, ">" 
    )



var service = gsap.timeline(
    {
        scrollTrigger: {
            trigger: ".services-section",
            start: "top center",
          },
    }
);
service.from
    ("#srv-title",
        {
            x: -50,
            duration: 2,
            stagger: 0.2,
            ease: 'power2.out'
        }
   )

.from
    ("#srv-title span", 
        {
            opacity: 0,
            duration: 0.5,
            stagger: 0.2,
            ease: 'power2.out'
        },"-=2"
    )

.from
    (".srv-card",
        {
            rotation:-80,
            opacity:0,
            x: -100,
            y: 300,
            duration:1,
            stagger: 0.2,
            ease: 'power2.out'
        }, 1
    )
.from
    (".card-descriptions h2,.card-descriptions hr, .card-descriptions a",
        {
            opacity:0,
            y: 300,
            duration:1,
            stagger: 0.2,
            ease: 'power2.out'
        }, 0.3
    )


var pricing = gsap.timeline(
    {
        scrollTrigger: {
            trigger: ".pricing-section",
            start: "top center",
          },
    }
);
pricing.from
    (".pricing-container div",
        {
            width: 0,
            padding: 0,
            duration: 0.5,
            // stagger: 0.2,
        },0
    )
.from
    (
        ".pricing-container div", {
            y: -400,
            duration: 0.8,
            stagger: 0.2,
        },">-0.1"
    )
.from
    (".pricing-container div h2, .pricing-container div h1, .pricing-container div p",
        {
            opacity:0,
            duration:1,
        },0.5
    )
.from
    (".pricing-column .hero-title",
         {
            y: 400,
            duration: 1,
            stagger: 0.2,
        },0
    )
.from
    (".pricing-difference", 
        {
            y: 200,
            duration: 0.2,
        }
    )
.from
    ("#explore-card", 
        {
            y: 200,
            x:-400,
            rotation:-45,
            duration: 0.5,
        },">"
    )
.from
    (".difference-text div,.difference-text h2",
        {
            x:-200,
            duration: 0.5,
            opacity:0,
            stagger:0.2,
        },">-0.5"
    ); 

gsap.to(".card-collection-column", {
    scrollTrigger: {
        trigger: ".card-collection-section",
        start: "bottom bottom",
      },
    autoAlpha: 0, // Fades out the element
    x: "100vw", // Move to the right of the screen
    duration: 2,
    ease: 'power2.inOut',
    onComplete: function() {
        gsap.to(".card-collection-column", {
            autoAlpha: 0, // Keeps the element hidden during movement
            x: "-100vw", // Move back to the left
            duration: 0.1,
            ease: 'power2.inOut',
            onComplete: function() {
                gsap.to(".card-collection-column", {
                    autoAlpha: 1, // Fades in the element
                    x: 0, // Move back to the left
                    duration: 1,
                    ease: 'power2.inOut',
                });
            }
        });
    }
});