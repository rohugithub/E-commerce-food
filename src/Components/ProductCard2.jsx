import React from 'react'
import { AiFillStar ,AiOutlineStar,AiOutlineShopping } from "react-icons/ai";

function ProductCard2({data}) {
  return (
    <div className=' border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg relative'>
        <img src={data.img} alt="" />
        <div className=' relative space-y-2 p-4'>
            <div className='flex text-yellow-400 gap-[2px] text-[20px]'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiOutlineStar/>
            </div>
            <h3 className=' font-medium'>{data.name}</h3>
            <h3 className=' font-medium text-2xl text-red-500'>{data.price}</h3>
            <div className=' absolute -top-4 right-2 bg-accent text-white rounded-full w-[50px] h-[50px]  grid place-items-center cursor-pointer'>
                <AiOutlineShopping/>
            </div>
        </div>
    </div>
  )
}

export default ProductCard2