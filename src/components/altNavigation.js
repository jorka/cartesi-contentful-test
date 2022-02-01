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

    gsap.from(overflowElInner, {
      y: "-100%",
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: overflowEl,
        scrub: 0.5,
        duration: 2,
        start: "top 80%",
        end: "bottom 70%",
        id: "altNavigation",
      },
    });
  }, []);

  return (
    <div {...rest} ref={overflowRef}>
      <div className="overflow-y-hidden overflow-x-visible">
        <div className="py-6 pr-4" ref={overflowRefInner}>
          {children}
        </div>
      </div>
    </div>
  );
}
