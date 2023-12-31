import React, { useState } from 'react'
import { Layout, SocialMedia } from './Index'
import { message } from 'antd';

const ContactMe = () => {

    const openMessage = () => {
      message.loading({ content: 'Loading...', className: "text-lg"});
      setTimeout(() => {
        message.success({ content: 'Successfully sent', duration: 2, className: "text-lg" });
      }, 3000);
    };
  
  return (
    <Layout idName={"contact-me"}>
      <div className="flex gap-4 justify-center">
        <div className=" flex flex-col w-full md:w-3/4 ">
          <h1 className='mx-auto mb-10 text-3xl md:text-4xl'>تماس با من</h1>
          <form onSubmit={(e) => {e.preventDefault()}} >
            <div className="flex flex-col">
              <label htmlFor="FullName" className='py-2 text-xs md:text-base font-[estedad-bold]'>نام و نام خانوادگی</label>
              <input id='FullName' type="text" className='border-2 rounded-lg p-3 flex border-gray-300' placeholder='نام و نام خانوادگی' />
            </div>
            <div className="flex flex-col">
              <label htmlFor="mobileNumber" className='py-2 text-xs md:text-base font-[estedad-bold]'>شماره موبایل</label>
              <input id='mobileNumber' type="number" className='border-2 rounded-lg p-3 flex border-gray-300' placeholder='09364952555' />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className='py-2 text-xs md:text-base font-[estedad-bold]'>ایمیل</label>
              <input id='email' type="email" className='border-2 rounded-lg p-3 flex border-gray-300' placeholder='info@mahan-asadi.ir' />
            </div>
            <div className="flex flex-col">
              <label htmlFor="note" className='py-2 text-xs md:text-base font-[estedad-bold]'>پیام</label>
              <textarea id='note' className='border-2 rounded-lg p-3 flex border-gray-300' rows={8} placeholder='متن پیام خود را وارد کنید.....' />
            </div>
            <button onClick={() => openMessage()} className='shadow-xl shadow-gray-400 bg-gradient-to-r from-[#5651e5] to-[#709dff] w-full p-2 md:p-4 text-gray-100 mt-4 rounded-lg hover:scale-90 ease-in duration-300'>ارسال</button>
          </form>
          <div className="flex w-full md:w-2/3 justify-around mx-auto mt-10">
            <SocialMedia size={28} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export { ContactMe }