import React from 'react'
import ProductCard2 from './ProductCard2'

function Content2() {
    const data =[
        {
          id:9,
          name:"Fresh Kiwis ",
          price:"$4",
          img:"/product__5.webp"
        },
        {
          id:10,
          name:"Crunchy mango chips",
          price:"$11",
          img:"/product__2.webp"
        },
        {
          id:11,
          name:"Banana chips",
          price:"$6",
          img:"/product__3.webp"
        },
        {
          id:12,
          name:"Almond organics",
          price:"$9",
          img:"/product__4.webp"
        }
        ,
        {
          id:12,
          name:"fresh fruit",
          price:"$9",
          img:"/product__4.webp"
        }
      ]
  return (
    <div className=' container pt-16'>
        <div className=' lg:flex justify-between  items-center'>   
            <div>
                  <h3 className=' font-medium text-2xl'>Breakfast & Dairy</h3>
                 <p className='text-gray-400 mt-2'>Buy best quality breakfast online from big-basket shop near you.</p>
        </div>   
        <div className=' space-x-6 mt-6 lg:mt-0'> 
        <button className='feature-btn'>Egg & Dairy</button>
        <button className='text-gray-600 hover:text-accent'>pizza </button>
        <button className='text-gray-600 hover:text-accent'>Snacks</button>
        </div>  
        </div>

      
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div>
          <img className='w-full h-full object-cover' src="/feature__2.webp" alt="" />
        </div>

        {data.map((item, index)=>(
          <ProductCard2 data={item}/>
        ))}
      </div>


    </div>



  )
}

export default Content2