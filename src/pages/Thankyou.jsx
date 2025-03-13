import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

const Thankyou = () => {
  return (
    <div>
      <Header/>
      <div className='lx:w-[1280px] lg:w-[1080px] md:w-[786px] sm:w-[600px] sm:mx-auto mx-4 '>
        <div className='mt-20 flex flex-col items-center justify-center'>
<img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741780517/Group_238821_cixjce.png" alt="" />
<div className='w-[700px] h-[545px] mt-5'>
  <p className='text-center font-[600] text-[40px]'>Thanks for your Order</p>
  <p className='font-[400] text-[#A6A6A6] text-[20px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Aenean maximus pellentesque congue</p>
</div>
</div>
      </div>
      <Footer/>
    </div>
  )
}

export default Thankyou