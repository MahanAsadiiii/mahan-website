import React, { useRef } from 'react';
import { BiSun, BiMoon } from "react-icons/bi";
import { useTheme } from '@/context/ThemeContext';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ToggleButton = () => {
    const { dark, toggleTheme } = useTheme();
    const buttonContainerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);


    const { contextSafe } = useGSAP(() => {
        tl.current = gsap.timeline({ reversed: true })
            .to(
                buttonRef.current,
                {
                    rotation: 360,
                    x: 56,
                    duration: 0.15,
                    // ease: 'bounce.inOut',
                    // yoyo: true,
                    // repeat: 2,
                }
            );
    }, { scope: buttonContainerRef });

    const buttonHandler = contextSafe(() => {
        tl.current?.reversed(!tl.current.reversed());
        toggleTheme();
    });

    return (
        <div onClick={buttonHandler} ref={buttonContainerRef} className={`${!dark ? 'bg-white border-yellow-400' : 'bg-black border-gray-500'} p-1 w-[100px] rounded-full flex justify-end border-2 border-solid`}>
            <div ref={buttonRef} className={`${!dark ? 'bg-yellow-400' : 'bg-gray-500 '} duration-500 p-2 rounded-full max-w-fit`}>
                {dark ?
                    <BiMoon color='white' size={16} />
                    :
                    <BiSun color='black' size={16} />
                }
            </div>
        </div>
    );
};

export { ToggleButton };