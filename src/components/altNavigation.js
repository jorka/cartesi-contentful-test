import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function AltNavigation({ children, ...rest }) {
  gsap.registerPlugin(ScrollTrigger);

  const overflowRef = React.useRef(null);
  const overflowRefInner = React.useRef(null);

  React.useEffect(() => {
    const overflowEl = overflowRef.current;
    const overflowElInner = overflowRefInner.current;

    const links = gsap.utils.toArray(overflowElInner.children);

    gsap.from(links, {
      x: "-100%",
      opacity: 0,
      duration: 1.2,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: overflowEl,
        start: "top 90%",
        id: "altNavigation",
      },
    });
  }, []);

  return (
    <div {...rest} ref={overflowRef}>
      <div
        className="flex justify-between gap-8 overflow-hidden py-6 pr-4 font-light"
        ref={overflowRefInner}
      >
        {children}
      </div>
    </div>
  );
}
