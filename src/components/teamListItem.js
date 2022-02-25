import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
SwiperCore.use([Pagination, Navigation]);

const TeamListItem = ({ items, category }) => {
  const imagePathFromName = (name, category) => {
    const nameFormatted = name.toLowerCase().replace(/\s/g, "-");
    const categoryFormatted = category
      .toLowerCase()
      .replace(/\s/g, "-")
      .replace(/&/g, "and")
      .replace(/á/g, "a");
    return `/team/${categoryFormatted}/${nameFormatted}.png`;
  };

  return (
    <>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={8}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 3.5,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div>
              <a
                href={item.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="relative h-16 w-16 overflow-hidden rounded-full transition-transform duration-500 group-hover:scale-105 sm:h-24 sm:w-24">
                  <div className="absolute h-full w-full transition-transform duration-500 group-hover:scale-125">
                    <img
                      src={imagePathFromName(item.name, category)}
                      alt={item.name}
                      className="absolute left-0 top-0 h-full w-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="mt-4 mb-1">{item.name}</h3>
                <p className="text-xs leading-none opacity-50 sm:text-sm">
                  {item.position}
                </p>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TeamListItem;
