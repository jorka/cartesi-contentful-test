import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { GatsbyImage } from "gatsby-plugin-image";
import Collapse from "./collapse";

const TeamList = ({ items }) => {
  const team = React.useMemo(() => {
    return items.reduce((acc, item) => {
      const { category, coreTeamSubCategory } = item;

      if (coreTeamSubCategory) {
        if (!acc[category]) {
          acc[category] = {
            [coreTeamSubCategory]: [item],
          };
        } else {
          if (!acc[category][coreTeamSubCategory]) {
            acc[category][coreTeamSubCategory] = [item];
          } else {
            acc[category][coreTeamSubCategory].push(item);
          }
        }
      } else {
        if (!acc[category]) {
          acc[category] = [item];
        } else {
          acc[category].push(item);
        }
      }

      return acc;
    }, {});
  }, [items]);

  return (
    <>
      {Object.keys(team).map((category, index) => {
        const items = team[category];
        return (
          <div key={index}>
            <h2>{category}</h2>
            {Object.keys(items).map((subCategory, index) => {
              const items = team[category][subCategory];
              return (
                <div key={index}>
                  <h3>{subCategory}</h3>
                  <Collapse items={items} />
                </div>
              );
            })}
          </div>
        );
      })}
      <Collapse
        label={
          <span className="text-lg hover:text-blue-200 transition-colors">
            Scalable
          </span>
        }
        className="border-b py-4 lg:py-6"
      >
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
      </Collapse>
    </>
  );
};

export default TeamList;
