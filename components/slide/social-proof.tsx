"use client";

import Image from "next/image";
import Link from "next/link";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper Modules
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
// Swiper CSS
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Calendar, Clock, PlayCircle } from "lucide-react";

import { dummySocialProof } from "@/config/dummy";

export const SlideSocialProff = () => {
  const items = dummySocialProof;

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      // autoHeight={true}
      loop
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      // centeredSlides={true}
      // effect={"fade"}
      // navigation
      // pagination={{ clickable: true }}
      breakpoints={{
        360: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        },

        1140: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      }}
      className="AAA"
    >
      {items.map((item) => (
        <SwiperSlide key={item.id} className="BBB max-md:px-4">
          <SlideSingle
            name={item.name}
            age={item.age}
            job={item.job}
            avatar={item.avatar}
            content={item.content}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

// Components
type SlideSingleProps = {
  name: string;
  age: number;
  job: string;
  avatar: string;
  content: string;
};

const SlideSingle = ({ name, age, job, avatar, content }: SlideSingleProps) => {
  return (
    <div className="CCC flex h-full flex-col items-start gap-4 rounded-3xl bg-background px-4 py-6 md:p-6">
      <Image
        src={`/${avatar}`}
        alt={name}
        width={120}
        height={120}
        className="h-24 w-24 rounded-full object-cover"
      />

      <p className="text-base md:text-lg">&quot;{content}&quot;</p>

      <div className="mt-auto flex flex-col items-start border-l-4 pl-4 text-muted-foreground">
        <span className="font-semibold">
          {name} <small className="font-normal">({age} tahun)</small>
        </span>
        <small>{job}</small>
      </div>
    </div>
  );
};
