import React from 'react'

function FooterCard({data}) {
  return (
    <div className=' flex items-center gap-4'>
        <div className=' bg-gray-400 w-[50px] h-[50px] text-accentDark text-[24px] grid place-items-center rounded-full'>
            {data.icon}

        </div>
        <div>
            <h3 className=' text-accent font-medium text-xl'>{data.tittle}</h3>
            <p className=' text-gray-500 text-[14px]'>Lorem, ipsum dolor.</p>
        </div>
    </div>
  )
}

export default FooterCard