import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Link } from "react-scroll"
import { blackLogo, whiteLogo } from '@/utilities/Index'
import { NavbarItems } from '@/static/Index'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { SocialMedia } from './Index'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const headerRef: React.RefObject<HTMLDivElement> = useRef(null)

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        let prevScrollPos = window.scrollY

        const handleScroll = () => {
            const currentScrollPos = window.scrollY
            const headerElement = headerRef.current
            if (!headerElement) {
                return
            }
            if (prevScrollPos > currentScrollPos) {
                headerElement.style.transform = "translateY(0) "
            } else if(currentScrollPos > prevScrollPos && currentScrollPos > 100) {
                headerElement.style.transform = "translateY(-150px)"
            }
            prevScrollPos = currentScrollPos
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 50) {
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
        <>
            <div ref={headerRef} className={`${nav && 'hidden'} ${shadow && "shadow-2xl fixed bg-gradient-to-l from-violet-600 to-slate-200 from-15% md:to-30%"} ease-in duration-500 rounded-b-2xl flex justify-between items-center w-full z-50 py-4 px-4 md:px-7`}>

                <div className="flex justify-center items-center w-full md:basis-1/5 h-full ">
                    {!shadow ?
                        <Link to={"home"} smooth={true} offset={-50} duration={700}>
                            <Image src={blackLogo} alt='logo' width={80} className='md:scale-125 cursor-pointer' />
                        </Link>
                        :
                        <Link to={"home"} smooth={true} offset={-50} duration={700}>
                            <Image src={whiteLogo} alt='logo' width={70} className='md:scale-125 cursor-pointer' />
                        </Link>
                    }
                </div>
                <div className="md:basis-4/5 md:px-4">
                    <ul className='hidden md:flex justify-evenly'>
                        {NavbarItems.map((item, index) => {
                            return (
                                <Link key={index} to={item.href} spy={true} smooth={true} offset={-30} duration={600} activeStyle={{ color: "blueviolet", scale: '1.3' }} >
                                    <li className={`ml-2 text-sm uppercase font-[estedad-semibold] hover:text-violet-400 hover:scale-125 duration-500 `}>{item.name}</li>
                                </Link>
                            )
                        })}
                    </ul>
                    <div onClick={handleNav} className="md:hidden ">
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            {/* below codes is for mobile hamburger menu */}

            <div className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70 z-20" : ''}>
                <div id='siderMenu' className={nav ? "md:hidden fixed left-0 top-0 w-3/4 sm:w-3/5 md:w-3/4 h-screen bg-[#ecf0f3] p-6 ease-in-out duration-500 rounded-r-3xl" : "fixed -left-full h-screen top-0 p-6 ease-in-out duration-1000"}>
                    <div className="flex w-full items-center justify-between">
                        <Link to='home' onClick={clickHandler}>
                            <Image src={blackLogo} alt='/' width={87} height={35} />
                        </Link>
                        <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className="border-b border-gray-500 my-4"></div>
                    <div className="flex justify-between flex-col ">
                        <ul className=''>
                            {NavbarItems.map((item, index) => {
                                return (
                                    <li key={index} className={`py-4 font-[estedad-semibold] hover:text-violet-400 hover:scale-125 duration-500 hover:-translate-x-8 max-w-fit`}>
                                        <Link to={item.href} spy={true} smooth={true} offset={-50} duration={500}  activeStyle={{ color: "blueviolet", paddingRight:"32px" , fontSize:"20px"}} onClick={clickHandler} >
                                            {item.name}
                                        </Link>
                                    </li>
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

        </>
    )
}

export { Navbar }