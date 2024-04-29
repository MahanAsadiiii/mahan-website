import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Link } from "react-scroll"
import { NavbarItems } from '@/static/Index'
import { blackLogo, whiteLogo } from '@/utilities/Index'
import { AiOutlineMenu } from "react-icons/ai"
import { MobileMenu, ToggleButton } from './Index'
import { useTheme } from '@/context/ThemeContext'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const headerRef: React.RefObject<HTMLDivElement> = useRef(null)
    const { dark } = useTheme()


    const handleNav = () => setNav(!nav)


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
                setShadow(true)
            } else if (currentScrollPos > prevScrollPos && currentScrollPos > 30) {
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
            if (window.scrollY <= 50) {
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
            <div ref={headerRef} className={`${nav && 'hidden'} fixed ${shadow && 'shadow-md z-10 bg-white dark:bg-neutral-800'}
            ease-in-out duration-500 flex justify-between md:justify-around items-center w-full z-50 py-4 px-4 md:px-7 md:max-h-20 min`}>
                <div className="md:basis-3/5 md:px-4 md:order-2 h-full">
                    <ul className='hidden md:flex justify-evenly items-center h-full'>
                        {NavbarItems.map((item, index) => {
                            return (
                                <Link key={index} to={item.href} spy={true} smooth={true} offset={-30} duration={600} activeStyle={{ borderBottom: '2px solid', scale: '1.2' }} >
                                    <li className={`ml-2 text-sm uppercase font-[estedad-semibold]  hover:text-violet-700 duration-300 ease-linear pb-2 leading-[60px]`}>{item.name}</li>
                                </Link>
                            )
                        })}
                    </ul>
                    <div onClick={handleNav} className="md:hidden ">
                        <AiOutlineMenu size={25} />
                    </div>
                </div>

                <div className="flex justify-center items-center max-w-fit h-full md:order-1">
                    {(!dark) ?
                        (<Link to={"home"} smooth={true} offset={-50} duration={700}>
                            <Image src={blackLogo} alt='logo' width={80} className='md:scale-110 cursor-pointer' />
                        </Link>)
                        :
                        (<Link to={"home"} smooth={true} offset={-50} duration={700}>
                            <Image src={whiteLogo} alt='logo' width={80} className='md:scale-110 cursor-pointer' />
                        </Link>)
                    }
                </div>

                <div className="w-fit order-3">
                    <ToggleButton />
                </div>

            </div >

            {/* below codes is for mobile hamburger menu */}

            < div className={nav ? "fixed right-0 top-0 w-full h-screen bg-black/70 z-20" : ''} >
                <MobileMenu handleNav={handleNav} navState={nav} closerFunc={clickHandler} />
            </ div>

        </>
    )
}

export { Navbar }