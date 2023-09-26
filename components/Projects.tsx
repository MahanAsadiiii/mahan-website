import React from 'react'
import Link from 'next/link'
import { Layout, ModalObject } from './Index'
import Image from 'next/image'
import { ProjectDetails, wordPressSites, JsProjects , HtmlProjects } from '@/static/Index'

const Projects = () => {
    return (
        <Layout idName='projects'>
            <h1 className="text-center text-3xl md:text-4xl">پروژه‌ها</h1>
            <div className="grid md:grid-cols-3 gap-8 pt-10 ">
                {ProjectDetails.map((project, index) => {
                    return (
                        <div key={index} className=" relative flex items-center justify-center shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-violet-500 to-violet-300 h-80 hover:scale-105 ease-in-out duration-300">
                            <Image src={project.imageName} height={200} alt='skills-logo' className='rounded-md group-hover:opacity-5' />
                            <div className="hidden group-hover:flex flex-col justify-between items-center absolute w-full h-full px-6 py-4">
                                <h3 className='text-xl lg:text-xl text-white tracking-wider text-center '>{project.name}</h3>
                                <ul style={{ direction: 'ltr' }} className='flex-col items-center justify-center flex-wrap pb-4 pt-2 ltr'>
                                    {project.skills.map((skill, index) => {
                                        return (
                                            <li key={index} className='text-base text-center text-white list-disc py-1 cursor-default'>{skill}</li>
                                        )
                                    })}
                                </ul>
                                <>{
                                    project.name === "JavaScript" ? (<ModalObject btnText={project.btnContent} ModalContent={JsProjects} />) :
                                        project.name === "Wordpress" ? (<ModalObject btnText={project.btnContent} ModalContent={wordPressSites} />) :
                                            project.name === "HTML-CSS" ? (<ModalObject btnText={project.btnContent} ModalContent={HtmlProjects} />) :
                                                <Link target='_blank' href={project.link} className=' text-center py-3 rounded-lg bg-white text-gray-700 cursor-pointer w-full'>{project.btnContent}</Link>
                                }</>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}

export { Projects }