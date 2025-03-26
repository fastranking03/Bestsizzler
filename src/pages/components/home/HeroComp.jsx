import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function HeroComp() {

  const [activeIndex, setActiveIndex] = useState(0);
  
  const images = [
    {
      src: "https://res.cloudinary.com/dj7wogsju/image/upload/v1741775874/burger_part_10.png_c8vidk.png",
      alt: "Top Bun",
      styles: "absolute bottom-30 z-6 left-20",
    },
    {
      src: "https://res.cloudinary.com/dj7wogsju/image/upload/v1741775874/burger_part_9.png_fwdrj8.png",
      alt: "Patty",
      styles: "absolute bottom-20 left-10 z-5",
    },
    {
      src: "https://res.cloudinary.com/dj7wogsju/image/upload/v1741776055/Group_238826_vcheqa.png",
      alt: "Tomato",
      styles: "absolute bottom-5 z-4",
    },
    {
      src: "https://res.cloudinary.com/dj7wogsju/image/upload/v1741860961/burger_part_5.png_n00g8g.png",
      alt: "Cheese",
      styles: "absolute z-2 bottom-[-40px]",
    },
    {
      src: "https://res.cloudinary.com/dj7wogsju/image/upload/v1741775874/Group_238824_lwwiru.png",
      alt: "Lettuce",
      styles: "absolute z-1 left-[-50px]",
    },
    {
      src: "https://res.cloudinary.com/dj7wogsju/image/upload/v1741775874/Group_238825_cg33v3.png",
      alt: "Eggs",
      styles: "absolute",
    },
  ];
  const slides = [
    {
      title: "ENJOY YOUR FAVORITE FOOD WITH FAMILY",
      subtitle: "Welcome to Sizzler",
      image:
        "https://res.cloudinary.com/dj7wogsju/image/upload/v1741711039/Background_1_ubetof.png",
    },
    {
      title: "TASTE THE BEST CUISINES",
      subtitle: "Delicious and Fresh",
      image:
        "https://res.cloudinary.com/dj7wogsju/image/upload/v1741711039/Background_1_ubetof.png",
    },
  ];

  return (
    <>
      <section>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 3000 }}
          loop={true}
          navigation
          speed={1000}
          pagination={{ clickable: true }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full "
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative">
              <div className="absolute lg:top-15 md:top-4 sm:top-9 top-15  left-10">
                 <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741862635/tree_2.png_gp0svr.png" alt="" />
              </div>
              <div
                className="bg-cover bg-center flex items-center  lg:h-[700px] md:h-[600px] sm:h-[500px] h-[400px]"
                style={{ backgroundImage: `url('${slide.image}')` }}
              >
                <div className="container mx-auto flex items-center justify-between px-6">
                  {/* Animated Text Section */}
                  <motion.div
                    className="lg:w-[50%] md:w-[50%] sm:w-[50%] w-full lg:text-left md:text-left sm:text-left text-center z-[1]"
                    initial={{ opacity: 0, x: 200 }}
                    animate={activeIndex === index ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1.5 }}
                  >
                    <p className="text-white lg:text-xl md:text-lg sm:text-lg text-base montserrat">
                      {slide.subtitle}
                    </p>
                    <h1 className="uppercase lg:text-6xl md:text-6xl sm:text-5xl text-4xl font-bold text-white leading-tight">
                    {slide.title.split(" ").map((word, index) => (
                    <React.Fragment key={index}>
                      {word} {(index + 1) % 2 === 0 && <br />}
                    </React.Fragment>
                  ))}
                    </h1>
                    <motion.div
                      className="mt-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        activeIndex === index ? { opacity: 1, scale: 1 } : {}
                      }
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <a href="#" className="text-white bg-red-600 px-5 py-3 rounded-full montserrat lg:text-lg md:text-lg sm:text-base text-sm"> Explore Menu
                      </a>
                    </motion.div>
                  </motion.div>

                  {/* Animated Images Section */}
                  <div className="lg:w-[50%] md:w-[50%] sm:w-[50%] w-0">
                    <div className="relative top-10">
                      {images
                        .slice()
                        .reverse()
                        .map((image, index) => (
                          <motion.div
                            key={index}
                            className={image.styles}
                            initial={{ y: -200, opacity: 0 }}
                            animate={{
                              y: activeIndex % slides.length === 0 ? 0 : -50,
                              opacity: 1,
                              rotate: activeIndex % slides.length === 0 ? 0 : 5,
                            }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                          >
                            <img src={image.src} alt={image.alt} />
                          </motion.div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default HeroComp;
