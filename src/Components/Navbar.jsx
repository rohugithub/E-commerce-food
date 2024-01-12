// eslint-disable-next-line no-unused-vars
import React from 'react'
import { IoSearch } from "react-icons/io5";
import { RiUserLine } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";

function Navbar() {
  return (
    <div className='container hidden lg:block'>
        <div className=' flex justify-between items-center  h-16 w-full px-10 '>
                  

                    <img className=' h-[200px] w-[250px] object-cover mt-7' src="/foodlogo.jpg" alt="logofood" />
            
                 <div  className=' relative max-w-[500px] w-full'> 
                                  <input className=' border-none outline-none bg-sky-200 py-2 px-5 rounded-[40px] w-full' type="text" placeholder='Search items....'/>
                                  <IoSearch className='absolute top-2 right-4'size={20}color='white' />
                </div>
                <div className='flex gap-4'>
                    <span className='flex justify-center rounded-full items-center border border-gray-400 w-[40px] h-[40px]'>
                      <RiUserLine className=''/>
                    </span>
                       <span className='flex justify-center rounded-full items-center border border-gray-400 w-[40px] h-[40px]'>
                        <TiShoppingCart  size={22}/>
                        
                        </span>
                </div>
               
        </div>
    </div>
  )
}

export default Navbar