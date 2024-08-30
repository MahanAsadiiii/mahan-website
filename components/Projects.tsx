import React, { useRef } from 'react'
import Link from 'next/link'
import { Layout, ModalObject } from './Index'
import Image from 'next/image'
import { ProjectDetails, wordPressSites, JsProjects, HtmlProjects, ReactProjects, NextJsProjects } from '@/static/Index'

const Projects = () => {

    const projectRef = useRef(null)



    return (
        <Layout idName='projects'>
            <h1 className="text-center mt-5">پروژه‌ها</h1>
            <div ref={projectRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-10 mx-4">
                {ProjectDetails.map((project, index) => {
                    return (
                        <div key={index} className="relative flex items-center justify-center border-2 border-solid border-gray-500 shadow-md rounded-xl group hover:bg-gradient-to-r from-violet-500 to-violet-300 h-64 hover:scale-105 ease-in duration-300 px-2 py-3 max-h-64">
                            <Image src={project.imageName} height={160} alt='skills-logo' className='rounded-md group-hover:opacity-5' loading='lazy' />
                            <div className="hidden group-hover:flex flex-col justify-between items-center absolute w-full h-full px-6 py-4 duration-300 ease-in-out">
                                <h3 className='text-lg font-bold lg:text-xl text-white tracking-wider text-center font-mono'>{project.name}</h3>
                                <ul style={{ direction: 'ltr' }} className='flex-col items-center justify-center pb-4 pt-2 ltr'>
                                    {project.skills.map((skill, index) => {
                                        return (
                                            <li key={index} className='text-base text-center text-white list-disc py-1 cursor-default font-mono'>{skill}</li>
                                        )
                                    })}
                                </ul>
                                <>{
                                    project.name === "React.js" ? (<ModalObject btnText={project.btnContent} ModalContent={ReactProjects} />) :
                                        project.name === "Next.js" ? (<ModalObject btnText={project.btnContent} ModalContent={NextJsProjects} />) :
                                            project.name === "JavaScript" ? (<ModalObject btnText={project.btnContent} ModalContent={JsProjects} />) :
                                                project.name === "Wordpress" ? (<ModalObject btnText={project.btnContent} ModalContent={wordPressSites} />) :
                                                    // project.name === "HTML-CSS" ? (<ModalObject btnText={project.btnContent} ModalContent={HtmlProjects} />) :
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