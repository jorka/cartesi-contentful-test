import * as React from "react";
import Navigation from "./navigation";
import Logo from "./logo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Header = () => {
  const headerRef = React.useRef(null);

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(headerRef.current, {
      yPercent: "-100",
      duration: 0.5,
      ease: "ease",
      paused: true,
      scrollTrigger: {
        start: "10px top",
        end: 99999,
        trigger: headerRef.current,
        onUpdate: ({ isActive, direction, trigger, animation }) => {
          if (direction === -1) {
            animation.reverse();
            trigger.classList.add("bg-blue-200", "text-gray-900");
            trigger.classList.remove("text-white");
          }
          if (direction === 1) {
            animation.play();
          } else if (direction === 1 && isActive === true) {
            animation.play();
          } else if (!isActive) {
            trigger.classList.remove("bg-blue-200", "text-gray-900");
            trigger.classList.add("text-white");
          }
        },
      },
    });
  }, []);

  return (
    <header
      ref={headerRef}
      className="text-white fixed inset-x-0 top-0 py-4 flex flex-col justify-center transition-all ease duration-500 z-40"
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
