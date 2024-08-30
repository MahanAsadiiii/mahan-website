import { IpDetecor, Setting, Linkedin, LandPage, Expenses, EngScl, QOSLogo } from "@/utilities/Image"
import { StaticImageData } from "next/image"


export type ReactType = {
    id: number,
    name: string,
    link: string,
    imageName: StaticImageData,
    skills: string[],
}


export const ReactProjects: ReactType[] = [
    {
        id: 1,
        name: 'Quiz of shop',
        skills: ['Mobile Game', 'Wordpress CMS', 'React.js', "Formik - Yup"],
        imageName: QOSLogo,
        link: "http://game.qos.pellex.ir/",
    },
    {
        id: 2,
        name: 'Online English School',
        skills: ["TypeScript", "ReactRouter", 'Git'],
        imageName: EngScl,
        link: "https://online-english-school.netlify.app",
    },
    {
        id: 3,
        name: 'Password Setting',
        skills: ["AntDesign", "ReactRouter", "Tailwind"],
        imageName: Setting,
        link: "https://setting-password.netlify.app",
    },
    {
        id: 4,
        name: 'Static Landing page',
        skills: ["Tailwind", "NPM package", "Responsive"],
        imageName: LandPage,
        link: "https://landing-page-via-react.netlify.app",
    },
    {
        id: 5,
        name: 'IP Detector',
        skills: ["JSX"],
        imageName: IpDetecor,
        link: "https://user-ip-detector.netlify.app/",
    },
    {
        id: 6,
        name: 'Expenses Manager',
        skills: ["JSX"],
        imageName: Expenses,
        link: "https://expenses-manager-react.netlify.app",
    },
    {
        id: 7,
        name: 'Linkedin Analysing',
        skills: ["JSX", "Figma", "Responsive"],
        imageName: Linkedin,
        link: "https://coruscating-salamander-956af9.netlify.app",
    },
]


