import React from 'react'
import { delay, motion } from "framer-motion";
import { Layout } from './Index'
import Link from 'next/link';
import { characterImg, RocketImage } from '@/utilities/Image';
import Image from 'next/image';

const containerVariants = {
    hidden: {
        y: '100%'
    },
    leftObject: {
        // opacity: 1,
        // x: '200%',
        y: '-200%', // Ensures that x returns to its initial position
        transition: {
            // x: { duration: 4 }, // Matching x duration with your preference
            y: { duration: 4 }, // Matching x duration with your preference
            // opacity: { delay: 2, duration: 2 },
        },
    },
    visible: {
        opacity: 1,
        transition: {
            opacity: { delay: 1.8, duration: 1 }
        },
    },
    enter: {
        opacity: 0,
    },
};


const Main = () => {

    return (
        <Layout idName={'home'}>
            <div className='w-full flex flex-col md:flex-row md:items-center justify-center gap-0 md:gap-10 cursor-default mt-14 md:mt-10 select-none'>
                <motion.div className="flex flex-col items-center justify-end  gap-3 lg:gap-8"
                    variants={containerVariants}
                    initial="enter"
                    animate="visible"
                >
                    <h2 className='flex flex-wrap items-center drop-shadow-md lg:text-6xl'>
                        <span className=' text-3xl md:text-3xl lg:text-8xl'>سلام</span>, من <span className=' text-[#5651e5] dark:text-[#736ffa] text-4xl md:text-4xl lg:text-8xl'>ماهان</span> هستم.
                    </h2>
                    <p className='text-gray-600 dark:text-white max-w-[90%] md:max-w-[70%] text-center text-sm md:text-sm lg:text-xl'>فارغ التحصیل مهندسی کامپیوتر, گرایش نرم افزار, که در حال حاضر به عنوان طراح و توسعه دهنده وب سایت, مشغول کار هستم.
                    </p>
                    <Link href="file/MahanAsadiResume-V2.2.pdf" className='lg:w-2/5'>
                        <button className='shadow-md shadow-gray-400 dark:shadow-none bg-gradient-to-r from-[#5651e5] to-[#709dff]  text-white py-3 px-16 rounded-md mt-4 hover:scale-110 w-full ease-in-out duration-500'>دانلود رزومه
                        </button>
                    </Link>
                </motion.div>
                <motion.div className="absolute"
                    variants={containerVariants}
                    initial="hidden"
                    animate="leftObject"
                >
                    <Image alt='main-vector' src={RocketImage} className='-rotate-45' />
                </motion.div>
            </div>
        </Layout>
    )
}

export { Main }