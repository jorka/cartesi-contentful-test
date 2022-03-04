import { injectIntl } from 'gatsby-plugin-intl';
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const BlogArticles = ({ blogArticles }) => {
  const sliderRef = React.useRef(null);

  const handlePrev = React.useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = React.useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className='section' id='articles'>
      <div className='container'>
        <div className='relative md:px-6'>
          <button
            className='swiper-button-prev'
            aria-label='Previous'
            onClick={handlePrev}
          ></button>
          <button
            className='swiper-button-next'
            aria-label='Next'
            onClick={handleNext}
          ></button>
          <div className='md:px-6'>
            <Swiper
              slidesPerView={1.5}
              ref={sliderRef}
              spaceBetween={24}
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                },
                768: {
                  slidesPerView: 2.5,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {blogArticles.map((article, i) => (
                <SwiperSlide key={i}>
                  <div>
                    <a
                      href={article.url}
                      className='group'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <div className='relative aspect-video overflow-hidden'>
                        <img
                          src={article.thumbnail}
                          alt={article.title}
                          className='absolute left-0 top-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
                        />
                      </div>
                      <h3 className='mb-2 mt-4 leading-tight lg:mt-8'>
                        {article.title}
                      </h3>
                      <h5 className='mb-3 mt-2 text-xs text-gray-900 opacity-50'>
                        {article.category}
                      </h5>
                      <p className='text-xs'>
                        {`${article.description.substring(0, 150)}...`}
                      </p>
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default injectIntl(BlogArticles);
