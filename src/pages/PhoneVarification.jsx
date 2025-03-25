import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const PhoneVarification = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
    
        e.preventDefault();
        navigate("/enter-code");
      }

  return (
    <div className="relative w-full  m-0">
      <img
        className="absolute top-0 right-[18%] lg:w-[15%] md:w-[25%] sm:w-[25%] w-[33%]"
        src="public/rectangle.png"
        alt=""
      />
        <motion.div
          className="absolute shape-mockup top-[15%] right-[20%] jump d-lg-block"
          animate={{ y: [0, -40, 0] }} // Moves up and down
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src="../cherry_1.webp"
            alt="shape"
            className="lg:w-[80px] md:w-[70px] sm:w-[60px] w-[60px]"
          />
        </motion.div>
      <div className="flex w-full h-screen px-4 md:px-15 justify-center items-center">
        <div className="w-full h-[90%] flex flex-col justify-center items-center bg-white rounded-4xl shadow-md">
          <div className="h-[70%] flex flex-col gap-3 justify-center items-center">
            <h1 className="text-[46px] font-[500]">Phone Verification</h1>
            <form onSubmit={handleSubmit}>
            <div className="w-[100%] flex gap-4 mb-3">
              <input
                type="number"
                placeholder="+44"
                className="w-[15%] font-medium border border-gray-400 px-3 py-[5px] md:py-[10px] rounded-md bg-[#f3f3f3] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance]:textfield"
                required
              />
              <input
                type="text"
                placeholder="Enter your number..."
                className="w-[85%] font-medium border border-gray-400 px-3 py-[5px] md:py-[10px] rounded-md bg-[#f3f3f3] placeholder:text-[#B9B9B9]"
                required
              />
            </div>
            <Link to="/policy">
              <div className="text-[#9E9DA5] text-center">
                If you sign up,{" "}
                <span className="underline">
                  Terms & Conditions and Privacy policy
                </span>{" "}
                apply.
              </div>
            </Link>
            <div className="w-full mt-8">
              <button
                type="submit"
                className="font-medium flex justify-center text-white items-center gap-1 bg-[#DA0025] rounded-[50px] py-2 lg:py-3 w-full hover:bg-black transition cursor-pointer"
              >
                Continue
              </button>
            </div>
            </form>
          </div>
          <div className="w-1/2 flex justify-center gap-4 ">
            <div className="border-3 border-[#DA0025] rounded-lg w-1/6"></div>
            <div className="border-3 border-[#E4E4E4] rounded-lg w-1/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneVarification;
