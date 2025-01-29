import { WorkItems } from '@/static/Index'
import Link from 'next/link'
import React from 'react'
import { VscCircleFilled } from "react-icons/vsc"

const WorkExperinece = () => {
    return (
        <div className="flex justify-center gap-5 w-full mt-20 px-5">
            {/* <div className="w-7 bg-gradient-to-b from-violet-800 to-violet-100 rounded-full"></div> */}
            <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
                {WorkItems.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col group cursor-default">
                            <div className="p-4 rounded-xl flex flex-col gap-2 bg-violet-500 text-white ">
                                <div className="flex flex-col md:flex-row gap-2 md:gap-5 md:items-baseline ">
                                    <div className="flex items-center gap-1">
                                        <VscCircleFilled className="text-green-400" />
                                        <h3 className="text-sm md:text-base text-green-400">{item.companyName}</h3>
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