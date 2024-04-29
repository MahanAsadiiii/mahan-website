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
        .sendForm('service_tebfp86', 'template_sa0evgg', formRef.current, {
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
        .min(40, "باید حداقل 40 کاراکتر باشد")
        .required("فیلد اجباری"),
    }),
  });



  return (
    <Layout idName={"contact-me"}>
      <div className="flex gap-4 justify-center">
        <div className=" flex flex-col w-full md:w-3/4 ">
          <h1 className='text-center mb-10 '>تماس با من</h1>
          <form ref={formRef} onSubmit={formik.handleSubmit}>
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
            <ReCAPTCHA id='captcha' sitekey='6LeSWYkpAAAAAF71XrjpcNU2SvS9eDLirbs6g7W7' className='pt-3' onChange={() => { setCaptcha(!captcha) }} />
            <FormErrorMessage>{captcha}</FormErrorMessage>
            <Button isLoading={isLoading} type="submit" className='shadow-md shadow-gray-400 dark:shadow-gray-800 bg-gradient-to-r from-[#5651e5] to-[#709dff] w-full p-2 md:p-4 text-gray-100 mt-4 rounded-lg hover:scale-90 ease-in duration-300'>ارسال</Button>
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