import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

export const crownAnimation = () => {
  const crown = document.querySelector("#crownImg");
  const ww = window.innerWidth;
  let requestId;

  const path01 = [{ x: "100%" , y: 0 }];

  var action = gsap
    .timeline({ paused: true })
    .set(crown, { x: -ww, autoAlpha: 1 })
    .to(crown, {
      motionPath: {
        path: path01,
        start: "top center"
      },
      // duration: 1,
    //   rotation: 360 * 4,

    });

  const startY = 0;

  const finishDistance = "100%";
  document.addEventListener("scroll", function () {
    if (!requestId) {
      requestId = requestAnimationFrame(update);
    }
  });

  update();

  function update() {
    action.progress((window.scrollY - startY) / finishDistance);
    requestId = null;
  }
};
