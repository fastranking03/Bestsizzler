import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegUser,FaFacebookF,FaInstagram  } from "react-icons/fa6";


const Header = () => {
  return (
    <div className='bg-[#DA0025]'>
        <div className='flex'>
            <div className='w-[40%]'>
                <p><span><TbTruckDelivery/></span> Free Delivery on all orders Over £XX</p>
            </div>
            <div>
                <ul>
                     <li><Link><IoLocationOutline/> Put Your Location/Address</Link></li>
                     <li><Link> Register</Link></li>
                     <li><Link><FaRegUser /> Login</Link></li>
                     <li>
                        <ul>
                            <li><Link><FaFacebookF /></Link></li>
                            <li><Link><FaInstagram  /></Link></li>
                         </ul>
                     </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header