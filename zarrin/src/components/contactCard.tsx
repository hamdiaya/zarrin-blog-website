import React from 'react'
import { GoHome } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
const contactCard = ({type,address}:{type:string;address:string}) => {
  return (
    <div className=' bg-white rounded-lg xl:p-[40px]   md:p-[25px] sm:p-[15px] p-[30px] flex flex-col place-items-center text-center'>
        <div className='mb-4 xl:text-[24px] text-[16px] bg-primary_color xl:p-[23px] p-[16px] w-fit rounded-full text-white'>
            {
                type=="Office"?<GoHome/>:
                type=="Email"?<MdOutlineEmail/>:<BsTelephone/>
            }
        </div>
        <div className='mb-4 text-primary_color xl:text-[20px] text-[13px] font-bold'>{type}</div>
        <div className='text-text_gray xl:text-base text-[11px]'>{address}</div>
    </div>
  )
}

export default contactCard