import React, { useRef } from 'react'
import { Character } from '@/static/Character'
import { Layout } from './Index'
import { HumanShape1 } from '@/utilities/Index'
import Image from 'next/image'
import { motion, useInView } from "framer-motion";


const containerVariants = {
    hidden: { opacity: 0, scale: 0.98 }, // Slightly scale down
    visible: {
        opacity: 1,
        scale: 1, // Scale back to normal
        transition: {
            duration: 1.5, // Longer duration for smoothness
            ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smoother effect
        },
    },
}

const AboutME = () => {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, {
        amount: 0.5,
        once: true
    })

    return (
        <div id='about-me' className='bg-neutral-800 w-full' ref={containerRef}>
            <Layout>
                <div className="flex items-center md:mx-auto flex-col max-w-5xl">
                    {/* <div className="my-2">
                        <h1 className='text-white'>درباره من</h1>
                    </div> */}
                    <div className="flex flex-col md:flex-row items-center gap-2 mt-20 md:mt-10">
                        <div className="flex flex-col md:flex-row gap-7 my-7 md:my-10  dark:text-black w-full relative">
                            <Image src={HumanShape1} alt='topright' className='absolute -top-[106px] z-10 w-44 right-0' />
                            <motion.div className="bg-white px-5 py-7 md:p-7 rounded-lg md:w-1/2 "
                                variants={containerVariants}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                            >
                                <p className='md:text-lg text-justify'>
                                    سلام من <span className='text-violet-600 text-xl '>ماهان اسدی</span> هستم,
                                    متولد فرودین سال ۱۳۷۶ با تیپ شخصیتی ESTJ.
                                    <br />
                                    اگر بخواهم ویژگی‌ها و اخلاق کاری خودم را به طور خلاصه توضیح بدهم؛ با
                                    تعهد و آگاهی نسبت به وظایفم، همیشه سعی داشتم تا با خلاقیت فردی،
                                    اهداف جدیدی برای خودم ترسیم کنم تا با چالش‌های جدیدتری روبه‌رو بشم.
                                    بااین کار به رشد و پیشرفت خودم و تیم کاریم کمک کنم.
                                </p>
                            </motion.div>
                            <motion.div className="bg-white rounded-lg p-5 flex flex-col lg:flex-row justify-start gap-10 md:w-1/2"
                                variants={containerVariants}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                            >
                                <h3 className='lg:basis-3/5 pt-2 text-lg md:text-2xl flex justify-around'>ویژگی‌ها و اخلاق فردی:</h3>
                                <ul className='lg:mt-12 flex flex-col pr-14 '>
                                    {Character.map((feature, index) => {
                                        return (
                                            <li key={index} className='list-disc md:text-lg font-[estedad-regular] cursor-default'>{feature.name}</li>
                                        )
                                    })}
                                </ul>
                            </motion.div>
                        </div>

                        {/* <Image src={characterImg} alt="" className='w-full md:w-1/2' /> */}

                    </div>
                </div>
            </Layout>
        </div>

    )
}

export { AboutME }