import React from 'react'

const strategyCard = ({number,strategy,desc}:{number:string;strategy:string;desc:string}) => {
  return (
    <div className=' group hover:bg-primary_color rounded-lg xl:p-[24px] sm:p-[20px] p-[16px]'>
     <div className='xl:text-[72px] text-[52px] font bold text-text_gray group-hover:text-white  '>{number}</div> 
     <h1 className='xl:text-[24px] pb-4 text-[22px] font-bold text-primary_color group-hover:text-white '>{strategy}</h1> 
     <p className='xl:text-base text-[11px]  text-justify  text-text_gray group-hover:text-gray-200'>{desc}</p> 
    </div>
  )
}

export default strategyCard