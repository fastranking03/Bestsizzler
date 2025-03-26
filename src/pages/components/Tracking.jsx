import React, { useState } from 'react';

const Tracking = () => {
    const OrderStatus = ["Order Placed", "Processing", "On The Way", "Delivered"];
    const [currentStep, setCurrentStep] = useState(2);
   
    return (
        <div className='bg-white shadow p-14 px-20 pb-32'>
          <div className='flex justify-between items-center'>
            <div className=''>
                <div className='pt-10 absolute translate-x-[-35px]'>
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
            <div className='w-[100%] h-[8px] steps__connector active___check active__connector'></div>
            <div className=''>
                <div className='pt-10 absolute translate-x-[-30px]'>
                       <span className='text-center '>
                         <svg className='mx-auto' width="40" height="40" viewBox="0 0 52 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.2" d="M2.27245 15C2.09298 15.3185 1.99893 15.6807 2.00001 16.0493V41.2838C2.0019 41.6483 2.09678 42.0059 2.27506 42.3204C2.45335 42.6349 2.70874 42.8953 3.01549 43.0753L24.8111 55.7438C25.105 55.9173 25.4387 56.0057 25.7771 55.9997L26 28.6666L2.27245 15Z" fill="#DA0025"/>
                        <path d="M50 41.4582V16.5418C49.9981 16.1819 49.9023 15.8288 49.7224 15.5183C49.5424 15.2077 49.2846 14.9506 48.975 14.7728L26.975 2.26407C26.6786 2.09108 26.3423 2 26 2C25.6577 2 25.3214 2.09108 25.025 2.26407L3.025 14.7728C2.71538 14.9506 2.45759 15.2077 2.27763 15.5183C2.09768 15.8288 2.00191 16.1819 2 16.5418V41.4582C2.00191 41.8181 2.09768 42.1712 2.27763 42.4817C2.45759 42.7923 2.71538 43.0494 3.025 43.2272L25.025 55.7359C25.3214 55.9089 25.6577 56 26 56C26.3423 56 26.6786 55.9089 26.975 55.7359L48.975 43.2272C49.2846 43.0494 49.5424 42.7923 49.7224 42.4817C49.9023 42.1712 49.9981 41.8181 50 41.4582V41.4582Z" stroke="#191C1F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M38 35V22.1848L14 9" stroke="#191C1F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M50 15L26.2276 29L2 15" stroke="#191C1F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M26 29V56" stroke="#191C1F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                         </span>
                        <p className='font-[500] mt-3'>Processing</p>
                </div>
            </div>
            <div className='w-[100%] h-[8px] steps__connector'></div>
            <div className=''>
                <div className='pt-10 absolute translate-x-[-30px]'>
                       <span className='text-center '>
                             <svg className='mx-auto' width="45" height="39" viewBox="0 0 74 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.2" d="M52 27H2V38.6667C2 39.2855 2.26339 39.879 2.73223 40.3166C3.20107 40.7542 3.83696 41 4.5 41H10.75C10.75 39.1435 11.5402 37.363 12.9467 36.0503C14.3532 34.7375 16.2609 34 18.25 34C20.2391 34 22.1468 34.7375 23.5533 36.0503C24.9598 37.363 25.75 39.1435 25.75 41H48.25C48.2492 39.7705 48.5953 38.5624 49.2536 37.4975C49.9119 36.4325 50.8591 35.5481 52 34.9333V27Z" fill="#DA0025"/>
                            <path opacity="0.2" d="M63.25 41C63.2508 39.7123 62.9049 38.4471 62.247 37.3317C61.5891 36.2162 60.6424 35.2898 59.5021 34.6456C58.3618 34.0014 57.0681 33.6622 55.7512 33.662C54.4343 33.6618 53.1405 34.0006 52 34.6444V19H72V38.5556C72 39.2039 71.7366 39.8256 71.2678 40.284C70.7989 40.7425 70.163 41 69.5 41H63.25Z" fill="#DA0025"/>
                            <path d="M52 7.00005H65.3125C65.8106 6.99694 66.298 7.13853 66.7107 7.40624C67.1235 7.67395 67.4422 8.05525 67.625 8.50004L72 19" stroke="#191C1F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 27H52" stroke="#191C1F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M55.5 49C59.6421 49 63 45.6421 63 41.5C63 37.3579 59.6421 34 55.5 34C51.3579 34 48 37.3579 48 41.5C48 45.6421 51.3579 49 55.5 49Z" stroke="#191C1F" stroke-width="3.5" stroke-miterlimit="10"/>
                            <path d="M18.5 49C22.6421 49 26 45.6421 26 41.5C26 37.3579 22.6421 34 18.5 34C14.3579 34 11 37.3579 11 41.5C11 45.6421 14.3579 49 18.5 49Z" stroke="#191C1F" stroke-width="3.5" stroke-miterlimit="10"/>
                            <path d="M48 41H26" stroke="#191C1F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.75 41H4.5C3.83696 41 3.20107 40.7432 2.73223 40.2861C2.26339 39.829 2 39.209 2 38.5625V4.4375C2 3.79103 2.26339 3.17105 2.73223 2.71393C3.20107 2.25681 3.83696 2 4.5 2H52V34.6625" stroke="#191C1F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M52 19H72V38.5556C72 39.2039 71.7366 39.8256 71.2678 40.284C70.7989 40.7425 70.163 41 69.5 41H63.25" stroke="#191C1F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                         </span>
                        <p className='font-[500] mt-3'>On The Way</p>
                </div>
            </div>
            <div className='w-[100%] h-[8px] steps__connector '></div>
            <div className=''>
                <div className="pt-10 absolute translate-x-[-49px]">
                       <span className='text-center '>
                             <svg width="55" height="40" viewBox="0 0 75 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.2" d="M58.8286 30.9704L47.7706 42.0285C47.4692 42.3103 47.104 42.5149 46.7063 42.6248C46.3086 42.7347 45.8901 42.7466 45.4868 42.6595L28.0583 38.3024C27.7399 38.2136 27.4433 38.0602 27.1869 37.8516L10.75 25.0206L20.546 6.60051L35.9612 2.09314C36.509 1.93607 37.0947 1.97866 37.6139 2.21334L48.0109 6.93105H41.7908C41.4786 6.92996 41.1693 6.99044 40.8806 7.10903C40.5918 7.22763 40.3293 7.402 40.108 7.62218L28.3288 19.3714C28.0882 19.6183 27.9029 19.9135 27.785 20.2374C27.6672 20.5613 27.6194 20.9066 27.645 21.2503C27.6706 21.594 27.7689 21.9284 27.9333 22.2313C28.0978 22.5342 28.3248 22.7987 28.5992 23.0073L30.2219 24.2394C31.8882 25.4831 33.9119 26.155 35.9913 26.155C38.0706 26.155 40.0943 25.4831 41.7607 24.2394L45.607 21.3546L58.8286 30.9704Z" fill="#DA0025"/>
                            <path d="M71.0613 21.6254L63.6392 25.3214L54.0234 6.93132L61.5357 3.17518C62.094 2.8906 62.7422 2.83831 63.3388 3.0297C63.9355 3.22109 64.4323 3.64064 64.7209 4.19685L72.113 18.35C72.2629 18.6333 72.3547 18.9437 72.3828 19.263C72.411 19.5823 72.375 19.904 72.277 20.2092C72.179 20.5144 72.021 20.7969 71.8122 21.0401C71.6034 21.2833 71.3481 21.4823 71.0613 21.6254V21.6254Z" stroke="#191C1F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.7513 25.0208L3.32916 21.2947C3.04338 21.1546 2.78868 20.9585 2.58021 20.7181C2.37173 20.4776 2.21374 20.1977 2.11563 19.8949C2.01751 19.5921 1.98127 19.2728 2.00907 18.9557C2.03687 18.6387 2.12814 18.3305 2.27744 18.0494L9.66954 3.89624C9.9587 3.34043 10.4534 2.91947 11.0484 2.72303C11.6433 2.52658 12.2915 2.57018 12.8547 2.84452L20.367 6.60067L10.7513 25.0208Z" stroke="#191C1F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M63.6365 25.3212L58.8286 30.9705L47.7706 42.0286C47.4692 42.3104 47.104 42.515 46.7063 42.6249C46.3086 42.7348 45.8901 42.7467 45.4868 42.6596L28.0583 38.3025C27.7399 38.2137 27.4433 38.0603 27.1869 37.8517L10.75 25.0208" stroke="#191C1F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M58.8349 30.9707L45.6133 21.355L41.767 24.2397C40.1006 25.4835 38.0769 26.1554 35.9975 26.1554C33.9182 26.1554 31.8945 25.4835 30.2281 24.2397L28.6054 23.0077C28.331 22.7991 28.1041 22.5346 27.9396 22.2317C27.7751 21.9288 27.6768 21.5944 27.6512 21.2506C27.6257 20.9069 27.6734 20.5617 27.7913 20.2378C27.9091 19.9138 28.0945 19.6187 28.335 19.3718L40.1143 7.62254C40.3355 7.40236 40.5981 7.22798 40.8868 7.10939C41.1756 6.9908 41.4849 6.93032 41.797 6.93141H54.027" stroke="#191C1F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.543 6.60051L35.9582 2.09314C36.5059 1.93607 37.0916 1.97866 37.6109 2.21334L48.0079 6.93106" stroke="#191C1F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M32.3861 49.0001L23.3413 46.7164C22.9728 46.6331 22.6315 46.4573 22.3497 46.2056L15.5586 40.3159" stroke="#191C1F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                         </span>
                        <p className='font-[500] mt-3'>Delivered</p>
                </div>
            </div>
           
         </div>
        </div>
  )
}

export default Tracking