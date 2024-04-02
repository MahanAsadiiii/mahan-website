import React from 'react'
import Image from 'next/image'
import { Link } from "react-scroll"
import { NavbarItems } from '@/static/Index'
import { AiOutlineClose } from "react-icons/ai"
import { SocialMedia } from '../Index'
import { blackLogo} from '@/utilities/Index'


interface MobileMenuProps {
    handleNav : () => void,
    closerFunc : () => void,
    navState : boolean,

}

const MobileMenu = ({navState , handleNav,closerFunc}:MobileMenuProps  ) => {
    
    return (
        <div id='siderMenu' className={`h-screen ${navState ? "md:hidden fixed right-0 top-0 w-[70%] md:w-3/4 bg-[#ecf0f3] p-6 ease-in-out duration-500 rounded-l-3xl" : "fixed -right-full top-0 p-6 ease-in-out duration-1000"}`}>
            <div className="flex w-full items-center justify-between">
                <Link to='home' onClick={closerFunc}>
                    <Image src={blackLogo} alt='logo' width={80} />
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
                                <Link to={item.href} spy={true} smooth={true} offset={-50} duration={500} activeStyle={{ color: "blueviolet", paddingRight: "32px", fontSize: "20px" }} onClick={closerFunc} >
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
    )
}

export { MobileMenu }