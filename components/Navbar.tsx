import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { blackLogo, whiteLogo } from '@/utilities/Index'
import { NavbarItems } from '@/static/Index'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { SocialMedia } from './Index'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [hover, setHover] = useState(0)
    const [shadow, setShadow] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    }, [])

    const clickHandler = (index: number) => {
        setHover(index);
        setNav(false)
    }

    return (
        <div className={`${shadow && "shadow-2xl fixed bg-gradient-to-l from-zinc-500 to-slate-200 md:to-30%"} rounded-b-2xl flex justify-between items-center w-full z-50 py-3 px-4 md:px-7`}>
            <div className="flex justify-between items-center w-full md:basis-1/5 h-full ">
                {!shadow ?
                    <Link href={"/"}>
                        <Image src={blackLogo} alt='/' width={80} className='md:scale-125' />
                    </Link>
                    :
                    <Link href={"/"}>
                        <Image src={whiteLogo} alt='/' width={80} className='md:scale-125' />
                    </Link>
                }
            </div>
            <div className="md:basis-4/5 md:px-4">
                <ul className='hidden md:flex justify-evenly'>
                    {NavbarItems.map((item, index) => {

                        return (
                            <Link key={index} href={item.href} onClick={() => clickHandler(index)}>
                                <li className={`ml-2 text-sm uppercase font-[estedad-semibold] ${hover === index && 'text-violet-600 scale-125'}`}>{item.name}</li>
                            </Link>
                        )
                    })}
                </ul>
                <div onClick={handleNav} className="md:hidden ">
                    <AiOutlineMenu size={25} />
                </div>
            </div>

            {/* below codes is for mobile hamburger menu */}

            <div className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ''}>
                <div id='siderMenu' className={nav ? "md:hidden fixed left-0 top-0 w-3/4 sm:w-3/5 md:w-3/4 h-screen bg-[#ecf0f3] p-6 ease-in-out duration-500 rounded-r-3xl" : "fixed -left-full h-screen top-0 p-6 ease-in-out duration-500"}>
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
                                        <li className={`py-4 font-[estedad-semibold] ${hover === index && 'text-violet-600 scale-110'}`}>{item.name}</li>
                                    </Link>
                                )
                            })}
                        </ul>
                        <div className="pt-20">
                            <p className='mb-8'>روش های ارتباطی با من</p>
                            <SocialMedia size={20} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export { Navbar }