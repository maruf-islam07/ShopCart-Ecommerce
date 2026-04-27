"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Wrapperr from "../wrapper/Wrapperr";
import Image from "next/image";

const sliderImage = [
  {
    id: 1,
    src: "/slider-image/image.avif",
    title: "bannerImg",
  },
  {
    id: 2,
    src: "/slider-image/image2.avif",
    title: "bannerImg",
  },
  {
    id: 3,
    src: "/slider-image/image3.avif",
    title: "bannerImg",
  },
  {
    id: 4,
    src: "/slider-image/image4.avif",
    title: "bannerImg",
  },
  {
    id: 5,
    src: "/slider-image/image5.avif",
    title: "bannerImg",
  },
  {
    id: 6,
    src: "/slider-image/image6.avif",
    title: "bannerImg",
  },
  {
    id: 7,
    src: "/slider-image/image7.avif",
    title: "bannerImg",
  },
];

const Hero = () => {
  return (
    <div className="mt-4 px-1 sm:px-10 md:px-20 lg:px-5">
      <Wrapperr>
        <div className="flex gap-5">
          {/* left slider */}
          <div className="w-full lg:max-w-3/4 h-60 sm:70 md:h-90">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{ delay: 3000 }}
              loop={true}
              navigation
              pagination={{ clickable: true }}
              className="h-full w-full"
            >
              {sliderImage.map((image) => (
                <SwiperSlide key={image.id}>
                  <div className="">
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className=""
                      priority={image.id === 1} // প্রথম ছবিটিকে দ্রুত লোড করার জন্য
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* right side app downloder card */}
          <div className="hidden lg:block bg-white/60 w-full max-w-1/4 relative">
            <Image
              src="/desktopsidebar.png"
              alt="siderbar"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Wrapperr>
    </div>
  );
};

export default Hero;
