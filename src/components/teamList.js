import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { GatsbyImage } from "gatsby-plugin-image";
import Collapse from "./collapse";

const TeamMembersList = ({ items }) => {
  return (
    <>
      <Swiper
        slidesPerView={3.5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full h-full flex flex-col justify-center items-center py-4">
              <GatsbyImage
                image={item.image.gatsbyImageData}
                alt={item.name}
                className="w-24 h-24 rounded-full"
              />
              <h3 className="mt-4">{item.name}</h3>
              <p className="text-sm">{item.position}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

const TeamList = ({ items }) => {
  console.log(items);
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
              {item.subCategory.map((item) => (
                <Collapse
                  key={item.id}
                  label={
                    <span className=" hover:text-yellow-800 transition-colors">
                      {item.categoryName}
                    </span>
                  }
                  className="py-4 lg:py-6"
                >
                  <TeamMembersList items={item.teamMembers} />
                </Collapse>
              ))}
            </>
          )}
        </Collapse>
      ))}
    </>
  );
};

export default TeamList;
