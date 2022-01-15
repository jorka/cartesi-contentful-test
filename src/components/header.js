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

    gsap.to(headerRef.current, {
      yPercent: "-100",
      duration: 0.5,
      ease: "power2.inOut",
      paused: true,
      scrollTrigger: {
        id: "header",
        start: "40px top",
        end: 99999,
        trigger: headerRef.current,

        onUpdate: (self) => {
          const { direction, trigger, animation, progress } = self;

          if (direction === -1) {
            animation.reverse();
            trigger.classList.add("bg-blue-200", "text-gray-900");
            trigger.classList.remove("text-white");
          }
          if (direction === 1) {
            animation.play();
          } else if (direction === 1) {
            animation.play();
          } else if (progress === 0) {
            trigger.classList.remove("bg-blue-200", "text-gray-900");
            trigger.classList.add("text-white");
          }
        },
      },
    });
  }, [isStatic]);

  return (
    <header
      ref={headerRef}
      className={`inset-x-0 top-0 py-4 flex flex-col justify-center transition-all ease duration-500 z-40 ${
        isStatic ? "relative" : "text-white fixed"
      }`}
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
