import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import * as React from "react";

export function useTextAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    const textElements = gsap.utils.toArray("[data-anim-fade]");

    if (textElements.length) return;

    textElements.forEach((item, i) => {
      gsap.from(item, {
        opacity: 0,
        yPercent: 50,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          toggleActions: "play none none reverse",
          id: "textAnimation",
        },
      });
    });

    return () => {
      if (textElements.length) return;

      textElements.forEach((item, i) => {
        const trigger = ScrollTrigger.getById("textAnimation");
        trigger && trigger.kill();
      });
    };
  }, []);

  React.useEffect(() => {
    const blockElements = gsap.utils.toArray("[data-anim-block]");

    if (!blockElements.length) return;

    blockElements.forEach((item, i) => {
      const childs = item.children;
      if (!childs.length) return;
      [...childs].forEach((child, i) => {
        gsap.from(child, {
          opacity: 0,
          y: 40,
          duration: 1.5,
          delay: i * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            id: "blockAnimation",
          },
        });
      });
    });

    return () => {
      if (!blockElements.length) return;

      blockElements.forEach((item, i) => {
        const trigger = ScrollTrigger.getById("blockAnimation");
        trigger && trigger.kill();
      });
    };
  }, []);
}

export const counterAnimation = (targetRef, cb) => {
  if (!targetRef) return;
  gsap.registerPlugin(ScrollTrigger);

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

export function useImageRevealAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    const imageElements = gsap.utils.toArray("[data-anim-image-reveal]");

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

    return () => {
      if (!imageElements.length) return;

      imageElements.forEach((item, i) => {
        const trigger = ScrollTrigger.getById("imageReveal");
        trigger && trigger.kill();
      });
    };
  }, []);
}
