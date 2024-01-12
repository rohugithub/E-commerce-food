import React from 'react'
import { LuMailOpen } from "react-icons/lu";

function Footer() {
  return (
    <div className=' bg-accentDark mt-16'>
        <div className=' container py-6 flex flex-cols  md:flex-row justify-between items-center gap-4 text-white'>
            <div className='flex flex-shrink-0 items-center gap-4'>
                <LuMailOpen  className=' text-[60px]'/>
                <div >
                    <h3 className=' text-xl sm:text-2xl font-semibold'>
                    Sign up TO Our Newsletter
                    </h3>
                     <p> ...and recieve $20 coupon for first shopping </p>
               </div>     
            </div>
            
            <div className=' relative max-w-[500px]  w-full flex'>
            <input type="text" placeholder='Your Email Address' className=' py-4 px-6 w-full rounded-full' />
            <button className='  bg-accentDark absolute top-[50%] right-2 translate-y-[-50%] py-2 px-4 rounded-full hover:bg-accent'>Subscribe!</button>
        </div>
        </div>
       
    </div>
  )
}

export default Footer