import React, { useRef, ReactNode, forwardRef, } from 'react'
import { BiSun, BiMoon } from "react-icons/bi";
import { useTheme } from '@/context/ThemeContext'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// const Bounce = forwardRef(() => {})

const ToggleButton = () => {
    const { dark, toggleTheme } = useTheme()
    const buttonRef = useRef<HTMLDivElement>(null)



    return (
        <div ref={buttonRef} onClick={toggleTheme} className={`${!dark ? 'bg-white border-yellow-400' : 'bg-black border-gray-500'} p-1 md:w-24 rounded-full flex justify-end border-2 border-solid  `}>
            <div className={`mainButton ${!dark ? 'bg-yellow-400' : 'bg-gray-500 '} duration-500 p-2 rounded-full max-w-fit`}>
                {dark ?
                    <BiMoon color='white' size={16} />
                    : <BiSun color='black' size={16} />
                }
            </div>
        </div>
    )
}

export { ToggleButton }