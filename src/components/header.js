import * as React from "react";
import { ScrollTrigger, Tween } from "react-gsap";
import Navigation from "./navigation";
import Logo from "./logo";

const Header = () => {
  return (
    <ScrollTrigger
      start="top top"
      end="99999"
      onUpdate={(self) => {
        self.direction === 1 ? self.animation.play() : self.animation.reverse();

        if (self.direction === -1 && self.isActive) {
          self.trigger.classList.add("bg-white", "text-gray-900", "shadow");
          self.trigger.classList.remove("text-white");
        } else {
          self.trigger.classList.remove("bg-white", "text-gray-900", "shadow");
          self.trigger.classList.add("text-white");
        }
      }}
    >
      <Tween
        to={{
          yPercent: -100,
          paused: true,
        }}
        duration={0.2}
      >
        <header
          className={`text-white fixed inset-x-0 top-0 py-4 flex flex-col justify-center transition-all ease-in-out duration-500 z-40 `}
        >
          <div className="container">
            <div className="flex justify-between items-center">
              <Logo />
              <Navigation />
            </div>
          </div>
        </header>
      </Tween>
    </ScrollTrigger>
  );
};
export default Header;
