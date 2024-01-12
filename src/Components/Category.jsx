// eslint-disable-next-line no-unused-vars
import React from 'react'
import SmallCard from './SmallCard'

function Category() {
  const data = [
    {
      id:1,
      name:"fresh fruit",
      count:"12 prod",
      img:"/category__1.webp"
    },
    {
      id:2,
      name:"fresh Veges",
      count:"15 prod",
      img:"/category__2.webp"
    },
    {
      id:3,
      name:"fresh Soup",
      count:"10 prod",
      img:"/category__3.webp"
    },
    {
      id:4,
      name:"fresh Bread & Toast",
      count:"1 products",
      img:"/category__4.webp"
    },
    {
      id:5,
      name:"fresh fish",
      count:"5 prod",
      img:"/category__5.webp"
    },
    {
      id:6,
      name:"fresh Eggs",
      count:"12 prod",
      img:"/category__6.webp"
    },
    {
      id:7,
      name:"Juice can",
      count:"14 prod",
      img:"/category__7.webp"
    },
    {
      id:8,
      name:"fresh fruit",
      count:"11 prod",
      img:"/category__1.webp"
    }
   
    
    
    
    
  ]
  
  return (
    <div className=' container pt-16'>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item, index)=>(
          <SmallCard  data={item}/>
        ))}
       
        
      </div>
    </div>
  )
}

export default Category