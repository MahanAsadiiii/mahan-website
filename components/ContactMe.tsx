import React, { useEffect,useRef } from 'react'
import { Layout, SocialMedia } from './Index'
import { message } from 'antd';
import { Button, FormControl, FormErrorMessage, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { useFormik } from "formik";
import * as Yup from 'yup';

const onSubmit = async (values: any, formik: any) => {
  const response = await fetch("https://formsubmit.co/7f166d31eb66846557469ae88554b1a9", {
    method: "POST",
    body: values,
  })

    if (!response.ok) {
      message.error({ content: 'ارسال فرم با مشکل مواجه شده', duration: 2, className: " font-medium font-[estedad-Medium]" });
    } else {
      message.success({ content: 'با موفقیت ارسال شد', duration: 2, className: ' font-medium font-[Estedad-Medium]' });
      formik.resetForm();
    }
  
}


const ContactMe = () => {
  


  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      mobileNumber: "",
      note: "",
    },
    onSubmit,
    validationSchema: Yup.object({
      fullName: Yup.string().required("فیلد اجباری"),
      mobileNumber: Yup.number().typeError("لطفا عدد وارد کنید").required('فیلد اجباری'),
      email: Yup.string().email("فرمت ایمیل مورد تایید نیست").required("فیلد اجباری"),
      note: Yup.string()
      .min(50, "باید حداقل 50 کاراکتر باشد")
        .required("فیلد اجباری"),
      }),
    });
    


  return (
    <Layout idName={"contact-me"}>
      <div className="flex gap-4 justify-center">
        <div className=" flex flex-col w-full md:w-3/4 ">
          <h1 className='mx-auto mb-10 text-3xl md:text-4xl'>تماس با من</h1>
          <form onSubmit={formik.handleSubmit}>
            <FormControl className="flex flex-col" isInvalid={!!formik.errors.fullName && formik.touched.fullName}>
              <FormLabel htmlFor="fullName" className='py-2 text-xs md:text-base font-[estedad-bold] '>نام و نام خانوادگی</FormLabel>
              <Input id='fullName' type="text" className='border-2 rounded-lg p-3 flex border-gray-300' placeholder='نام و نام خانوادگی'  {...formik.getFieldProps("fullName")} />
              <FormErrorMessage className='font-[estedad-bold] text-xs pr-3 pt-2 text-red-600'>{formik.errors.fullName}</FormErrorMessage>
            </FormControl>
            <FormControl className="flex flex-col" isInvalid={!!formik.errors.mobileNumber && formik.touched.mobileNumber}>
              <FormLabel htmlFor="mobileNumber" className='py-2 text-xs md:text-base font-[estedad-bold]'>شماره موبایل</FormLabel>
              <Input id='mobileNumber' type="tel" className='border-2 rounded-lg p-3 flex border-gray-300' placeholder='09364952555' {...formik.getFieldProps('mobileNumber')} />
              <FormErrorMessage className='font-[estedad-bold] text-xs pr-3 pt-2 text-red-600'>{formik.errors.mobileNumber}</FormErrorMessage>
            </FormControl>
            <FormControl className="flex flex-col" isInvalid={!!formik.errors.email && formik.touched.email}>
              <FormLabel htmlFor="email" className='py-2 text-xs md:text-base font-[estedad-bold]'>ایمیل</FormLabel>
              <Input id='email' type="email" className='border-2 rounded-lg p-3 flex border-gray-300' placeholder='info@mahan-asadi.ir' {...formik.getFieldProps('email')} />
              <FormErrorMessage className='font-[estedad-bold] text-xs pr-3 pt-2 text-red-600'>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl className="flex flex-col" isInvalid={!!formik.errors.note && formik.touched.note}>
              <FormLabel htmlFor="note" className='py-2 text-xs md:text-base font-[estedad-bold]'>پیام</FormLabel>
              <Textarea id='note' className='border-2 rounded-lg p-3 flex border-gray-300' rows={8} placeholder='متن پیام خود را وارد کنید.....' {...formik.getFieldProps('note')} />
              <FormErrorMessage className='font-[estedad-bold] text-xs pr-3 pt-2 text-red-600'>{formik.errors.note}</FormErrorMessage>
            </FormControl>
            <Button type="submit" className='shadow-xl shadow-gray-400 bg-gradient-to-r from-[#5651e5] to-[#709dff] w-full p-2 md:p-4 text-gray-100 mt-4 rounded-lg hover:scale-90 ease-in duration-300'>ارسال</Button>
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