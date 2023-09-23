import { StaticImageData } from "next/image";
import { IpDetecor, Setting, Linkedin, LandPage, Expenses, EngScl, Js, HtmlCss, Wordpress } from "../utilities/Index"
// import html from "../HTML_CSS/*"

export interface projectItemsType {
    name: string,
    skills: string[],
    imageName: StaticImageData,
    link: string ,
    btnContent: string
}


export const ProjectDetails: projectItemsType[] = [
    {
        name: 'Online English School',
        skills: ["TypeScript", "ReactRouter", "Tailwind", "Github", "Netlify"],
        imageName: EngScl,
        link: "https://online-english-school.netlify.app",
        btnContent: "نمایش پروژه‌"
    },
    {
        name: 'Password Setting',
        skills: ["AntDesign", "ReactRouter", "Tailwind"],
        imageName: Setting,
        link: "https://setting-password.netlify.app",
        btnContent: "نمایش پروژه‌"
    },
    {
        name: 'Static Landing page',
        skills: ["Tailwind", "NPM package","Responsive"],
        imageName: LandPage,
        link: "https://landing-page-via-react.netlify.app",
        btnContent: "نمایش پروژه‌"
    },
    {
        name: 'Ip Detector',
        skills: ["JSX"],
        imageName: IpDetecor,
        link: "https://user-ip-detector.netlify.app/",
        btnContent: "نمایش پروژه‌"
    },
    {
        name: 'Expenses Manager',
        skills: ["JSX"],
        imageName: Expenses,
        link: "https://expenses-manager-react.netlify.app",
        btnContent: "نمایش پروژه‌"
    },
    {
        name: 'Linkedin Analysing',
        skills: ["JSX" , "Figma","Responsive"],
        imageName: Linkedin,
        link: "https://linkedin-analysing.netlify.app",
        btnContent: "نمایش پروژه‌"
    },
    {
        name: "JavaScript",
        skills: ["Vanilla JS"],
        imageName: Js ,
        link: "portfolio-JS",
        btnContent: "نمایش پروژه‌ها"
    },
    {
        name: "HTML CSS",
        skills: ["Flex Box","Grid"],
        imageName: HtmlCss,
        link: "HTML_CSS/Birthday room/index.html",
        btnContent: "نمایش پروژه‌ها"
    },
    {
        name: "Wordpress",
        skills: ["wordpress" , "elementor" ],
        imageName: Wordpress,
        link: "",
        btnContent: "نمایش پروژه‌ها"
    }
]