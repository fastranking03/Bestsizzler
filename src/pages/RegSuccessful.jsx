import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const RegSuccessful = () => {

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
            <div className="w-[100%] flex justify-center gap-4 mb-3">
                <svg width="251" height="281" viewBox="0 0 251 281" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.32435 42.4151C5.32435 21.918 21.9405 5.30189 42.4376 5.30189H208.563C229.06 5.30189 245.677 21.918 245.677 42.4151V275.698H5.32435V42.4151Z" stroke="url(#paint0_linear_575_6093)" stroke-width="10.6038"/>
                <rect opacity="0.45" x="40.6699" y="70.692" width="167.893" height="10.6038" rx="3.53459" fill="url(#paint1_linear_575_6093)"/>
                <rect opacity="0.3" x="40.6699" y="91.8993" width="167.893" height="10.6038" rx="3.53459" fill="url(#paint2_linear_575_6093)"/>
                <rect opacity="0.2" x="40.6699" y="113.107" width="167.893" height="10.6038" rx="3.53459" fill="url(#paint3_linear_575_6093)"/>
                <circle cx="125.501" cy="189.101" r="51.2516" fill="#71DA00"/>
                <path d="M109.596 188.217L120.199 198.821L140.523 178.497" stroke="white" stroke-width="7.06918" stroke-linecap="round" stroke-linejoin="round"/>
                <defs>
                <linearGradient id="paint0_linear_575_6093" x1="125.5" y1="-55.6698" x2="125.5" y2="257.142" gradientUnits="userSpaceOnUse">
                <stop stop-color="#71DA00"/>
                <stop offset="1" stop-color="#291E43" stop-opacity="0"/>
                </linearGradient>
                <linearGradient id="paint1_linear_575_6093" x1="106.944" y1="38.8807" x2="122.126" y2="142.295" gradientUnits="userSpaceOnUse">
                <stop offset="0.0001" stop-color="#71DA00"/>
                <stop offset="1" stop-color="#291E43" stop-opacity="0"/>
                </linearGradient>
                <linearGradient id="paint2_linear_575_6093" x1="79.5504" y1="53.1955" x2="105.731" y2="161.989" gradientUnits="userSpaceOnUse">
                <stop offset="0.0001" stop-color="#71DA00"/>
                <stop offset="1" stop-color="#291E43" stop-opacity="0"/>
                </linearGradient>
                <linearGradient id="paint3_linear_575_6093" x1="76.8995" y1="89.7786" x2="90.8773" y2="157.963" gradientUnits="userSpaceOnUse">
                <stop offset="0.0001" stop-color="#71DA00"/>
                <stop offset="1" stop-color="#291E43" stop-opacity="0"/>
                </linearGradient>
                </defs>
                </svg>
            </div>
            <h1 className="text-[46px] font-[500]">You’ve Successfully
            Registered!</h1>
              <div className="text-[#9E9DA5] text-center">
                If you sign up,{" "}
                <span className="underline">
                  Terms & Conditions and Privacy policy
                </span>{" "}
                apply.
              </div>
            <div className="w-full mt-8">
              <Link to="/">
                <button
                    type="button"
                    className="font-medium flex justify-center text-white items-center gap-1 bg-[#DA0025] rounded-[50px] py-2 lg:py-3 w-full hover:bg-black transition cursor-pointer"
                >
                    Continue
                </button>
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegSuccessful;
