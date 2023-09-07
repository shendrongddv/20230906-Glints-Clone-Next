"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { contentBanner } from "@/content/content";
import { CardBanner } from "./card-banner";

export const SlideBanner = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
    >
      {contentBanner?.map((item) => (
        <SwiperSlide key={item.id}>
          <CardBanner label={item.label} media={item.media} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
