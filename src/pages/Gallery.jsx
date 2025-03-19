import React from "react";
import Tab from "./components/Tab";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Gallery = () => {
  return (
    <div>
      <Header />
      <div
        className="h-[300px] mb-4 bg-cover bg-center flex justify-center items-center w-full overflow-hidden"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dj7wogsju/image/upload/v1741711262/Group_238820_fsqqzy.png')",
        }}
        id="Hero"
      >
        <h2 className="text-center text-white text-[80px] font-[400]">
          Gallery
        </h2>
      </div>

      <Tab />
      <Footer />
    </div>
  );
};

export default Gallery;
