import React from 'react'
import Image from 'next/image'
import { SocialMedia } from './Index'
import { heroGif } from '@/utilities/Index'

const Main = () => {
    return (
            <div className='w-full md:w-5/6 mx-auto flex flex-col md:flex-row md:items-center py-14 lg:py-16 justify-between gap-10'>
                <div className="flex flex-col items-center basis-1/2 ">
                    <h1 className=''><span className='text-4xl md:text-5xl'>سلام</span>, من <span className=' text-violet-500 text-4xl md:text-5xl '>ماهان</span> هستم.</h1>
                    <p className='pt-4 text-gray-600 max-w-[70%] text-center'>فارغ التحصیل کارشناسی مهندسی کامپیوتر, گرایش نرم افزار, که در حال حاضر به عنوان طراح و توسعه دهنده وب سایت, مشغول آموزش و کار هستم.</p>
                    <a href="/"><button className='py-3 px-16 rounded-md mt-8 '>دانلود رزومه</button></a>
                </div>
                <div className="flex justify-center basis-1/2">
                    <Image src={heroGif} alt='/' />
                </div>
            </div>
    )
}

export { Main }