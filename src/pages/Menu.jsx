import React from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ResponsiveHeader from "./components/ResponsiveHeader";

import MenuCompoment from "./components/MenuCompoment";

const Product = () => {

  return (
    <>
      <Header />
      <ResponsiveHeader />
      <div className="h-[300px] mb-4 bg-cover bg-center flex justify-center items-center w-full overflow-hidden" style={{ backgroundImage: "url('https://res.cloudinary.com/dj7wogsju/image/upload/v1741711262/Group_238820_fsqqzy.png')",}}
        id="Hero"
      >
        <h2 className="text-center text-white text-[60px] font-[500]">MENU</h2>
      </div>

      <MenuCompoment/>

      <div className="sm:block hidden">
        <div className="my-20 bg-white  rounded-[15px] pt-10">
          <h4 className="flex items-center justify-center gap-2 text-[18px] font-[700] text-black">
            Explore Our
          </h4>
          <h3 className="text-[39px] text-[#010F1C] font-[900] text-center">
            Gallery
          </h3>
          <div className="mt-10">
            <Swiper
              modules={[Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={20}
              slidesPerView={7}
              autoplay={{
                delay: 1000, // Auto slide delay in milliseconds (3000ms = 3 seconds)
                disableOnInteraction: false, // Keep autoplay even after user interaction
              }}
              loop={true} // Enable looping
              
            >
              <SwiperSlide>
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772447/Frame_1000006917_nnzhbx.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772446/Frame_1000006916_xranwe.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772445/Frame_1000006915_ru4x1e.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772445/Frame_1000006914_adhttd.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772447/Frame_1000006917_nnzhbx.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772446/Frame_1000006916_xranwe.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772445/Frame_1000006915_ru4x1e.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772445/Frame_1000006914_adhttd.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772447/Frame_1000006917_nnzhbx.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772446/Frame_1000006916_xranwe.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772445/Frame_1000006915_ru4x1e.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772445/Frame_1000006914_adhttd.png"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Product;
