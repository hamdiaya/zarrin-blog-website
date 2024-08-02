import React from 'react'

const customInput = ({placeholder}:{placeholder:string;}) => {
  return (
    <div>
        <div className='xl:text-base text-[11px] font-semibold xl:mb-[8px] mb-[5px]'>{placeholder}</div>
        <div className='xl:h-[54px] h-[37px]  w-full '>
        <input className='h-full w-full border border-gray-500 rounded-lg ' type="text" name="" id=""  />
        </div>
    </div>
  )
}

export default customInput