import Image from 'next/image';
import Link from 'next/link'
import React, { useEffect, useId, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { motion, useInView } from "framer-motion";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Layout } from './Index';
import { ReactProjects } from '@/static/ReactProjects';
import { NextJsProjects } from '@/static/NextProjects';
import { FaArrowRightLong } from "react-icons/fa6";

const sliderVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { opacity: 1, x: '0%', transition: { duration: 1 } },
}

const Slider = () => {

    const id = useId();
    const Projects = [...NextJsProjects, ...ReactProjects]
    const topFourProjects = Projects.slice(0, 5);
    const ref = useRef(null)
    const isInView = useInView(ref, {
        amount: "all",
    })


    // useEffect(() => {
    //     console.log(`The element ${isInView ? 'is' : "is not"} in viewport`);
    // }, [isInView])

    return (
        <Layout>
            <motion.div className=""
                variants={sliderVariants}
                initial="hidden"
                // animate={isInView ? "visible" : "hidden"} // Trigger animation when in view
                ref={ref}
            >
                <h1 className='text-center'>آخرین پروژه‌ها</h1>


                {/* <Swiper
                    effect={'coverflow'}
                    autoplay={{
                        delay: 500,
                    }}
                    speed={5000}
                    spaceBetween={50}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 0,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    style={{ transitionTimingFunction: 'revert-layer' }}
                    modules={[Autoplay, EffectCoverflow]}
                    loop={true}
                    className="ProjectSlider h-[500px]"
                >
                    {topFourProjects.map((project, index) => (
                        <SwiperSlide className='relative !flex flex-col items-center justify-center gap-8 shadow-md rounded-xl 
                    !h-[350px] !w-80 !max-h-[400px] !max-w-64 ease-in duration-300 px-2 py-5 bg-gradient-to-br from-[#5651e5] to-[#709dff]' key={id + index}>
                            <h4 className='text-white text-2xl font-bold text-end ml-3 w-full'>{project.name}</h4>
                            <Image src={project.imageName} alt={project.name} className='ease-in-out ' height={120} quality={100} />
                            <ul style={{ direction: 'ltr' }} className='grid grid-cols-2 text-start w-5/6 pl-5 min-h-[50px]'>
                                {project.skills.map((skill, index) => {
                                    return (
                                        <li key={index} className='text-sm text-start text-white list-disc cursor-default font-mono w-full'>{skill}</li>
                                    )
                                })}
                            </ul>
                            <Link href={project.link} className='flex items-center gap-2 w-5/6 text-center text-white ' target='_blank'>
                                <FaArrowRightLong />
                                <span className='text-sm'>
                                    نمایش پروژه
                                </span>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper> */}
            </motion.div>
        </Layout>
    )
}

export { Slider }
