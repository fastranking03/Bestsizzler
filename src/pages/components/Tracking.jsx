import React, { useState } from 'react';

const Tracking = () => {
    return (
        <div className='bg-white shadow p-14 px-20 pb-32'>
          <div className='flex justify-between items-center'>
            <div className=''>
                <div className='pt-10 absolute'>
                       <span className='text-center '>
                            <svg className='mx-auto' width="30" height="30" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.2" d="M11.375 43.25H3.875C3.37772 43.25 2.90081 43.0525 2.54918 42.7008C2.19754 42.3492 2 41.8723 2 41.375V3.875C2 3.37772 2.19754 2.90081 2.54918 2.54918C2.90081 2.19754 3.37772 2 3.875 2H11.375V43.25Z" fill="#DA0025"/>
                            <path d="M18.875 18.875H33.875" stroke="#191C1F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M18.875 26.375H33.875" stroke="#191C1F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M41.375 2H3.875C2.83947 2 2 2.83947 2 3.875V41.375C2 42.4105 2.83947 43.25 3.875 43.25H41.375C42.4105 43.25 43.25 42.4105 43.25 41.375V3.875C43.25 2.83947 42.4105 2 41.375 2Z" stroke="#191C1F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.375 2V43.25" stroke="#191C1F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        <p className='font-[500] mt-3'>Order Placed</p>
                </div>
            </div>
            <div className='w-[100%] h-[8px] steps__connector active__connector'></div>
            <div className=''>
                <div className='pt-10 absolute'>
                       <span className='text-center '>
                            <svg className='mx-auto' width="30" height="30" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.2" d="M11.375 43.25H3.875C3.37772 43.25 2.90081 43.0525 2.54918 42.7008C2.19754 42.3492 2 41.8723 2 41.375V3.875C2 3.37772 2.19754 2.90081 2.54918 2.54918C2.90081 2.19754 3.37772 2 3.875 2H11.375V43.25Z" fill="#DA0025"/>
                            <path d="M18.875 18.875H33.875" stroke="#191C1F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M18.875 26.375H33.875" stroke="#191C1F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M41.375 2H3.875C2.83947 2 2 2.83947 2 3.875V41.375C2 42.4105 2.83947 43.25 3.875 43.25H41.375C42.4105 43.25 43.25 42.4105 43.25 41.375V3.875C43.25 2.83947 42.4105 2 41.375 2Z" stroke="#191C1F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.375 2V43.25" stroke="#191C1F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        <p className='font-[500] mt-3'>Processing</p>
                </div>
            </div>
            <div className='w-[100%] h-[8px] steps__connector'></div>
            <div className=''>
                <div className='pt-10 absolute'>
                       <span className='text-center '>
                            <svg className='mx-auto' width="30" height="30" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.2" d="M11.375 43.25H3.875C3.37772 43.25 2.90081 43.0525 2.54918 42.7008C2.19754 42.3492 2 41.8723 2 41.375V3.875C2 3.37772 2.19754 2.90081 2.54918 2.54918C2.90081 2.19754 3.37772 2 3.875 2H11.375V43.25Z" fill="#DA0025"/>
                            <path d="M18.875 18.875H33.875" stroke="#191C1F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M18.875 26.375H33.875" stroke="#191C1F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M41.375 2H3.875C2.83947 2 2 2.83947 2 3.875V41.375C2 42.4105 2.83947 43.25 3.875 43.25H41.375C42.4105 43.25 43.25 42.4105 43.25 41.375V3.875C43.25 2.83947 42.4105 2 41.375 2Z" stroke="#191C1F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.375 2V43.25" stroke="#191C1F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        <p className='font-[500] mt-3'>On The Way</p>
                </div>
            </div>
            <div className='w-[100%] h-[8px] steps__connector'></div>
            <div className=''>
                <div className="pt-10 absolute">
                       <span className='text-center '>
                            <svg className='mx-auto' width="30" height="30" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.2" d="M11.375 43.25H3.875C3.37772 43.25 2.90081 43.0525 2.54918 42.7008C2.19754 42.3492 2 41.8723 2 41.375V3.875C2 3.37772 2.19754 2.90081 2.54918 2.54918C2.90081 2.19754 3.37772 2 3.875 2H11.375V43.25Z" fill="#DA0025"/>
                            <path d="M18.875 18.875H33.875" stroke="#191C1F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M18.875 26.375H33.875" stroke="#191C1F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M41.375 2H3.875C2.83947 2 2 2.83947 2 3.875V41.375C2 42.4105 2.83947 43.25 3.875 43.25H41.375C42.4105 43.25 43.25 42.4105 43.25 41.375V3.875C43.25 2.83947 42.4105 2 41.375 2Z" stroke="#191C1F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.375 2V43.25" stroke="#191C1F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        <p className='font-[500] mt-3'>Delivered</p>
                </div>
            </div>
            <div className='w-[100%] h-[8px] steps__connector'></div>
         </div>
        </div>
  )
}

export default Tracking