import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import * as React from "react";
gsap.registerPlugin(ScrollTrigger);

export function useAnimations() {
  return React.useLayoutEffect(() => {
    console.log("useTextAnimations");
    const blockElements = gsap.utils.toArray("[data-anim-block]");
    const imageElements = gsap.utils.toArray("[data-anim-image-reveal]");

    blockElements.forEach((item, i) => {
      const childs = item.children;
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          id: "blockAnimation",
        },
      });
      tl.from(childs, {
        opacity: 0,
        y: 40,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.2,
      });
    });

    if (!imageElements.length) return;

    imageElements.forEach((item, i) => {
      let childDiv = item.querySelector("div");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          id: "imageReveal",
        },
      });

      tl.set(item, {
        autoAlpha: 1,
        overflow: "hidden",
      })
        .from(item, {
          xPercent: -100,
          ease: "power2.out",
          duration: 1.5,
        })
        .from(childDiv, {
          xPercent: 100,
          ease: "power2.out",
          duration: 1.5,
          scale: 1.3,
          delay: -1.5,
        });
    });
  }, []);
}

export const counterAnimation = (targetRef, cb) => {
  if (!targetRef) return;

  gsap.from(targetRef, {
    textContent: 0,
    duration: 4,
    ease: "power1.in",
    snap: { textContent: 1 },
    stagger: {
      each: 1.0,
      onUpdate: () => {
        cb();
      },
    },
    scrollTrigger: {
      trigger: targetRef,
      // markers: true,
      id: "counter",
    },
  });
};
