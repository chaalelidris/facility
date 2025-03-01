"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css/effect-coverflow";
import { Children } from "react";

interface CoverflowSwiperProps {
  children?: React.ReactNode;
}

const CoverflowSwiper = ({ children }: CoverflowSwiperProps) => {
  return (
    <Swiper
      effect={"coverflow"} // Enable coverflow effect
      grabCursor={true} // Enable cursor grabbing for better UX
      centeredSlides={true} // Center active slide
      slidesPerView={4} // Show 3 slides at a time (adjust as needed)
      spaceBetween={40} // Add spacing between slides
      coverflowEffect={{
        rotate: 0, // No rotation
        stretch: 0, // No stretching
        depth: 80, // Depth for 3D effect
        modifier: 1, // Scale factor for effect intensity
        slideShadows: false, // Disable shadows for cleaner design
      }}
      modules={[EffectCoverflow]} // Include the required module
      className="!py-6"
      loop={true}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        400: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2.5,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
    >
      {Children.map(children, (child) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CoverflowSwiper;
