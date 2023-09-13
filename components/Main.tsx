import React from 'react'
import Image from 'next/image'
import { Layout, SocialMedia } from './Index'
import { heroGif } from '@/utilities/Index'
import Link from 'next/link'

const Main = () => {
    return (
        <Layout>
            <div className='w-full mx-auto flex flex-col md:flex-row md:items-center  justify-between gap-10'>
                <div className="flex flex-col items-center basis-1/2 gap-5 lg:gap-8">
                    <h1 ><span className='text-4xl md:text-4xl lg:text-5xl'>سلام</span>, من <span className=' text-violet-500 text-4xl md:text-4xl lg:text-5xl'>ماهان</span> هستم.</h1>
                    <p className='text-gray-600 max-w-[70%] text-center text-sm md:text-base lg:text-lg'>فارغ التحصیل کارشناسی مهندسی کامپیوتر, گرایش نرم افزار, که در حال حاضر به عنوان طراح و توسعه دهنده وب سایت, مشغول آموزش و کار هستم.</p>
                    <Link href="/" className='lg:w-3/5'><button className='py-3 px-16 rounded-md mt-4 hover:scale-110 w-full'>دانلود رزومه</button></Link>
                </div>
                <div className="flex justify-center basis-1/2">
                    <Image src={heroGif} alt='/' />
                </div>
            </div>
        </Layout>
    )
}

export { Main }