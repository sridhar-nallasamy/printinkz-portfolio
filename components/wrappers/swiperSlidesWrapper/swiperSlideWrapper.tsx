'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Import Swiper modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from '@/assets/icons';
import { SwiperSliderWrapperComponentProps } from '@/types/components';

import './index.css';

const SwiperSlideWrapper: React.FC<SwiperSliderWrapperComponentProps> = ({
  sliderContent,
  sliderComponent: SliderComponent,
}) => {
  return (
    <div className="container">
      <Swiper
        className="swiper-container"
        effect={'coverflow'}
        grabCursor={true}
        loop={true}
        slidesPerView={'auto'}
        centeredSlides={true}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 250,
          modifier: 1,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {/* Slider Contents */}
        {sliderContent.map((content, index) => (
          <SwiperSlide key={index} className="min-h-full swiper-slide relative">
            <SliderComponent data={content} index={index} />
          </SwiperSlide>
        ))}
        <div className="slider-controller">
          <div className="swiper-button-prev text-black hover:text-[#00774D] hover:cursor-pointer">
            <ChevronLeft />
          </div>
          <div className="swiper-button-next text-black hover:text-[#00774D] hover:cursor-pointer">
            <ChevronRight />
          </div>
          <div className="swiper-pagination" id=""></div>
        </div>
      </Swiper>
    </div>
  );
};

export default SwiperSlideWrapper;
