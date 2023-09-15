"use client";

import Image from "next/image";

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

export const SPromotion = () => {
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

// Component

type CardBannerProps = {
  label: string;
  media: string;
  url?: string;
};
const CardBanner = ({ label, media, url }: CardBannerProps) => {
  return (
    <>
      <Image
        src={`/${media}`}
        alt={label}
        priority
        width={2880}
        height={500}
        className="h-auto w-full"
      />
    </>
  );
};
