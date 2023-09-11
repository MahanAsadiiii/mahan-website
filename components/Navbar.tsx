import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { blackLogo } from '@/utilities/Index'
import { NavbarItems } from '@/static/Index'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { SocialMedia } from './Index'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [hover, setHover] = useState(0)

    const handleNav = () => {
        setNav(!nav)
    }

    const clickHandler = (index : number) => {
        setHover(index)
    }

    return (
        <div className='flex justify-between items-center w-full shadow-xl z-50 py-3 px-4 md:px-7'>
            <div className="flex justify-between items-center w-full md:basis-1/5 h-full ">
                <Image src={blackLogo} alt='/' width={100} />
            </div>
            <div className="md:basis-3/5 md:px-4">
                <ul className='hidden md:flex justify-evenly'>
                    {NavbarItems.map((item, index) => {

                        return (
                            <Link key={index} href={item.href} onClick={() => clickHandler(index)}>
                                <li className={`ml-2 text-base uppercase font-[estedad-semibold] ${hover === index && 'text-violet-600 scale-125' }`}>{item.name}</li>
                            </Link>
                        )
                    })}
                </ul>
                <div onClick={handleNav} className="md:hidden ">
                    <AiOutlineMenu size={25} />
                </div>
            </div>
            <div className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ''}>
                <div className={nav ? "md:hidden fixed left-0 top-0 w-3/4 sm:w-3/5 md:w-3/4 h-screen bg-[#ecf0f3] p-6 ease-in-out duration-500 rounded-r-3xl" : "fixed -left-full h-screen top-0 p-6 ease-in-out duration-500"}>
                    <div className="flex w-full items-center justify-between">
                        <div className="">
                            <Image src={blackLogo} alt='/' width={87} height={35} />
                        </div>
                        <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className="border-b border-gray-500 my-4"></div>
                    <div className="flex justify-between flex-col">
                        <ul className=''>
                            {NavbarItems.map((item, index) => {
                                return (
                                    <Link href={item.href} key={index} onClick={() => clickHandler(index)}>
                                        <li  className={`py-4 font-[estedad-semibold] ${hover === index && 'text-violet-600 scale-110' }`}>{item.name}</li>
                                    </Link>
                                )
                            })}
                        </ul>
                        <div className="pt-40">
                            <p className='mb-8'>روش های ارتباطی با من</p>
                            <SocialMedia />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export { Navbar }