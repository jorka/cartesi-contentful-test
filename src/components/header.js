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

    const scrolledUpClasses = ["bg-blue-200", "text-gray-900"];
    const defaultClasses = ["text-white", "bg-transparent"];

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
        scrub: false,

        onUpdate: (self) => {
          const { direction, trigger, animation, progress } = self;
          if (direction === -1) {
            animation.reverse();
            trigger.classList.add(...scrolledUpClasses);
            trigger.classList.remove(...defaultClasses);
          }
          if (direction === 1) {
            animation.play();
          } else if (direction === 1) {
            animation.play();
          } else if (progress === 0) {
            trigger.classList.remove(...scrolledUpClasses);
            trigger.classList.add(...defaultClasses);
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
      className={`inset-x-0 top-0 py-4 lg:py-8 flex flex-col justify-center transition-all ease duration-500 z-40 ${
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
