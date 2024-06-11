import React from 'react'
import { SkillsItems } from '@/static/SkillsItems'
import { Layout } from './Index'
import Image from 'next/image'


const Skills = () => {
    return (
        <Layout idName='skills'>
            <div className="flex flex-col items-center w-full justify-center">
                <h1>مهارت‌ها</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-8 pt-10 md:pt-16 w-full mx-auto">
                    {SkillsItems.map((skill, index) => {
                        return (
                            <div key={index} className="p-3 mx-auto border-2 border-gray-500 shadow-md rounded-xl group dark:bg-gray-200 ease-in duration-500 flex items-center justify-evenly w-full cursor-default">
                                <div className="flex flex-col gap-4 w-full h-full">
                                    <div className="flex items-center justify-around h-28">
                                        <Image src={skill.ImageName} alt="/" width={95} className='scale-75 ease-in-out duration-700' />
                                    </div>
                                    <div className="flex flex-col items-center ">
                                        <h5 className='font-bold font-mono text-sm lg:text-base dark:text-[#1f2937] text-end'>{skill.name}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}

export { Skills }