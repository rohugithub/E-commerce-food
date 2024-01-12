import React from 'react'

function Banner() {
  return (
    <div className=' container pt-16 pb-5'>
        <div className='grid  sm:grid-cols-2 gap-4  sm:gap-8'>
            <div className=' overflow-hidden rounded-lg'>
                <img src="/banner__1.webp" alt="" />
             </div>
             <div className=' overflow-hidden rounded-lg'>
                <img src="/banner__2.webp" alt="" />
             </div>
            
        </div>
    </div>
  )
}

export default Banner