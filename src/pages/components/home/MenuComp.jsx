import React from "react";
import { menuData } from "./menuData";

function MenuComp() {
  return (
    <div className="mt-10 relative">
        <div className="absolute animate-floating">
            <img 
                src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741777725/shape_2.png_q2b0bn.png" 
                alt="" 
            />
        </div>
      <div className="lx:w-[1280px] lg:w-[1080px] md:w-[786px] sm:w-[600px] sm:mx-auto mx-4">
        <div className="text-center">
          <p className="text-[18px] font-[500 montserrat">Best Food Menu </p>
          <h2 className="text-[34px] font-[900]">Our Popular Menus </h2>
        </div>

        <div className="sm:grid grid-cols-4 gap-10 mt-7">
        {menuData.map((data,index) =>(    
          <div className="text-center cursor-pointer overflow-hidden group" key={index}>
            <img
              src={data.image}
              alt={data.menu_name}
              className="transition-transform duration-800 ease-in-out transform group-hover:scale-110"
            />
            <h3 className="text-[16px] mt-2 montserrat">{data.menu_name}</h3>
          </div>
          ))}
        </div>
      </div>
      <div className="absolute right-40 top-0 animate-menu-x">
          <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741777724/shape_3.png_uwtvwf.png" alt="" />
       </div>
    </div>
  );
}

export default MenuComp;
