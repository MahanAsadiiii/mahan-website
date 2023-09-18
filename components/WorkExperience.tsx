import { WorkItems } from '@/static/Index'
import React from 'react'
import { VscCircleFilled } from "react-icons/vsc"

const WorkExperinece = () => {
    return (
        <div className="flex justify-between gap-5">
            <div className="w-7 bg-gradient-to-b from-violet-800 to-violet-100 rounded-full"></div>
            <div className="flex flex-col justify-between gap-10 basis-[95%] py-4">
                {WorkItems.map((item,index) => {
                    return (
                        <div key={index} className="flex flex-col md:w-1/2 group ">
                            <div className="md:group-hover:-translate-x-60 group-hover:scale-105 md:group-hover:scale-125 ease-in-out duration-500 group-hover:shadow-2xl group-hover:p-5 rounded-xl flex flex-col gap-2 group-hover:gap-4 group-hover:bg-violet-500 group-hover:text-white ">
                                <div className="flex flex-col md:flex-row gap-2 md:gap-5 md:items-baseline ">
                                    <div className="flex items-center gap-1">
                                        <VscCircleFilled className="group-hover:text-green-400"/>
                                        <h3 className="text-base md:text-lg group-hover:text-green-400">{item.companyName}</h3>
                                    </div>
                                    <div className="hidden md:flex">-</div>
                                    <h4 className="text-xs md:text-sm">{item.jobTitle}</h4>
                                </div>
                                <h3 style={{ direction: "ltr" }} className="text-sm md:text-base text-end ">{item.period}</h3>
                                <p className="text-sm md:text-base text-justify">{item.shortDesc}</p>
                                <h5 className='text-sm md:text-base '>{item.webSiteAdd}</h5>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export { WorkExperinece }