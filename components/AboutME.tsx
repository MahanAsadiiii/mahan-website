import { Character } from '@/static/Character'
import React from 'react'
import { Layout } from './Index'
import { characterImg } from '@/utilities/Index'
import Image from 'next/image'

const AboutME = () => {
    return (
        <div id='about-me' className='bg-[#413F42] dark:bg-gray-200 w-full'>
            <Layout>
                <div className="flex items-center md:mx-auto flex-col ">
                    <div className="my-2">
                        <h1 className='text-white dark:text-[#1f2937]'>درباره من</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex flex-col gap-7 my-7 md:my-10 w-1/2 dark:text-black">
                            <div className="bg-white p-5 md:p-7 rounded-lg  ">
                                <p className='md:text-lg text-justify'>
                                    سلام من <span className='text-violet-600 text-xl '>ماهان اسدی</span> هستم,
                                    متولد فرودین سال 1376 با تیپ شخصیتی ESTJ.
                                    <br />
                                    اگر بخواهم ویژگی‌ها و اخلاق کاری خودم را به طور خلاصه توضیح بدهم؛ با
                                    تعهد و آگاهی نسبت به وظایفم، همیشه سعی داشتم تا با خلاقیت فردی،
                                    اهداف جدیدی برای خودم ترسیم کنم تا با چالش‌های جدیدتری روبه‌رو بشم.
                                    بااین کار به رشد و پیشرفت خودم و تیم کاریم کمک کنم.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg p-5 flex flex-col lg:flex-row justify-start gap-10 w-full">
                                <h3 className='lg:basis-3/5 pt-2 text-lg md:text-2xl flex justify-around'>ویژگی‌ها و اخلاق فردی:</h3>
                                <ul className='lg:mt-12 flex flex-col pr-14 '>
                                    {Character.map((feature, index) => {
                                        return (
                                            <li key={index} className='list-disc md:text-lg font-[estedad-regular] cursor-default'>{feature.name}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>

                        <Image src={characterImg} alt="" className='w-1/2' />

                    </div>
                </div>
            </Layout>
        </div>

    )
}

export { AboutME }