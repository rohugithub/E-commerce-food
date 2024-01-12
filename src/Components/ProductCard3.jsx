import React from 'react'

function ProductCard3({data}) {
  return (
    <div className=' space-y-2'>
        <img className='border border-gray-200 rounded-lg hover:scale-105 transition-transform' src={data.img} alt="" />
        <div className=' text-accent font-medium'>
            <span>{data.date}/</span>
            <span>{data.comments}comments</span>
        </div>
        <h3 className=' font-medium text-xl'>{data.tittle}</h3>
    </div>
  )
}

export default ProductCard3