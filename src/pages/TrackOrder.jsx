import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import Tracking from "./components/Tracking";

const TrackOrder = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Header />
      <div className="xl:w-[1280px] lg:w-[1080px] md:w-[786px] sm:w-[600px]  mx-2 sm:mx-auto mt-10">

        <Tracking />

        <div className="h-auto mb-10 relative">
          <div className="flex flex-col  h-[80%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6 mt-10">
              {/* Left Box*/}
              <div className="lg:col-span-3 sm:col-span-2 col-span-1">
                <div>
                  <div className="bg-white py-4 rounded-md">
                    <div className="flex px-6 justify-between pt-2 pb-4  border-b-1 border-gray-200">
                      <h2 className="text-lg lg:text-xl md:text-xl sm:text-lg font-medium ">
                        Delivery Address
                      </h2>
                    </div>
                    <div>
                      <div className="flex px-6 justify-between pt-4 pb-1">
                        <h2 className="text-lg lg:text-xl md:text-xl sm:text-lg font-medium ">
                          Jeremy John
                        </h2>
                        <div className="flex gap-2 items-center">
                          <input
                            type="radio"
                            checked
                            className="accent-red-500"
                          />
                          <label htmlFor="Home" className="text-xs font-medium">
                            Home
                          </label>
                        </div>
                      </div>

                      <p className="font-[500] px-6">sales@alfa-jeremy.com</p>

                      <div className=" font-[500] px-6">+44 124 1255 124</div>
                    </div>

                    <div className="flex gap-2 items-center px-6 mt-5">
                      <span className="lg:text-base md:text-base sm:text-medium font-[500] text-[24px]">
                        33 Westover Road, Bournemouth, Dorset, BH1 2BZ
                      </span>
                    </div>
                  </div>

                  <div className="bg-white py-3 mt-6 rounded-md ">
                    <div className="  px-6  justify-between py-2  border-b-1 border-gray-200">
                      <h2 className="text-lg lg:text-xl md:text-xl sm:text-lg font-medium ">
                        Payment
                      </h2>
                    </div>
                    <div className="flex items-center gap-2 px-6">
                      <div>
                        <img
                          src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742812815/Bitmap_Copy_snwy9p.png"
                          alt=""
                        />
                      </div>
                      <div>
                        <p className="text-[#868E96] text-[14px]">
                          My Virtual Debit Card
                        </p>
                        <p className="text-blackfont-[500] ">8553</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Box*/}
              <div className="flex flex-col lg:col-span-2 sm:col-span-2 col-span-1 rounded-md lg:mt-0 md:mt-5 sm:mt-5 mt-5">
                <div className="bg-white p-5 rounded-md">
                  <div className="flex mb-3 justify-between rounded-md items-center gap-2 lg:gap-4 md:gap-4 sm:gap-4 bg-[#FFF4F6] p-3">
                    <div className="flex h-full gap-2 lg:gap-4 md:gap-4 sm:gap-4">
                      <img
                        src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742812020/Mask_group_qdkhn9.png"
                        alt="foodImage"
                        className="rounded-sm lg:w-[80px] md:w-[70px] sm:w-[60px] w-[60px] lg:h-[80px] md:h-[70px] sm:h-[60px] h-[60px]"
                      />
                      <div className="flex h-full flex-col justify-left">
                        <h2 className="font-medium text-normal">
                          Chicken Wraps Recipe
                        </h2>
                        <p className="text-[12px] text-[#787878]">
                          Special mix of mango, peach, strawberry
                        </p>
                      </div>
                    </div>
                    <div className="text-normal font-medium mt-8">₤550</div>
                  </div>

                  <div className="border-t-1 border-b-1 border-gray-200">
                    <div className="flex justify-evenly items-center w-full">
                      <div className="grid grid-cols-4 text-sm gap-20 justify-center items-center py-1 text-black border-gray-200 mt-4 font-normal">
                        <h4 className="col-span-2">Sub Total</h4>
                        <h4 className="col-span-2">₤960.00</h4>
                      </div>
                    </div>

                    <div className="flex justify-evenly items-center w-full">
                      <div className="grid grid-cols-4 text-sm gap-20 justify-center py-1 text-black border-gray-200 font-normal">
                        <h4 className="col-span-2">Shipping</h4>
                        <h4 className="col-span-2">Free</h4>
                      </div>
                    </div>

                    <div className="flex justify-evenly items-center w-full">
                      <div className="grid grid-cols-4 text-sm gap-20 justify-center py-1 text-black border-gray-200 font-normal">
                        <h4 className="col-span-2">Discount</h4>
                        <h4 className="col-span-2">₤50.00</h4>
                      </div>
                    </div>

                    <div className="flex justify-evenly items-center w-full">
                      <div className="grid grid-cols-4 text-sm gap-20 justify-center py-1 text-black border-gray-200 font-normal">
                        <h4 className="col-span-2">Tax</h4>
                        <h4 className="col-span-2">₤10.00</h4>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-evenly items-center mt-1 w-full">
                    <div className="grid grid-cols-4 text-sm gap-20 justify-center  py-1 text-black border-gray-200 font-medium">
                      <h4 className="col-span-2">Total</h4>
                      <h4 className="col-span-2">₤1250.00</h4>
                    </div>
                  </div>

                  <div className="mt-3">
                    <Link to="/checkout">
                      <button className="bg-red-600 rounded-4xl w-full text-white font-medium py-2 hover:bg-black cursor-pointer">
                        Cancel Order
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Overlay (Optional, for closing on outside click) */}
          {isOpen && (
            <div className="fixed inset-0  bg-opacity-30 z-40" onClick={() => setIsOpen(false)}></div>
          )}

          {/* Sliding Panel */}
          <div
            className={`fixed right-0 top-0 h-screen lg:w-[40%] md:w-[50%] sm:w-[70%] w-[95%] bg-white lg:shadow-2xl md:shadow-2xl sm:shadow-2xl shadow-xl transform transition-transform duration-300 z-50 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="w-full">
              {/* Close Button */}
              <div className="flex w-full px-6 items-center pt-4 pb-1">
                <button onClick={() => setIsOpen(false)} className="text-red-500 cursor-pointer lg:text-2xl md:text-xl sm:text-xl text-lg" >
                  ❌
                </button>
              </div>

              <div className="border-1 border-gray-200 mx-5 mt-2 pb-3 rounded-sm shadow-sm cursor-pointer hover:shadow-lg">
                <div className="flex w-full mb-2 py-2 px-6 bg-[#f4f4f4] justify-end border-b-1 border-gray-200">
                  <button
                    type="button"
                    className="cursor-pointer text-red-500 hover:text-black"
                  >
                    <span className="font-medium text-xl">Delete</span>
                  </button>
                </div>
                {/* Radio and Label */}
                <div className="flex px-6 justify-between">
                  <h2 className="text-lg lg:text-xl md:text-xl sm:text-lg font-medium">
                    Jeremy John
                  </h2>
                  <div className="flex gap-2 items-center">
                    <input type="radio" checked className="accent-red-500" />
                    <label htmlFor="Home" className="text-xs font-medium">
                      Home
                    </label>
                  </div>
                </div>

                {/* Description */}
                <div className="flex px-6 w-4/5 lg:w-2/3 md:w-2/3 sm:w-2/3 justify-between">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean maximus pellentesque congue.
                  </p>
                </div>

                {/* Mobile Number */}
                <div className="flex flex-col px-6 justify-between py-4">
                  <h2 className="text-lg lg:text-xl md:text-xl sm:text-lg font-medium">
                    Mobile Number
                  </h2>
                  <span className="font-medium text-sm lg:text-base md:text-base sm:text-sm">
                    +44 124 1255 124
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrackOrder;
