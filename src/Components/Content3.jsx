import React from 'react'
import ProductCard3 from './ProductCard3'

function Content3() {
    const data =[
        {
          
          tittle:"Healthy food & healthy life ",
          date:"11-Jan-2024 ",
          comments:6,
          img:"/post__2.webp"
        },
        {
            tittle:"Healthy food & healthy life ",
            date:"5-Jan-2024 ",
            comments:5,
            img:"/post__1.webp"
        },
        {
    
            tittle:"Healthy food & healthy life ",
            date:"1-Jan-2024 4",
            comments:8,
            img:"/post__3.webp"
        },

        
      ]
  return (
    <div className=' container pt-16'>
        <h2 className=' font-bold text-2xl'>Latest News</h2>
        <p className=' text-gray-500'>Present post in a best way to highlight moments of your blog.</p>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8'>
            {data.map((item , index)=>(
                <ProductCard3 data={item}/>
            ))}
        </div>
    </div>
  )
}

export default Content3