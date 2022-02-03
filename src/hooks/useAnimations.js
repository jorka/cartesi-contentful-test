import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import * as React from "react";

export function useTextAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  return React.useEffect(() => {
    const textElements = gsap.utils.toArray("[data-anim-fade]");
    const textElementsLeft = gsap.utils.toArray("[data-anim-fade-left]");
    const textElementsRight = gsap.utils.toArray("[data-anim-fade-right]");

    if (!textElements.length) return;

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

    if (!textElementsLeft.length) return;

    textElementsLeft.forEach((item, i) => {
      gsap.from(item, {
        opacity: 0,
        xPercent: -30,
        duration: 1.5,
        scale: 0.8,

        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          toggleActions: "play none none reverse",
          id: "textAnimation",
        },
      });
    });

    if (!textElementsRight.length) return;

    textElementsRight.forEach((item, i) => {
      gsap.from(item, {
        opacity: 0,
        xPercent: 30,
        scale: 0.8,
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
  }, []);
}

export function useHeroAnimation(targetRef) {
  gsap.registerPlugin(ScrollTrigger);

  return React.useEffect(() => {
    if (!targetRef) return;

    const heroAnim = gsap
      .timeline()
      .from(targetRef, {
        scale: 1.2,
        ease: "power2.out",
        duration: 2,
        transformOrigin: "50% 50%",
      })
      .to(targetRef, {
        yPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: targetRef,
          start: "200px top",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
          id: "heroAnim",
          scrub: true,
        },
      });

    return () => {
      heroAnim.kill();
    };
  }, [targetRef]);
}

export function useDownScrollAnimation(targetRef) {
  gsap.registerPlugin(ScrollTrigger);

  return React.useEffect(() => {
    if (!targetRef) return;
    const downScrollAnim = gsap.from(targetRef, {
      opacity: 0,
      yPercent: 20,
      delay: 1,
      ease: "ease",
      scrollTrigger: {
        trigger: targetRef,
        start: "top bottom",
        end: "top 400px",
        toggleActions: "play reverse play reverse",
        // markers: true,
        id: "downScrollAnim",
      },
    });

    return () => {
      downScrollAnim.kill();
    };
  }, [targetRef]);
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

  return React.useEffect(() => {
    const imageElements = gsap.utils.toArray("[data-anim-image-reveal]");
    if (!imageElements.length) return;

    imageElements.forEach((item, i) => {
      let image = item.querySelector("div");
      gsap
        .timeline({
          scrollTrigger: {
            trigger: item,
            toggleActions: "play reverse play reverse",
          },
        })

        .from(image, {
          duration: 1.5,
          scale: 1.3,
          ease: "power2.out",
        });
    });
  }, []);
}

export function useSnapAnimations() {
  gsap.registerPlugin(ScrollTrigger);
  // only on desktop

  return React.useEffect(() => {
    const sections = gsap.utils.toArray("[data-anim-snap]");
    if (!sections.length) return;

    ScrollTrigger.matchMedia({
      "(min-width: 768px)": function () {
        sections.forEach((item, i) => {
          gsap.timeline({
            scrollTrigger: {
              trigger: item,
              toggleActions: "play reverse play reverse",
              pin: true,
              pinSpacing: false,
              pinSpacer: false,
              id: "snapAnim",
            },
          });
        });
      },
    });

    return () => {
      sections.forEach((item, i) => {
        gsap.killTweensOf(item);
      });
    };
  }, []);
}
