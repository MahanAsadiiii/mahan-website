import React from 'react'
import Image from 'next/image'
import { SkillsItems } from '@/static/SkillsItems'

const Skills = () => {
    return (
        <div className='w-full lg:h-screen p-2'>
            <div className="flex flex-col justify-center h-full max-w-[1240px]">
                <h1>مهارت ها</h1>
                <div className="">
                    {SkillsItems.map((skill) => {
                        return (
                            <div className="">
                                <h3>{skill.name}</h3>
                                <Image src={skill.ImageName} alt="/" width={100}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export { Skills }