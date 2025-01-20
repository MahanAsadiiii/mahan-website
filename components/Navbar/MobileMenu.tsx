import React from 'react'
import Image from 'next/image'
import { Link } from "react-scroll"
import { NavbarItems } from '@/static/Index'
import { AiOutlineClose } from "react-icons/ai"
import { SocialMedia } from '../Index'
import { blackLogo, whiteLogo } from '@/utilities/Index'
import { useTheme } from '@/context/ThemeContext'


interface MobileMenuProps {
    handleNav: () => void,
    closerFunc: () => void,
    navState: boolean,
    components: { id: number, name: string }[];
    activeComponent: number;
    setActiveComponent: (index: number) => void;
}

const MobileMenu = ({ navState, handleNav, closerFunc, components, activeComponent, setActiveComponent }: MobileMenuProps) => {
    const { dark } = useTheme()

    return (
        <div id='siderMenu' className={`h-[100dvh] ${navState ? "md:hidden fixed right-0 top-0 w-[70%] md:w-3/4 dark:bg-slate-800 bg-[#ecf0f3] p-6 ease-in-out duration-500 rounded-l-3xl" : "fixed -right-full top-0 p-6 ease-in-out duration-1000"}`}>
            <div className="flex w-full items-center justify-between">
                <Link to='home' onClick={closerFunc}>
                    {dark ?
                        <Image src={whiteLogo} alt='logo' width={80} />
                        :
                        <Image src={blackLogo} alt='logo' width={80} />
                    }
                </Link>
                <div onClick={handleNav} className="rounded-full border-2 border-black dark:border-white p-2 cursor-pointer">
                    <AiOutlineClose size={20} />
                </div>
            </div>

            <div className="border-b dark:border-white border-black my-4"></div>
            <div className="flex justify-between flex-col ">

                <nav className="flex flex-col justify-center p-4">
                    {components.map((comp, index) => (
                        <li key={comp.id} className={`py-4 font-[estedad-semibold] hover:text-violet-400 hover:scale-125 duration-500 hover:-translate-x-8 max-w-fit`}>
                            <Link to='' spy={true} smooth={true} offset={-50} duration={500} activeStyle={{ color: "blueviolet", paddingRight: "32px", fontSize: "20px" }} onClick={() => {
                                setActiveComponent(index)
                                closerFunc()
                            }} >
                                {comp.name}
                            </Link>
                        </li>
                    ))}
                </nav>


                {/* <ul className=''>
                    {NavbarItems.map((item, index) => {
                        return (
                            <li key={index} className={`py-4 font-[estedad-semibold] hover:text-violet-400 hover:scale-125 duration-500 hover:-translate-x-8 max-w-fit`}>
                                <Link to={item.href} spy={true} smooth={true} offset={-50} duration={500} activeStyle={{ color: "blueviolet", paddingRight: "32px", fontSize: "20px" }} onClick={closerFunc} >
                                    {item.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul> */}
                <div className="pt-8">
                    <p className='mb-2'>روش های ارتباطی با من</p>
                    <SocialMedia size={20} />
                </div>

            </div>
        </div >
    )
}

export { MobileMenu }