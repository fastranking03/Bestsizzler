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
          autoplay={{ delay: 5000000 }}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full "
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative">
              <div className="absolute top-15 left-10">
                 <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741862635/tree_2.png_gp0svr.png" alt="" />
              </div>
              <div
                className="bg-cover bg-center flex items-center h-[700px]"
                style={{ backgroundImage: `url('${slide.image}')` }}
              >
                <div className="container mx-auto flex items-center justify-between px-6">
                  {/* Animated Text Section */}
                  <motion.div
                    className="w-1/2"
                    initial={{ opacity: 0, x: -100 }}
                    animate={activeIndex === index ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                  >
                    <p className="text-white text-xl montserrat">
                      {slide.subtitle}
                    </p>
                    <h1 className="uppercase text-6xl font-bold text-white leading-tight">
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
                      <a href="#" className="text-white bg-red-600 px-5 py-3 rounded-full montserrat text-lg"> Explore Menu
                      </a>
                    </motion.div>
                  </motion.div>

                  {/* Animated Images Section */}
                  <div className="sm:w-[50%]">
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
