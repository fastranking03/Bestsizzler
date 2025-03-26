import React, { useEffect, useState } from "react";
import Glide from "@glidejs/glide";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import axios from "axios";

const MenuComponent = () => {
  const [menudata, setMenu] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [loading, setLoading] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(itemsPerPage); 

  // Fetch Menu Data
  const displayMenuData = async () => {
    try {
      const res = await axios.get(
        "https://bestsizzler-backend.fastranking.tech/api/items/sides"
      );
      setMenu(res.data.items);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    displayMenuData();
  }, []);

  // Initialize Glide Sliders for each menu item dynamically
  useEffect(() => {
    if (menudata.length > 0) {
      menudata.forEach((_, index) => {
        const sliderElement = document.querySelector(`.glide-02-${index}`);
        if (sliderElement) {
          const slider = new Glide(`.glide-02-${index}`, {
            type: "slider",
            focusAt: "center",
            perView: 1,
            autoplay: 3500,
            animationDuration: 700,
            gap: 0,
          }).mount();

          return () => {
            slider.destroy();
          };
        }
      });
    }
  }, [menudata, itemsToShow]);

  // Pagination logic for desktop
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Check for mobile or desktop and adjust items to show
  const currentItems =
    window.innerWidth < 640
      ? menudata.slice(0, itemsToShow) // on mobile
      : menudata.slice(indexOfFirstItem, indexOfLastItem); // Paginate on desktop

  // Handle Page Change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Load More Button - Show 8 more items on mobile
  const loadMoreItems = () => {
    if (itemsToShow < menudata.length) {
      setLoading(true);
      setTimeout(() => {
        setItemsToShow((prev) => Math.min(prev + itemsPerPage, menudata.length));
        setLoading(false);
      }, 500);
    }
  };

  return (
    <div className="2xl:w-[1450px] xl:w-[1280px] lg:w-[1080px] md:w-[786px] sm:w-[600px] sm:mx-auto mx-4">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 sm:mt-20 my-10 sm:my-0">
        {currentItems?.map((data, index) => (
          <div key={index} className="bg-white p-3 rounded-[12px] transition-all duration-300 ease-in-out hover:shadow-xl">
            {/* Unique Carousel for Each Item */}
            <div className={`relative w-full glide-02-${index}`}>
              <div className="overflow-hidden" data-glide-el="track">
                <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                  {data.images.map((imgIndex) => (
                    <li key={imgIndex}>
                      <img
                        src={imgIndex.urls}
                        className="w-[200px] h-[200px] object-contain rounded-[6px] mx-auto"
                        alt={`Menu item ${imgIndex}`}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Indicators */}
              <div
                className="absolute bottom-2 flex items-center justify-center w-full gap-2"
                data-glide-el="controls[nav]"
              >
                {data.images.map((i) => (
                  <button
                    key={i}
                    className="p-4 group"
                    data-glide-dir={`=${i}`}
                    aria-label={`goto slide ${i + 1}`}
                  >
                    <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Item Details */}
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <p className="sm:text-[20px] font-[600]">{data.name}</p>
                <p className="text-[16px] font-[600] flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 128 128"><path fill="#fdd835" d="m68.05 7.23l13.46 30.7a7.05 7.05 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.03 7.03 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.05 7.05 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01"/><path fill="#ffff8d" d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13"/><path fill="#f4b400" d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97"/></svg> 4.2
                </p>
              </div>
              <p className="mt-2 text-[14px] font-[400] text-[#535353]">
                {data.description || "No description available."}
              </p>
              <p className="font-[600] sm:mt-5 mt-2">₤{data.price || "50.00"}</p>
              <div className="flex items-center justify-between sm:gap-3 sm:mt-6 mt-3">
                <button className="cursor-pointer text-white flex gap-2 items-center bg-[#DA0025] p-2 justify-center rounded-full w-[100%]">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Pagination */}
      {window.innerWidth >= 640 && (
        <div className="bg-white rounded-full mx-auto py-2 px-3 border-[1px] border-[#DFDFDF] sm:flex items-center justify-between mt-20 sm:w-[700px] hidden">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="page-arrows transition hover:bg-red-500 cursor-pointer flex w-[35px] h-[35px] items-center border-[1px] border-gray-400 rounded-[50%] justify-center"
          >
            <FaAngleLeft className="text-gray-400" />
          </button>

          <div className="flex items-center gap-5 text-[#B4B4B4]">
            {[...Array(Math.ceil(menudata.length / itemsPerPage))].map(
              (_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`w-8 h-8 rounded-full text-center flex items-center justify-center cursor-pointer ${
                    currentPage === i + 1
                      ? "bg-[#DA0025] text-white"
                      : "hover:bg-[#DA0025] hover:text-white"
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={indexOfLastItem >= menudata.length}
            className="page-arrows hover:bg-red-500 transition cursor-pointer flex w-[35px] h-[35px] items-center border-[1px] border-gray-400 rounded-[50%] justify-center"
          >
            <FaAngleRight className="text-gray-400" />
          </button>
        </div>
      )}

      {/* Load More Button for Mobile */}
      {window.innerWidth < 640 && itemsToShow < menudata.length && (
        <div className="text-center mt-1 mb-8">
          <button
            onClick={loadMoreItems}
            className="bg-[#DA0025] text-white px-6 py-2 rounded-full hover:bg-red-600 transition"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuComponent;
