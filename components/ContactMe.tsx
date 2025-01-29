import React, { useState, useRef } from 'react'
import { Layout, SocialMedia } from './Index'
import { message } from 'antd';
import { Button, FormControl, FormErrorMessage, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { useFormik } from "formik";
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha'

const ContactMe = () => {

  const [isLoading, setLoading] = useState(false);
  const [captcha, setCaptcha] = useState(false);
  const formRef: any = useRef(null)

  const onSubmit = async (values: any) => {
    setLoading(true)
    if (!captcha) {
      message.error({ content: 'کپچا را کامل کنید', duration: 3, className: "font-medium font-[estedad-Medium]" });
      setLoading(false)
    } else {
      emailjs
        .sendForm('service_qz27neo', 'template_sa0evgg', formRef.current, {
          publicKey: 'rT74FeaTptIuS61wT',
        })
        .then(
          () => {
            message.success({ content: 'فرم با موفقیت ارسال شد', duration: 3, className: 'font-medium font-[Estedad-Medium]' });
            formik.resetForm();
            setLoading(false)
            setCaptcha(false)
          },
          (error) => {
            console.log('FAILED...', error.text);
            message.error({ content: 'ارسال فرم با مشکل مواجه شده', duration: 3, className: " font-medium font-[estedad-Medium]" });
            setLoading(false)
            setCaptcha(false)
          },
        );
    }
  };


  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      mobileNumber: "",
      note: "",
    },
    onSubmit,
    validationSchema: Yup.object({
      fullName: Yup.string()
        .required("فیلد اجباری"),
      mobileNumber: Yup.number()
        .typeError("لطفا عدد وارد کنید")
        .required('فیلد اجباری'),
      email: Yup.string().email("فرمت ایمیل مورد تایید نیست")
        .required("فیلد اجباری"),
      note: Yup.string()
        .min(10, "باید حداقل 10 کاراکتر باشد")
        .required("فیلد اجباری"),
    }),
  });



  return (
    <Layout idName={"contact-me"}>
      <div className="flex max-w-5xl mx-auto w-full">
        <form ref={formRef} className='w-full' onSubmit={formik.handleSubmit}>
          <div className='flex gap-5'>
            <FormControl className="flex flex-col w-1/3" isInvalid={!!formik.errors.fullName && formik.touched.fullName}>
              <FormLabel htmlFor="fullName" className='py-2 text-xs md:text-base font-[estedad-bold] '>نام و نام خانوادگی</FormLabel>
              <Input id='fullName' type="text" className='border-2 rounded-lg p-3 flex border-gray-300 text-black' placeholder='نام و نام خانوادگی'  {...formik.getFieldProps("fullName")} />
              <FormErrorMessage className='font-[estedad-bold] text-xs pr-3 pt-2 text-red-600'>{formik.errors.fullName}</FormErrorMessage>
            </FormControl>
            <FormControl className="flex flex-col w-1/3" isInvalid={!!formik.errors.mobileNumber && formik.touched.mobileNumber}>
              <FormLabel htmlFor="mobileNumber" className='py-2 text-xs md:text-base font-[estedad-bold]'>شماره موبایل</FormLabel>
              <Input id='mobileNumber' type="tel" className='border-2 rounded-lg p-3 flex border-gray-300 text-black' placeholder='09364952555' {...formik.getFieldProps('mobileNumber')} />
              <FormErrorMessage className='font-[estedad-bold] text-xs pr-3 pt-2 text-red-600'>{formik.errors.mobileNumber}</FormErrorMessage>
            </FormControl>
            <FormControl className="flex flex-col w-1/3" isInvalid={!!formik.errors.email && formik.touched.email}>
              <FormLabel htmlFor="email" className='py-2 text-xs md:text-base font-[estedad-bold]'>ایمیل</FormLabel>
              <Input id='email' type="email" className='border-2 rounded-lg p-3 flex border-gray-300 text-black' placeholder='info@mahan-asadi.ir' {...formik.getFieldProps('email')} />
              <FormErrorMessage className='font-[estedad-bold] text-xs pr-3 pt-2 text-red-600'>{formik.errors.email}</FormErrorMessage>
            </FormControl>
          </div>
          <FormControl className="flex flex-col w-full" isInvalid={!!formik.errors.note && formik.touched.note}>
            <FormLabel htmlFor="note" className='py-2 text-xs md:text-base font-[estedad-bold]'>پیام</FormLabel>
            <Textarea id='note' className='border-2 rounded-lg p-3 flex border-gray-300 text-black' rows={5} placeholder='متن پیام خود را وارد کنید.....' {...formik.getFieldProps('note')} />
            <FormErrorMessage className='font-[estedad-bold] text-xs pr-3 pt-2 text-red-600'>{formik.errors.note}</FormErrorMessage>
          </FormControl>
          <div className="flex gap-5 pt-3 items-end justify-between">
            <FormErrorMessage>{captcha}</FormErrorMessage>
            <Button isLoading={isLoading} type="submit" className='w-1/3 shadow-md shadow-gray-400 dark:shadow-none bg-gradient-to-r from-[#5651e5] to-[#709dff] p-2 md:p-4 text-gray-100 mt-4 rounded-lg hover:scale-90 ease-in duration-300 '>ارسال</Button>
            <ReCAPTCHA id='captcha' sitekey='6LeSWYkpAAAAAF71XrjpcNU2SvS9eDLirbs6g7W7' className='' onChange={() => { setCaptcha(!captcha) }} />
          </div>
        </form>
      </div>
    </Layout>
  )
}

export { ContactMe }