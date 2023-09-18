import { Character } from '@/static/Character'
import React from 'react'
import { Layout } from './Index'

const AboutME = () => {
    return (
        <div id='about-me' className='bg-[#413F42] w-full'>
            <Layout>
                <div className="flex items-center md:mx-auto flex-col ">
                    <div className="my-2">
                        <h1 className='text-white text-4xl md:text-5xl'>درباره من</h1>
                    </div>
                    <div className="flex flex-col md:flex-row gap-7 my-7 md:my-10">
                        <div className="bg-white p-5 md:p-7 rounded-lg basis-1/2">
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
                        <div className="bg-white rounded-lg p-5 md:p-7 md:basis-1/2 flex justify-between">
                            <h3 className='basis-3/5 md:basis-2/4 text-lg md:text-2xl flex justify-around'>ویژگی‌ها و اخلاق فردی:</h3>
                            <ul className='mt-12 basis-2/5'>
                                {Character.map((feature,index) => {
                                    return (
                                        <li key={index} className='list-disc md:text-lg font-[estedad-regular]'>{feature.name}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>

    )
}

export { AboutME }