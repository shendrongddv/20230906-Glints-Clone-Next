"use client";

import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Promotions } from "@/config/dummy";

export const SPromotion = () => {
  const items = Promotions;

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      loop
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      centeredSlides={true}
      slidesPerView="auto"
      spaceBetween={0}
      // navigation
      // pagination={{ clickable: true }}
      // breakpoints={{
      //   360: {
      //     slidesPerView: "auto",
      //     spaceBetween: 0,
      //   },
      //   640: {
      //     slidesPerView: "auto",
      //     spaceBetween: 0,
      //   },
      //   768: {
      //     slidesPerView: "auto",
      //     spaceBetween: 0,
      //   },
      //   1024: {
      //     slidesPerView: "auto",
      //     spaceBetween: 0,
      //   },

      //   1140: {
      //     slidesPerView: "auto",
      //     spaceBetween: 0,
      //   },
      // }}
    >
      {items?.map((item) => (
        <SwiperSlide key={item.id}>
          <CardBanner
            title={item.title}
            media={item.media}
            mediaSmall={item.mediaSmall}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

// Component

type CardBannerProps = {
  title: string;
  media: string;
  mediaSmall: string;
  url?: string;
};
const CardBanner = ({ title, media, mediaSmall, url }: CardBannerProps) => {
  return (
    <>
      <Image
        src={`/${media}`}
        alt={title}
        priority
        width={2880}
        height={500}
        className="hidden h-auto w-full md:flex"
      />
      <Image
        src={`/${mediaSmall}`}
        alt={title}
        priority
        width={2880}
        height={500}
        className="h-auto w-full md:hidden"
      />
    </>
  );
};
