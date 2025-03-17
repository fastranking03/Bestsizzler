import React from "react";

function AboutComp() {
  return (
    <div className="lx:w-[1280px] lg:w-[1080px] md:w-[786px] sm:w-[600px] sm:mx-auto mx-4 sm:mt-20 mt-10">
      <div className="sm:flex gap-10">
        <div className="sm:w-[50%] relative">
          <div className="absolute mirchi-animate -left-20">
            <img
              src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741780097/red_chili_3.png_cujzoc.png"
              className="w-[100%]"
              alt=""
            />
          </div>
          <img
            src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741780097/about_1.jpg_ge6lzc.png"
            className="w-[100%]"
            alt="About Us"
          />
        </div>
        <div className="sm:w-[50%] sm:mt-0 mt-5">
          <div>
            <p className="text-18px font-[500] montserrat">About Us</p>
            <h2 className="text-[40px] font-[600] leading-12">
              Enjoy An Exceptional Journey of Taste
            </h2>
            <p className="text-[15px] text-gray-500 mt-4 montserrat">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="sm:flex gap-10 mt-8">
             <div className="shadow rounded-[5px] p-6">
                <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741780725/about_feature_2_1.svg_cpo2r6.png" alt="image 1" />
                <h3 className="text-[24px] font-[600] mt-3">Fast Foods</h3>
                <p className="montserrat text-[14px] mt-2 text-gray-500">Health foods are
                  nutrient-Dense Foods</p>
             </div>
             <div className="shadow rounded-[5px] p-6 border-[1px] border-red-500">
                <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741780724/about_feature_2_2.svg_lkbihv.png" alt="image 1" />
                <h3 className="text-[24px] font-[600] mt-3">Healthy foods</h3>
                <p className="montserrat text-[14px] mt-2 text-gray-500">Health foods are
                  nutrient-Dense Foods</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComp;
