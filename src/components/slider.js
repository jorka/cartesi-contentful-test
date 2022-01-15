import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { GatsbyImage } from "gatsby-plugin-image";

const Slider = ({ items }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="w-full h-full flex flex-col justify-center items-center">
            <GatsbyImage image={item.image.gatsbyImageData} alt={item.name} />
            <h3 className="text-center text-lg font-bold">{item.name}</h3>
            <h3 className="text-center font-bold">{item.position}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
