import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { GatsbyImage } from "gatsby-plugin-image";
import Collapse from "./collapse";
SwiperCore.use([Pagination, Navigation]);

const TeamMembersList = ({ items }) => {
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
            <div className="flex flex-col justify-center items-center py-12 text-center group">
              <div className="rounded-full w-16 sm:w-24 h-16 sm:h-24 overflow-hidden transition-transform group-hover:scale-110  duration-500">
                <GatsbyImage
                  image={item.image.gatsbyImageData}
                  alt={item.name}
                  imgStyle={{ borderRadius: "50%" }}
                  className="w-16 sm:w-24 h-16 sm:h-24 rounded-full transition-transform group-hover:scale-125 duration-700 overflow-hidden"
                />
              </div>
              <h3 className="mt-4 mb-1">{item.name}</h3>
              <p className="text-xs sm:text-sm leading-none opacity-50">
                {item.position}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

const TeamList = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <Collapse
          key={item.id}
          label={
            <span className="text-lg hover:text-yellow-800 transition-colors">
              {item.categoryName}
            </span>
          }
          className="border-b border-gray-900 py-4 lg:py-6"
        >
          {item.teamMembers && <TeamMembersList items={item.teamMembers} />}
          {item.subCategory && (
            <>
              <div className="py-6">
                {item.subCategory.map((item) => (
                  <Collapse
                    key={item.id}
                    label={
                      <span className=" hover:text-yellow-800 transition-colors">
                        {item.categoryName}
                      </span>
                    }
                    className="py-4"
                  >
                    <TeamMembersList items={item.teamMembers} />
                  </Collapse>
                ))}
              </div>
            </>
          )}
        </Collapse>
      ))}
    </>
  );
};

export default TeamList;
