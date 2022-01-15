import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import DownScrollLink from "./downScrollLink";

const Hero = ({ title, image, sectionLinkTo }) => {
  return (
    <div className="h-screen overflow-hidden bg-gray-800 text-white grid content-center justify-center relative">
      <div className="z-0 absolute inset-0">
        <GatsbyImage
          image={image.src}
          alt={image.alt}
          className="left-0 top-0 object-cover w-full h-full"
        />

        {sectionLinkTo && <DownScrollLink to={sectionLinkTo} />}

        {/* <div className="absolute left-0 top-0 object-cover w-full h-full z-10 bg-gray-800 bg-blend-multiply bg-opacity-30" /> */}
      </div>
    </div>
  );
};
export default Hero;
