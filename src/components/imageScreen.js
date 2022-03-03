import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const ImageScreen = ({ image }) => {
  return (
    <div className="bg-gray-900">
      <div
        className="relative h-screen overflow-hidden "
        data-anim-image-reveal
      >
        <GatsbyImage
          image={image}
          className="left-0 top-0 h-full w-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default ImageScreen;
