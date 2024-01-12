// eslint-disable-next-line no-unused-vars
import React from 'react'

function SmallCard({data}) {
  return (
    <div className=' border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg'>
        <div className="flex items-center justify-between p-6">
            <div className="space-y-4">
                 <h3 className='font-medium text-xl'>{data.name}</h3>
                 <p className=' text-gray-500'>{data.count}</p>
            </div>
            <img className='w-[100px]' src={data.img} alt="" />
        </div>
    </div>
  )
}

export default SmallCard