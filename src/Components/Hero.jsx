// eslint-disable-next-line no-unused-vars
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";


function hero() {
  return (
    <div className=' container pt-8'>
        <div className=' grid xl:grid-cols-3 xl:grid-rows-2 gap-8 '>
            <div className=" relative xl:col-span-2  xl:row-start-1  xl:row-end-[-1]">
                <img className=' w-full h-full object-cover rounded-lg' src="./hero__1.webp" alt="hero image" />


                <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
                    <p className='text-2xl hidden sm:block'>100% Original dry fruits.</p>
                    <h2 className='text-5xl font-bold  w-96 capitalize'>Dried fruit best quality.</h2>
                    <p className='text-[1.2vw]   text-gray-400 ml-2'> Starting At</p>
                    <div className='   text-red-500 text-2xl  '>$18.36</div>
                    <span className='h-[40px] w-[110px] rounded-full flex item-center justify-center px-2 py-2  text-white font-thin bg-accentDark gap-4 cursor-pointer'>Shop <IoIosArrowRoundForward className=' mx-1 my-1 '/>
                    </span>
                </div>
            </div>

            <div className="relative ">
                        <img className='w-full h-full object-cover rounded-lg' src="/hero__2.webp" alt="hero2 img" /> 

                 <div className=' absolute max-w-[470px] sm:ml-12 ml-5 top-[50%]  -translate-y-[50%] sm:space-y-4'>
                     <h2 className='text-2xl font-bold   capitalize '>best yummy pizza.</h2>
                     <p className='text-[1.2vw]   text-gray-400 ml-2'> Starting At</p>
                     <div className='   text-red-500 text-2xl  '>$50</div>
                     <span className='h-[40px] w-[110px] rounded-full flex item-center justify-center px-2 py-2  text-white font-thin bg-accentDark gap-4 cursor-pointer'>Shop <IoIosArrowRoundForward className=' mx-1 my-1 '/>
                 </span>
                </div>
                
             </div>

             <div className="relative">
                 <img className='w-full h-full object-cover rounded-lg' src="/hero__3.webp" alt="hero2 img" />

                 <div className=' absolute max-w-[470px] sm:ml-12 ml-5 top-[50%]  -translate-y-[50%] sm:space-y-4'>
                     <h2 className='text-2xl font-bold   capitalize '>best yummy chips.</h2>
                     <p className='text-[1.2vw]   text-gray-400 ml-2'> Starting At</p>
                     <div className='   text-red-500 text-2xl  '>$10</div>
                     <span className='h-[40px] w-[110px] rounded-full flex item-center justify-center px-2 py-2  text-white font-thin bg-accentDark gap-4 cursor-pointer'>Shop <IoIosArrowRoundForward className=' mx-1 my-1 '/>
                 </span>
                </div>
            </div>


        </div>
        
    </div>
  )
}

export default hero