import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import DownScrollLink from "./downScrollLink";

const ImageUnderHero = ({ image, scrollTo }) => {
  return (
    <div className="container max-w-7xl">
      <div data-anim-image-reveal>
        <div>
          <GatsbyImage
            image={image}
            alt=""
            className="aspect-[1969/3500] sm:aspect-auto"
          />
        </div>
      </div>
      {scrollTo && <DownScrollLink to={scrollTo} />}
    </div>
  );
};

export default ImageUnderHero;
