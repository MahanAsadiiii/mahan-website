import React, { useRef } from 'react';
import { BiSun, BiMoon } from "react-icons/bi";
import { useTheme } from '@/context/ThemeContext';

const ToggleButton = () => {
    const { dark, toggleTheme } = useTheme();

    const buttonHandler = () => {
        toggleTheme();
    };

    return (
        <div onClick={buttonHandler} className={`${!dark ? 'bg-white border-yellow-400' : 'bg-black border-gray-500'} p-1 w-[100px] rounded-full flex justify-end border-2 border-solid`}>
            <div className={`${!dark ? 'bg-yellow-400' : 'bg-gray-500 '} duration-500 p-2 rounded-full max-w-fit`}>
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