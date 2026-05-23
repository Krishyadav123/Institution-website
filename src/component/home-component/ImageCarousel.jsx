"use client";

import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import scrollToSection from "@/components/layout/ScrollToSection";

const AUTOPLAY_DELAY = 5000;

const slides = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dinknhjnp/image/upload/v1779446702/20260522_160454.jpg_smmgly.jpg",
    title: "Rise Food Mall",
    price: "INR 33.70 Lac",
    location: "Noida Ext Sector 1",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dinknhjnp/image/upload/v1779446950/IMG-20251030-WA0005_gcjcwm.jpg",
    title: "Pearl Plaza",
    price: "INR 45.50 Lac",
    location: "Sector 2, Greater Noida",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dinknhjnp/image/upload/v1779446956/PXL_20251125_123250018_ahg626.jpg",
    title: "Crystal Tower",
    price: "INR 55.00 Lac",
    location: "Noida City Center",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dinknhjnp/image/upload/v1779446702/20260522_160441.jpg_zaj7x9.jpg",
    title: "Indore M.p",
    price: "INR 55.00 Lac",
    location: "Indore City",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dinknhjnp/image/upload/v1779446955/threesyntax_in_side1_ol8jho.jpg",
    title: "Pune",
    price: "INR 65.00 Lac",
    location: "Pune City",
  },
];

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const animationFrameRef = useRef(null);
  const startTimeRef = useRef(null);
  const fillRefs = useRef([]);

  const animateActiveBar = () => {
    startTimeRef.current = performance.now();

    const tick = (now) => {
      const elapsed = now - startTimeRef.current;
      const progress = Math.min((elapsed / AUTOPLAY_DELAY) * 100, 100);

      const activeBar = fillRefs.current[activeIndex];

      if (activeBar) {
        activeBar.style.width = `${progress}%`;
      }

      if (progress < 100) {
        animationFrameRef.current = requestAnimationFrame(tick);
      }
    };

    animationFrameRef.current = requestAnimationFrame(tick);
  };

  const resetBars = (upToIndex) => {
    fillRefs.current.forEach((bar, i) => {
      if (!bar) return;

      bar.style.width = i < upToIndex ? "100%" : "0%";
    });
  };

  useEffect(() => {
    cancelAnimationFrame(animationFrameRef.current);

    resetBars(activeIndex);
    animateActiveBar();

    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [activeIndex]);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="py-10 px-5 xl:px-40 bg-white">
      
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-black">
        Inside Our Learning Environment
      </h2>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-center mt-10 gap-5">
        
        {/* Left Card */}
        <div className="flex flex-col justify-between bg-orange-50 border border-orange-100 rounded-2xl gap-10 p-5 shadow-md w-full lg:w-[25%] md:h-[380px]">
          
          <div>
            <h2 className="text-xl font-semibold mt-4 text-black">
              Practical Learning at ThreeSyntax
            </h2>

            <p className="text-sm text-gray-600 mt-2">
              Real classroom sessions, live mentorship, practical coding and project-based learning environment designed to make students industry ready.
            </p>
          </div>

          <Button  onClick={() => scrollToSection("contact")} className="bg-orange-500 hover:bg-orange-600 rounded-xl text-white">
            View All
          </Button>
        </div>

        {/* Right Slider */}
        <div className="h-[380px] w-full lg:w-[75%] relative">
          
          {/* Progress Bars */}
          <div className="absolute top-4 left-4 right-4 z-10 flex gap-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className="w-full h-[5px] bg-gray-500 relative overflow-hidden rounded-full"
              >
                <div
                  ref={(el) => (fillRefs.current[index] = el)}
                  className="h-full bg-white"
                  style={{ width: "0%" }}
                />
              </div>
            ))}
          </div>

          {/* Swiper */}
          <Swiper
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop={true}
            autoplay={{
              delay: AUTOPLAY_DELAY,
              disableOnInteraction: false,
            }}
            onSlideChange={handleSlideChange}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Pagination, Autoplay, EffectFade]}
            className="w-full h-full rounded-2xl overflow-hidden"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url(${slide.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* <div className="w-full h-full bg-black/20"></div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="hidden md:block">
            
            {/* Prev */}
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 z-20 bg-white hover:bg-orange-500 hover:text-white transition-all duration-300 text-black cursor-pointer p-3 rounded-full shadow-lg"
            >
              <ArrowLeft className="w-6" />
            </button>

            {/* Next */}
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 z-20 bg-white hover:bg-orange-500 hover:text-white transition-all duration-300 text-black cursor-pointer p-3 rounded-full shadow-lg"
            >
              <ArrowRight className="w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;