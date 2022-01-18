import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import { useHeroAnimation } from "../hooks/useAnimations";
import DownScrollLink from "./downScrollLink";

const Hero = ({ image, sectionLinkTo, children }) => {
  const heroRef = React.useRef(null);

  useHeroAnimation(heroRef.current);

  return (
    <div className="h-screen overflow-hidden bg-gray-800 text-white grid content-center justify-center relative">
      {children}
      <div className="z-0 absolute inset-0 overflow-hidden" ref={heroRef}>
        <GatsbyImage
          image={image.src}
          alt={image.alt}
          className="left-0 top-0 object-cover w-full h-full"
        />
        {/* <div className="absolute left-0 top-0 object-cover w-full h-full z-10 bg-gray-800 bg-blend-multiply bg-opacity-30" /> */}
      </div>
      {sectionLinkTo && <DownScrollLink to={sectionLinkTo} />}
    </div>
  );
};
export default Hero;
