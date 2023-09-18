import React from 'react'
import { AiOutlineMail } from "react-icons/ai"
import { FaLinkedin, FaGithub, } from "react-icons/fa"
import { BsFillPersonLinesFill } from "react-icons/bs"

const SocialMedia = (prop: { size: number }) => {
    return (
        <div className="flex items-center justify-between my-4 w-full sm:w-4/5">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-150 hover:bg-violet-400 ease-in duration-300">
                <FaLinkedin size={prop.size} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-150 hover:bg-violet-400 ease-in duration-300">
                <FaGithub size={prop.size} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-150 hover:bg-violet-400 ease-in duration-300">
                <AiOutlineMail size={prop.size} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-150 hover:bg-violet-400 ease-in duration-300">
                <BsFillPersonLinesFill size={prop.size} />
            </div>
        </div>
    )
}

export { SocialMedia }