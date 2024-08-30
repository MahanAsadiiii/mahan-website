import { StaticImageData } from "next/image";
import { IpDetecor, Setting, Linkedin, LandPage, Expenses, EngScl, Js, HtmlCss, Wordpress, PiriykaLogo, QOSLogo, React, NextJs } from "../utilities/Index"

export interface projectItemsType {
    name: string,
    skills: string[],
    imageName: StaticImageData,
    link: string,
    btnContent: string
}


export const ProjectDetails: projectItemsType[] = [

    {
        name: "Next.js",
        skills: ["Next.js"],
        imageName: NextJs,
        link: "",
        btnContent: "نمایش پروژه‌ها"
    },
    {
        name: "React.js",
        skills: ["React.js"],
        imageName: React,
        link: "",
        btnContent: "نمایش پروژه‌ها"
    },
    {
        name: "JavaScript",
        skills: ["Vanilla JS"],
        imageName: Js,
        link: "",
        btnContent: "نمایش پروژه‌ها"
    },
    // {
    //     name: "HTML-CSS",
    //     skills: ["Flex Box", "Grid"],
    //     imageName: HtmlCss,
    //     link: "",
    //     btnContent: "نمایش پروژه‌ها"
    // },
    {
        name: "Wordpress",
        skills: ["Wordpress", "Elementor"],
        imageName: Wordpress,
        link: "",
        btnContent: "نمایش پروژه‌ها"
    }
]