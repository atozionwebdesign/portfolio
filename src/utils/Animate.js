import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Observer } from "gsap/Observer";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(
  MotionPathPlugin,
  ScrollTrigger,
  SplitText,
  Observer,
  ScrollSmoother
);

/**** Navigation *****/
export const navAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#homeDiv",
      start: "top top",
      toggleActions: "play none none reverse",
    },
    ease: "power4.out",
  });

  return tl
    .addLabel("start")
    .to(".navbar", { width: "95%", borderColor: "transparent" })
    .to("#tagline", { opacity: 0 }, "<")
    .addLabel("end");
};

/**** HOME PAGE ****/
/* Home Loader */
const quoteAnimation = () => {
  const splitText = new SplitText("#quoteText", {
      type: "words, lines",
      reduceWhiteSpace: false,
    }),
    splitDots = new SplitText("#quoteDots", { type: "chars" }),
    splitTextTimeline = gsap.timeline();

  return splitTextTimeline

    .from(splitText.words, {
      duration: 1.5,
      opacity: 0,
      ease: "power4.inOut",
      stagger: 0.3,
    })
    .from(
      splitDots.chars,
      {
        duration: 1.5,
        opacity: 0,
        ease: "power4.inOut",
        stagger: 0.4,
      },
      "-=0.3"
    )
    .to("#quote", { opacity: 0 }, "+=1");
};

const barAnimation = () => {
  return gsap
    .timeline()
    .to(".bar", {
      height: 0,
      stagger: {
        amount: 1,
      },
      ease: "power4.inOut",
    })
    .to(".overlay, #quote", {
      width: 0,
      height: 0,
    });
};

/* Header Section*/
const headerScene1 = () => {
  const tl = gsap.timeline();

  const splitTitle = new SplitText("#titleDiv", {
    type: "words, lines",
    reduceWhiteSpace: false,
  });

  const splitTo = new SplitText("#toTitle", {
    type: "words",
  });

  const splitComputerText = new SplitText("#computerText", {
    type: "chars, words",
  });

  const splitComputerTl = gsap.timeline().from(splitComputerText.chars, {
    opacity: 0,
    stagger: 0.2,
    ease: "bounce",
  });

  const crownTl = gsap
    .timeline({ repeat: -1 })
    .to("#crown", { x: "-8vw", delay: 1 })
    .to("#crown", { rotate: -45, y: "1vh" })
    .to("#crown", { rotate: 0, delay: 1, y: 0 })
    .to("#crown", { x: "8vw" })
    .to("#crown", { rotate: 45, y: "1vh" })
    .to("#crown", { rotate: 0, delay: 1, y: 0 })
    .to("#crown", { x: 0 });

  const mainTl = tl
    .to("#computer", {
      opacity: 1,
      scale: 3,
      ease: "power4.inOut",
      rotation: 360,
    })
    .to("#computer", { scale: 1 })
    .from(
      splitTitle.words,
      {
        opacity: 0,
        y: "5vh",
        stagger: 0.2,
        ease: "elastic",
      },
      "-=0.5"
    )
    .fromTo(
      "#subtitleDiv",
      { opacity: 0 },
      { opacity: 1, ease: "slow", duration: 1 }
    )
    .to("#crown", { opacity: 1 })
    .fromTo(".navbar", { opacity: 0 }, { opacity: 1, ease: "slow" })
    .fromTo(
      "#recentDiv",
      { opacity: 0, x: "-20vw" },
      { opacity: 1, x: "0", ease: "bounce" },
      "<"
    )
    .addLabel("loaded")
    .add(splitComputerTl, "loaded+=0.2")
    .add(crownTl)
    .to(
      splitTo.words,
      {
        rotateX: 360,
        repeat: -1,
        duration: 6,
        ease: "expo.out",
        delay: 1,
      },
      "<0.2"
    );
  return mainTl;
};

export const headerAnimation = () => {
  const tl = gsap.timeline().add(headerScene1);
  return tl;
};

/* Home Intro */
export const homeAnimation = () => {
  const mainTl = gsap
    .timeline()
    .add(quoteAnimation())
    .add(barAnimation())
    .add(headerScene1());

  return mainTl;
};

/* About Section */
const aboutQuoteAnimation = () => {
  const splitQuoteText = new SplitText("#aboutQuoteText", {
    type: "words, lines",
    reduceWhiteSpace: false,
  });

  const tl1 = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        end: "top 5%",
        scrub: true,
      },
    })
    .fromTo(
      "#aboutQuoteText .fade",
      {
        // x: "-10vw",/
        opacity: 0,
      },
      {
        // x: 0,
        opacity: 1,
        ease: "slow",
        stagger: 0.2,
      }
    );

  const tl2 = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#about",
        pin: "#aboutQuoteText",
        start: "top top",
        end: "1000",
        scrub: true,
      },
    })
    .to(splitQuoteText.words, {
      y: "-25vh",
      x: "10vh",
      rotate: "10%",
      stagger: 0.01,
      ease: "power1.inOut",
      delay: 0.5,
    })
    .to(
      splitQuoteText.words,
      {
        opacity: 0,
        // stagger: 0.01,
      },
      "<"
    );

  const mainTl = gsap.timeline().add(tl1).add(tl2);

  return mainTl;
};

const aboutNarrativeAnimation = () => {
  const tl1 = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#narrativeAnimate",
        start: "top bottom",
        end: "top 50%",
        scrub: true,
      },
    })
    .fromTo(
      "#narrativeAnimate",
      {
        // x: "-10vw",/
        opacity: 0,
      },
      {
        // x: 0,
        opacity: 1,
        ease: "slow",
        stagger: 0.3,
      }
    );

  const tl2 = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#aboutNarrativeContainer",
        pin: "#aboutNarrativeContainer",
        start: "top top",
        end: "2500",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    })
    .to(".narrativeClear", {
      opacity: 0,
      duration: 5,
      delay: 3,
      ease: "slow",
    })
    .fromTo(
      "#aboutTagline",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "slow",
      },
      "<"
    )
    .add(animateMove, "<0.1")
    .to(
      "#a, #z",
      {
        scale: 4,
      },
      "<"
    )
    .to(
      "#arrow",
      {
        scale: 6,
        transformOrigin: "middle",
      },
      ">2"
    )
    .fromTo(
      "#aboutCrown",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "slow",
        duration: 3,
      },
      ">"
    )
    .to("#aboutTagline", {
      opacity: 1,
      duration: 5,
    });
  const mainTl = gsap.timeline().add(tl2).add(tl1, "<");

  return mainTl;
};

const animateMove = () => {
  console.log("animateMove");
  let a = document.querySelector("#a");
  let aTarget = document.querySelector("#aTarget");

  let z = document.querySelector("#z");
  let zTarget = document.querySelector("#zTarget");

  let arrow = document.querySelector("#arrow");
  let arrowTarget = document.querySelector("#arrowTarget");

  let tl = gsap
    .timeline()
    .to("#a", {
      x: aTarget.getBoundingClientRect().x - a.getBoundingClientRect().x,
      y: aTarget.getBoundingClientRect().y - a.getBoundingClientRect().y,
    })
    .to(
      "#z",
      {
        x: zTarget.getBoundingClientRect().x - z.getBoundingClientRect().x,
        y: zTarget.getBoundingClientRect().y - z.getBoundingClientRect().y,
      },
      "<"
    )
    .to(
      "#arrow",
      {
        x:
          arrowTarget.getBoundingClientRect().x -
          arrow.getBoundingClientRect().x,
        y:
          arrowTarget.getBoundingClientRect().y -
          arrow.getBoundingClientRect().y,
      },
      "<"
    );

  return tl;
};

export const aboutAnimation = () => {
  const mainTl = gsap
    .timeline()
    .add(aboutQuoteAnimation())
    .add(aboutNarrativeAnimation(), ">");

  return mainTl;
};

/**** SERVICES PAGE ****/
const servicesHeaderAnimation = () => {
  const split1 = new SplitText("#servicesHeader1", {
    type: "chars",
    reduceWhiteSpace: false,
  });

  const split2 = new SplitText("#servicesHeader2", {
    type: "words, chars",
    reduceWhiteSpace: false,
  });

  const gearAnimation = () => {
    const tl = gsap
      .timeline()
      .fromTo(
        "#gear",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: "slow",
          duration: 2,
        }
      )
      .to("#gear", {
        rotateZ: 180,
        repeat: 1,
        duration: 2,
        // delay: 1,
        ease: "expo.out",
      });

    return tl;
  };

  const brushAnimation = () => {
    return gsap.fromTo(
      "#paintBrush",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        ease: "slow",
      }
    );
  };

  const tl1 = gsap
    .timeline({})
    .from(split1.chars, {
      opacity: 0,
      x: "-5vw",
      duration: 2,
      ease: "slow",
    })
    .add(brushAnimation(), "<50%")
    .add(gearAnimation(), "<0.2")
    .to(split1.chars, {
      opacity: 0,
      x: "5vw",
      duration: 2,
    })
    .to(
      "#paintBrush, #gear",
      {
        opacity: 0,
        duration: 1,
        ease: "slow",
      },
      "<"
    );

  const lightbulbAnimation = () => {
    return gsap.timeline().fromTo(
      "#lightbulb",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "slow",
        duration: 2,
      }
    );
  };

  const bullhornAnimation = () => {
    return gsap.fromTo(
      "#bullhorn",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        ease: "slow",
      }
    );
  };

  const tl2 = gsap
    .timeline()
    .from(split2.chars, {
      opacity: 0,
      x: "-5vw",
      duration: 2,
      ease: "slow",
    })
    .add(lightbulbAnimation(), "<60%")
    .add(bullhornAnimation(), "<50%")
    .fromTo(
      "#lightbulb",
      {
        scale: 1,
      },
      {
        scale: 1.1,
        duration: 1,
        ease: "expo.out",
      }
    )
    .to(split2.chars, {
      opacity: 0,
      x: "5vw",
      duration: 1,
    })
    .to(
      "#lightbulb, #bullhorn",
      {
        opacity: 0,
        duration: 1,
        ease: "slow",
      },
      "<"
    );

  const mainTl = gsap
    .timeline({
      repeat: -1,
    })
    .add(tl1)
    .add(tl2);
  return mainTl;
};

const servicesContentAnimation = () => {
  const tl1 = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#servicesContent",
        // pin: "#servicesContent",
        start: "top 50%",
        end: "bottom bottom",
        scrub: true,
      },
    })
    .fromTo(
      "#servicesLogic",
      {
        x: "-10vw",
        opacity: 0,
      },
      {
        ease: "power1.In",
        x: 0,
        duration: 1,
        opacity: 1,
      }
    )
    .fromTo(
      "#servicesPlus",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "slow",
      }
    )
    .fromTo(
      "#servicesImagination",
      {
        x: "10vw",
        opacity: 0,
      },
      {
        ease: "power1.In",
        x: 0,
        duration: 1,
        opacity: 1,
      },
      "<0.5"
    )
    .fromTo(
      "#servicesQuote",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "slow",
        duration: 2,
      },
      ">0.2"
    );

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#servicesContent",
      pin: "#servicesContent",
      start: "top top",
      end: "300",
      scrub: true,
      anticipatePin: true
    },
  });
  const mainTl = gsap.timeline().add(tl1);

  return mainTl;
};

export const servicesAnimation = () => {
  const mainTl = gsap
    .timeline()
    .add(servicesHeaderAnimation())
    .add(servicesContentAnimation());
  return mainTl;
};
