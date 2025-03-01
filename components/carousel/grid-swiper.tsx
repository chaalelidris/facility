"use client";
import React, { Children } from "react";
import { Autoplay, Grid, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface GridSwiperProps {
  children?: React.ReactNode;
}

const GridSwiper = ({ children }: GridSwiperProps) => {
  return (
    <Swiper
      autoplay={{
        delay: 2000,
      }}
      slidesPerView={2} // Number of columns in the grid
      grid={{
        rows: 2, // Number of rows in the grid
        fill: "row", // Fill rows first before moving to the next column
      }}
      spaceBetween={20}
      pagination={{ clickable: true }}
      modules={[Grid, Pagination, Autoplay]}
      className="!py-6 !px-4 h-full"
      // Optional: Add breakpoints for responsive design
      breakpoints={{
        640: {
          slidesPerView: 3,
          grid: {
            rows: 2,
          },
        },
        1024: {
          slidesPerView: 4,
          grid: {
            rows: 2,
          },
        },
      }}
    >
      {children
        ? Children.map(children, (child, index) => (
            <SwiperSlide key={index}>{child}</SwiperSlide>
          ))
        : null}
    </Swiper>
  );
};

export default GridSwiper;
