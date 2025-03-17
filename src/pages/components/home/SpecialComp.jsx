import React from "react";

function SpecialComp() {
  return (
    <div className="special-bg py-20 sm:mt-20 mt-10">
      <div className="2xl:w-[1520px] lx:w-[1280px] lg:w-[1080px] md:w-[786px] sm:w-[600px] sm:mx-auto mx-4">
        <div className="sm:flex items-center">
          <div className="sm:w-[40%]">
            <div className="text-white">
              <p className="mb-2 montserrat">Today Special Offer</p>
              <h2 className="text-[80px] font-[600] leading-22">
                Delicious <br />{" "}
                <span className="uppercase text-[100px]">Burger</span>
              </h2>
              <p className="mt-2 montserrat">The Best burger Best Sizzler</p>
            </div>
          </div>
          <div className="sm:w-[20%]">
            <div className="relative">
              <div
                className="discount_style4 background-image animate-blink" style={{ backgroundImage: "url(https://res.cloudinary.com/dj7wogsju/image/upload/v1741781570/discount_bg_1_tba0cz.svg)", }} >
                <p className="small-text">Up to</p>
                <h3 className="percentage">32%</h3>
                <p className="small-text">discount</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialComp;
