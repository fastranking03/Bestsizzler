import React from 'react'
import { productData } from '../../dummy/productData'
import { FaCartShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

const PopularComp = () => {
  return (
    <div className='mt-10'>
       <div className="lx:w-[1280px] lg:w-[1080px] md:w-[786px] sm:w-[600px] sm:mx-auto mx-4">
         <div className="text-center">
            <p className="text-[18px] font-[500 montserrat">Our Most</p>
            <h2 className="text-[34px] font-[900]">Popular Product </h2>
        </div>
          <div className='sm:grid grid-cols-4 gap-10 mt-7'>
            {productData.map((data,index) =>(
               <div className='border-[1px] border-gray-300 p-2 rounded-[6px]' key={index}>
                   <div>
                       <img src={data.image} alt={data.name} className='rounded-[6px]' />
                   </div>
                   <div className='mt-2'>
                      <h2 className='text-[16px] font-[500 montserrat'>{data.name}</h2>
                      <p className='text-[12px] font-[400] text-gray-400 montserrat'>{data.desc}</p>
                      <h3 className='font-[600] montserrat'>{data.price}</h3>
                   </div>
                   <div className='flex justify-between mt-3 montserrat'>
                       <button className='flex gap-1 cursor-pointer transition-all bg-red-600 text-white p-1 px-5 rounded-[20px] items-center text-[13px]'><span><FaCartShopping/></span> Add To Cart</button>
                       <button  className='border-[1px] cursor-pointer border-red-500 transition-all hover:bg-red-500 hover:text-white w-[30px] flex justify-center items-center text-center rounded-[20px]'><CiHeart/></button>
                   </div>
               </div>
            ))}
          </div>
       </div>
    </div>
  )
}

export default PopularComp
