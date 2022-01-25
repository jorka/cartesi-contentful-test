import * as React from "react";
import Navigation from "./navigation";
import Logo from "./logo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Header = ({ isStatic }) => {
  const headerRef = React.useRef(null);

  React.useEffect(() => {
    if (isStatic) return;
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh(true);

    const scrolledUpClasses = ["is-scrolled"];
    const defaultClasses = ["is-transparent"];

    const headerAnim = gsap.to(headerRef.current, {
      yPercent: "-100",
      duration: 0.5,
      ease: "power2.inOut",
      paused: true,
      scrollTrigger: {
        id: "header",
        start: "40px top",
        end: 99999,
        trigger: headerRef.current,
        forse3D: true,

        onUpdate: (self) => {
          const { direction, trigger, animation, isActive } = self;

          if (!isActive) {
            trigger.classList.remove(scrolledUpClasses);
            trigger.classList.add(defaultClasses);
          } else if (direction === -1) {
            trigger.classList.add(scrolledUpClasses);
            trigger.classList.remove(defaultClasses);
            animation.reverse();
          } else if (direction === 1) {
            animation.play();
          }
        },
      },
    });

    return () => {
      headerAnim.kill();
    };
  }, [isStatic]);

  return (
    <header
      ref={headerRef}
      className={`header ${isStatic ? "is-static" : "is-transparent"}`}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  );
};
export default Header;
