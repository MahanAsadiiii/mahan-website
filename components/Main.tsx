import React from 'react'
import { Layout } from './Index'
import Link from 'next/link';
import { characterImg } from '@/utilities/Image';
import Image from 'next/image';


const Main = () => {

    return (
        <Layout idName={'home'}>
            <div className='w-full flex flex-col md:flex-row md:items-center justify-between gap-10 cursor-default my-20 select-none '>
                <div className="flex flex-col items-center justify-end basis-1/2 gap-3 lg:gap-8 ">
                    <h2 className='flex flex-wrap items-center drop-shadow-md '>
                        <span className=' text-3xl md:text-3xl lg:text-4xl'>سلام</span>, من <span className=' text-[#5651e5] dark:text-[#736ffa] text-4xl md:text-4xl lg:text-5xl'>ماهان</span> هستم.
                    </h2>
                    <p className='text-gray-600 dark:text-white max-w-[90%] md:max-w-[70%] text-center text-sm md:text-sm lg:text-base'>فارغ التحصیل مهندسی کامپیوتر, گرایش نرم افزار, که در حال حاضر به عنوان طراح و توسعه دهنده وب سایت, مشغول کار هستم.
                    </p>
                    <Link href="file/MahanAsadi-cv.pdf" className='lg:w-3/5'>
                        <button className='shadow-md shadow-gray-400 dark:shadow-none bg-gradient-to-r from-[#5651e5] to-[#709dff]  text-white py-3 px-16 rounded-md mt-4 hover:scale-110 w-full ease-in-out duration-500'>دانلود رزومه
                        </button>
                    </Link>
                </div>
                <div className="flex items-center justify-center basis-1/2">
                    <Image alt='main-vector' src={characterImg} />
                </div>
            </div>
        </Layout>
    )
}

export { Main }