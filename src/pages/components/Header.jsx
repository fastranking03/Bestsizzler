import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { IoLocationOutline, IoBagOutline } from "react-icons/io5";
import { FaRegUser, FaFacebookF, FaInstagram, FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-[#DA0025]">
        <div className="flex justify-between px-10 p-3">
          <div className="w-[40%]">
            <p className="flex items-center gap-2 text-white text-[14px] font-[500] montserrat">
              <span>
                <TbTruckDelivery className="w-[20px] h-[20px]" />
              </span>{" "}
              Free Delivery on all orders Over £XX
            </p>
          </div>
          <div>
            <ul className="flex items-center gap-6 text-white montserrat">
              <li>
                <Link className="flex items-center">
                  <IoLocationOutline className="w-[20px] h-[20px]" /> Put Your
                  Location/Address
                </Link>
              </li>
              <li>
                <Link> Register</Link>
              </li>
              <li>
                <Link className="flex items-center gap-2">
                  <FaRegUser className="w-[16px] h-[16px]" /> Login
                </Link>
              </li>
              <li>
                <ul className="flex gap-4">
                  <li>
                    <Link>
                      <FaFacebookF className="w-[18px] h-[18px]" />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FaInstagram className="w-[20px] h-[20px]" />
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <header className="bg-black sticky top-0 z-90">
        <div className="flex px-10 items-center justify-between">
          <div className="">
            <div>
              <img
                src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741713282/Group_238817_uabyhv.png"
                className="w-[150px]"
                alt="Logo"
              />
            </div>
          </div>
          <div className="">
            <ul className="flex gap-5">
              <li>
                <Link>
                  <FaHeart className="text-white" />
                </Link>
              </li>
              <li>
                <Link>
                  <IoBagOutline className="text-white" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
