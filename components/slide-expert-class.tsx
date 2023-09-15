"use client";

import Image from "next/image";

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

import { dummyExpertClass } from "@/config/dummy";
import Link from "next/link";

export const SlideExpertClass = () => {
  const items = dummyExpertClass;

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
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
        <SwiperSlide key={item.id} className="BBB w-full max-md:px-4">
          <SlideSingle
            title={item.title}
            date={item.date}
            time={item.time}
            price={item.price}
            tags={item.tags}
            media={item.media}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

// Components
type SlideSingleProps = {
  title: string;
  date: string;
  time: string;
  price: string;
  tags?: string[];
  media: string;
};

const SlideSingle = ({
  title,
  date,
  time,
  price,
  tags,
  media,
}: SlideSingleProps) => {
  return (
    <div className="w-full overflow-hidden rounded-xl bg-background p-2">
      <div className="aspect-h-3 aspect-w-6 overflow-hidden rounded-lg">
        <Image
          src={`/${media}`}
          alt={title}
          width={360}
          height={180}
          className="h-auto w-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-3 p-2">
        <div className="mt-2 flex items-center justify-between">
          <small className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            {date}
          </small>

          <small className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {time}
          </small>
        </div>

        <Link
          href="/"
          aria-label={title}
          className="underline-offset-4 hover:underline"
        >
          <h4 className="line-clamp-2 font-semibold">{title}</h4>
        </Link>
      </div>
    </div>
  );
};
