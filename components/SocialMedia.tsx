import React from 'react'
import { AiOutlineMail } from "react-icons/ai"
import { FaLinkedin, FaGithub,FaTelegram } from "react-icons/fa"
import Link from 'next/link'

const SocialMedia = (prop: { size: number }) => {
    return (
        <div className="flex items-center justify-between my-4 w-full sm:w-4/5">
            <Link target='_blank' href={"https://www.linkedin.com/in/mahan-asadi-701690277"} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-150 hover:bg-violet-300 ease-in duration-300">
                <FaLinkedin size={prop.size} />
            </Link>
            <Link target='_blank' href={"https://github.com/MahanAsadiiii"} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-150 hover:bg-violet-300 ease-in duration-300">
                <FaGithub size={prop.size} />
            </Link>
            <Link target='_blank' href={"Mailto: Mahan.asadiiii@gmail.com"} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-150 hover:bg-violet-300 ease-in duration-300">
                <AiOutlineMail size={prop.size} />
            </Link>
            <Link target='_blank' href={"https://t.me/Mahan_asadi97"} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-150 hover:bg-violet-300 ease-in duration-300">
                <FaTelegram size={prop.size} />
            </Link>
        </div>
    )
}

export { SocialMedia }