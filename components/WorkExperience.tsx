import { WorkItems } from '@/static/Index'
import Link from 'next/link'
import React from 'react'
import { VscCircleFilled } from "react-icons/vsc"

const WorkExperinece = () => {
    return (
        <div className="flex justify-between gap-5">
            <div className="w-7 bg-gradient-to-b from-violet-800 to-violet-100 rounded-full"></div>
            <div className="flex flex-col justify-between gap-10 basis-[95%] py-4">
                {WorkItems.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col md:w-2/3 lg:w-1/2 group cursor-default">
                            <div className="md:group-hover:-translate-x-14 group-hover:scale-105 md:group-hover:scale-105 ease-in-out duration-1000 group-hover:shadow-2xl group-hover:p-5 rounded-xl flex flex-col gap-2 group-hover:gap-4 group-hover:bg-violet-500 group-hover:text-white ">
                                <div className="flex flex-col md:flex-row gap-2 md:gap-5 md:items-baseline ">
                                    <div className="flex items-center gap-1">
                                        <VscCircleFilled className="group-hover:text-green-400" />
                                        <h3 className="text-sm md:text-base group-hover:text-green-400">{item.companyName}</h3>
                                    </div>
                                    <div className="hidden md:flex">-</div>
                                    <h4 className="text-xs md:text-sm">{item.jobTitle}</h4>
                                </div>
                                <h3 style={{ direction: "ltr" }} className="text-xs md:text-sm text-end ">{item.period}</h3>
                                <p className="text-xs md:text-sm text-justify">{item.shortDesc}</p>
                                <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                                    {item.webSiteAdd?.map((address, index) => {
                                        return (
                                            <Link target='_blank' key={index} href={address} className='text-xs md:text-sm '>{address}</Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export { WorkExperinece }