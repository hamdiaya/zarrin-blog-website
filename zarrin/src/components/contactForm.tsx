import React from 'react'
import CustomInput from './customInput'
import MessageInput from './messageInput'
import SendButton from './sendButton'

const contactForm = () => {
  return (
    <div className=' flex flex-col xl:gap-5 sm:gap-3 gap-2 bg-white  xl:p-[61px] sm:p-[33px] p-[20px] rounded-2xl w-full'>
        <div className='sm:grid sm:grid-cols-2 xl:gap-5 sm:gap-3 grid gap-2'>
        <CustomInput placeholder='Name' />
        <CustomInput placeholder='Email' />
        <CustomInput placeholder='Phone' />
        <CustomInput placeholder='Subject' />
    </div>
    <MessageInput/>
    <div className='flex justify-center'>
    <SendButton/>
    </div>
    </div>
  )
}

export default contactForm