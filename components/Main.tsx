import Reac from 'react'
import { motion } from "framer-motion";
import { Layout } from './Index'
import Link from 'next/link';
import { characterImg } from '@/utilities/Image';
import Image from 'next/image';

const containerVariants = {
    hidden: {
        opacity: 0,
        x: '-100%',
        transition: {
            x: { duration: 2.5 }, // Control the duration of the x translation
            opacity: { duration: 3.5 } // Control the duration of the opacity transition
        },
    },
    visible: {
        opacity: 1,
        x: '0%', // Ensures that x returns to its initial position
        transition: {
            x: { duration: 2.5 }, // Matching x duration with your preference
            opacity: { duration: 3.5 }
        },
    },
    exit: {
        opacity: 0,
        x: "100%",
        transition: {
            type: "tween",
            x: { duration: 2.5, ease: "easeInOut" }, // Customize x transition
            opacity: { duration: 3.5 }, // Control the opacity transition separately
        },
    },
};


const Main = () => {
    // const ref = useRef(null)
    // const isInView = useInView(ref, {
    //     amount: "all",
    // })



    return (
        <Layout idName={'home'}>
            <div className='w-full flex flex-col md:flex-row md:items-center justify-between gap-0 md:gap-10 cursor-default mt-14 md:mt-10 select-none'>
                <motion.div className="flex flex-col items-center justify-end basis-2/5 gap-3 lg:gap-8"
                    variants={containerVariants}
                    // animate={isInView ? 'visible' : "exit"}
                    initial="exit"
                    animate="visible"
                >
                    <h2 className='flex flex-wrap items-center drop-shadow-md '>
                        <span className=' text-3xl md:text-3xl lg:text-4xl'>سلام</span>, من <span className=' text-[#5651e5] dark:text-[#736ffa] text-4xl md:text-4xl lg:text-5xl'>ماهان</span> هستم.
                    </h2>
                    <p className='text-gray-600 dark:text-white max-w-[90%] md:max-w-[70%] text-center text-sm md:text-sm lg:text-base'>فارغ التحصیل مهندسی کامپیوتر, گرایش نرم افزار, که در حال حاضر به عنوان طراح و توسعه دهنده وب سایت, مشغول کار هستم.
                    </p>
                    <Link href="file/MahanAsadiResume-V2.2.pdf" className='lg:w-3/5'>
                        <button className='shadow-md shadow-gray-400 dark:shadow-none bg-gradient-to-r from-[#5651e5] to-[#709dff]  text-white py-3 px-16 rounded-md mt-4 hover:scale-110 w-full ease-in-out duration-500'>دانلود رزومه
                        </button>
                    </Link>
                </motion.div>
                <motion.div className="flex items-center justify-center basis-3/5"
                    variants={containerVariants}
                    // animate={isInView ? 'visible' : "hidden"}
                    initial="hidden"
                    animate="visible"
                >
                    <Image alt='main-vector' src={characterImg} />
                </motion.div>
            </div>
        </Layout>
    )
}

export { Main }