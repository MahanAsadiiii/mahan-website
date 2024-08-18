import { StaticImageData } from "next/image";
import { IpDetecor, Setting, Linkedin, LandPage, Expenses, EngScl, Js, HtmlCss, Wordpress, PiriykaLogo, QOSLogo } from "../utilities/Index"

export interface projectItemsType {
    name: string,
    skills: string[],
    imageName: StaticImageData,
    link: string,
    btnContent: string
}


export const ProjectDetails: projectItemsType[] = [
    {
        name: 'Piriyka',
        skills: ["Next.Js", "Framer Motion"],
        imageName: PiriykaLogo,
        link: "https://piriyka.com/",
        btnContent: "نمایش پروژه‌"
    },
    {
        name: 'Quiz of shop',
        skills: ['Mobile Game', 'Wordpress CMS', 'React.js', "Formik - Yup"],
        imageName: QOSLogo,
        link: "http://game.qos.pellex.ir/",
        btnContent: "نمایش پروژه‌"
    },
    {
        name: 'Online English School',
        skills: ["TypeScript", "ReactRouter", 'Git'],
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
        skills: ["Tailwind", "NPM package", "Responsive"],
        imageName: LandPage,
        link: "https://landing-page-via-react.netlify.app",
        btnContent: "نمایش پروژه‌"
    },
    {
        name: 'IP Detector',
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
        skills: ["JSX", "Figma", "Responsive"],
        imageName: Linkedin,
        link: "https://coruscating-salamander-956af9.netlify.app",
        btnContent: "نمایش پروژه‌"
    },
    {
        name: "JavaScript",
        skills: ["Vanilla JS"],
        imageName: Js,
        link: "",
        btnContent: "نمایش پروژه‌ها"
    },
    {
        name: "HTML-CSS",
        skills: ["Flex Box", "Grid"],
        imageName: HtmlCss,
        link: "",
        btnContent: "نمایش پروژه‌ها"
    },
    {
        name: "Wordpress",
        skills: ["Wordpress", "Elementor"],
        imageName: Wordpress,
        link: "",
        btnContent: "نمایش پروژه‌ها"
    }
]