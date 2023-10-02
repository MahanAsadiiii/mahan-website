import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {Link} from "react-scroll"
import { blackLogo, whiteLogo } from '@/utilities/Index'
import { NavbarItems } from '@/static/Index'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { SocialMedia } from './Index'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 30) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    }, [])

    const clickHandler = () => {
        setNav(false)
    }
    return (
        <div className={`${shadow && "shadow-2xl fixed bg-gradient-to-l from-violet-600 to-slate-200 from-15% md:to-30%"} rounded-b-2xl flex justify-between items-center w-full z-50 py-3 px-4 md:px-7`}>
            <div className="flex justify-between items-center w-full md:basis-1/5 h-full ">
                {!shadow ?
                    <Link to={"home"} smooth={true} offset={-50} duration={700}>
                        <Image src={blackLogo} alt='logo' width={80} className='md:scale-125 cursor-pointer' />
                    </Link>
                    :
                    <Link to={"home"} smooth={true} offset={-50} duration={700}>
                        <Image src={whiteLogo} alt='logo' width={80} className='md:scale-125 cursor-pointer' />
                    </Link>
                }
            </div>
            <div className="md:basis-4/5 md:px-4">
                <ul className='hidden md:flex justify-evenly'>
                    {NavbarItems.map((item, index) => {
                        return (
                            <Link  key={index} to={item.href} spy={true} smooth={true} offset={-30} duration={600} activeStyle={{color: "blueviolet" ,scale: '1.3'}} >
                                <li className={`ml-2 text-sm uppercase font-[estedad-semibold] hover:text-violet-400 hover:scale-125 duration-500 `}>{item.name}</li>
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
                <div id='siderMenu' className={nav ? "md:hidden fixed left-0 top-0 w-3/4 sm:w-3/5 md:w-3/4 h-screen bg-[#ecf0f3] p-6 ease-in-out duration-500 rounded-r-3xl" : "fixed -left-full h-screen top-0 p-6 ease-in-out duration-1000"}>
                    <div className="flex w-full items-center justify-between">
                        <Link to='home'onClick={clickHandler}>
                            <Image src={blackLogo} alt='/' width={87} height={35} />
                        </Link>
                        <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className="border-b border-gray-500 my-4"></div>
                    <div className="flex justify-between flex-col">
                        <ul className=''>
                            {NavbarItems.map((item, index) => {
                                return (
                                    <Link to={item.href} spy={true} smooth={true} offset={-50} duration={500} key={index} activeStyle={{color: "blueviolet" ,scale: '1.3'}} onClick={clickHandler}>
                                        <li className={`py-4 font-[estedad-semibold] hover:text-violet-400 hover:scale-125 duration-500`}>{item.name}</li>
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