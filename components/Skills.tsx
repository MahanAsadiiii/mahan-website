import React from 'react'
import Image from 'next/image'
import { SkillsItems } from '@/static/SkillsItems'
import { Layout } from './Index'

const Skills = () => {
    return (
        <Layout idName='skills'>
            <div className="flex flex-col items-center w-full justify-center">
                <h1 className='text-3xl md:text-4xl'>مهارت‌ها</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-12 lg:gap-8 pt-10 md:pt-16 w-full ">
                    {SkillsItems.map((skill, index) => {
                        return (
                            <div  key={index} className="p-3 shadow-xl rounded-xl group hover:scale-110 hover:bg-gray-300 ease-in duration-300 flex items-center justify-evenly min-h-[150px] cursor-pointer">
                                <div className="grid grid-cols-2 gap-4 justify-center items-center w-full">
                                    <div className="flex flex-col items-center justify-center ">
                                        <h3 className='text lg:text-xl group-hover:text-2xl group-hover:text-violet-600'>{skill.name}</h3>
                                    </div>
                                    <div className="m-auto">
                                        <Image src={skill.ImageName} alt="/" width={95} className='group-hover:scale-110 scale-75 md:scale-100 ease-in-out duration-700'/>
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