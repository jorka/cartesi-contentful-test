import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import { ScrollTrigger, Tween } from "react-gsap";

const Hero = ({ title, image }) => {
  return (
    <div className="h-screen overflow-hidden bg-gray-800 text-white grid content-center justify-center relative">
      <ScrollTrigger start="top top" end="bottom top" scrub={0.5}>
        <Tween
          to={{
            y: "20%",
          }}
        >
          <div className="absolute inset-0 grid place-content-center z-10">
            <h1 className=" font-serif text-4xl">{title}</h1>
          </div>
        </Tween>
        <Tween
          to={{
            opacity: "0.6",
            translateY: "10%",
            scale: "1.1",
          }}
        >
          <div className="z-0 absolute inset-0">
            <GatsbyImage
              image={image.src}
              alt={image.alt}
              className="left-0 top-0 object-cover w-full h-full"
            />
            <div className="absolute left-0 top-0 object-cover w-full h-full z-10 bg-gray-800 bg-blend-multiply bg-opacity-30" />
          </div>
        </Tween>
      </ScrollTrigger>
    </div>
  );
};
export default Hero;
