import React from 'react'
import { LiaShippingFastSolid ,  LiaMoneyBillWaveAltSolid,LiaGiftSolid} from "react-icons/lia";
import { FiPhoneCall } from "react-icons/fi";
import FooterCard from './FooterCard';

function Footer2() {
    const data =[
      {  
        tittle:'Free Shipping',
        icon: <LiaShippingFastSolid/>
     },
     {  
        tittle:'Best Price Guarantee',
        icon: <LiaMoneyBillWaveAltSolid/>
     },
     {
        tittle:"Free Curbside Pickup",
        icon:<LiaGiftSolid/>
     },
     {
        tittle:'Support 24/7',
        icon:<FiPhoneCall/>
     }

    ]
  return (
    <div className=' container pt-10'>
        <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.map((item, index)=>(
               
               <FooterCard  data={item}/>
            ))}
        </div>
    </div>
  )
}

export default Footer2