import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";

const ImageSlider = () => {
    const data = {
        images: [
            "https://res.cloudinary.com/dhf8eyjee/image/upload/v1779448240/ChatGPT_Image_May_22_2026_04_39_03_PM_vlcxup.png",
            "https://res.cloudinary.com/dhf8eyjee/image/upload/v1779448400/ChatGPT_Image_May_22_2026_04_43_11_PM_ypgun3.png",
            "https://res.cloudinary.com/dhf8eyjee/image/upload/v1779448518/ChatGPT_Image_May_22_2026_04_45_11_PM_fqjupd.png",
            "https://res.cloudinary.com/dhf8eyjee/image/upload/v1779448679/ChatGPT_Image_May_22_2026_04_47_52_PM_kqvu4t.png",
          ],
      };
  return (
    <div>
        <div className="w-full">
            <div className=" md:px-20 md:py-10 h-64 md:h-96 rounded-lg bg-orange-100">
              <Swiper
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade]}
                className="h-full w-full"
              >
                {data.images.map((image, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={image}
                      alt={`Slide ${i + 1}`}
                      className="w-full h-full rounded-lg object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            
          </div>
    </div>
  )
}

export default ImageSlider