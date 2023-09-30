import React from 'react'
import Image from 'next/image'
import { SkillsItems } from '@/static/SkillsItems'
import { Layout } from './Index'

const Skills = () => {
    return (
        <Layout idName='skills'>
            <div className="flex flex-col items-center w-full justify-center">
                <h1 className='text-3xl md:text-4xl'>مهارت‌ها</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-8 pt-10 md:pt-16 w-full mx-auto">
                    {SkillsItems.map((skill, index) => {
                        return (
                            <div key={index} className="p-3 mx-auto shadow-xl rounded-xl group hover:scale-110 hover:bg-gray-300 ease-in duration-500 flex items-center justify-evenly w-full cursor-pointer">
                                <div className="grid gap-4 w-full h-full">
                                    <div className="flex items-center justify-around">
                                        <Image src={skill.ImageName} alt="/" width={95} className='scale-75 ease-in-out duration-700' />
                                    </div>
                                    <div className="flex flex-col items-center justify-end">
                                        <h3 className='text-sm lg:text-base  group-hover:text-violet-700 text-end'>{skill.name}</h3>
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