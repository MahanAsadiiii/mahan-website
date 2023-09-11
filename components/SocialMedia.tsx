import React from 'react'
import { AiOutlineMail } from "react-icons/ai"
import { FaLinkedin, FaGithub, } from "react-icons/fa"
import { BsFillPersonLinesFill } from "react-icons/bs"

const SocialMedia = () => {
    return (
        <div className="flex items-center justify-between my-4 w-full sm:w-4/5">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedin size={25} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub size={25} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineMail size={25} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <BsFillPersonLinesFill size={25} />
            </div>
        </div>
    )
}

export { SocialMedia }