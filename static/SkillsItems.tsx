import { StaticImageData } from "next/image";
import { Html, Css, Js, React, Tailwind, Wordpress, Typescript, NextJs, Git } from "../utilities/Index"

export interface SkillsType {
    name: string;
    ImageName: StaticImageData
}


export const SkillsItems: SkillsType[] = [
    {
        name: "HTML",
        ImageName: Html,
    },
    {
        name: "CSS",
        ImageName: Css,
    },
    {
        name: "JavaScript",
        ImageName: Js,
    },
    {
        name: "Typescript",
        ImageName: Typescript,
    },
    {
        name: "React.Js",
        ImageName: React,
    },
    {
        name: "Next.Js",
        ImageName: NextJs,
    },
    {
        name: "Tailwind",
        ImageName: Tailwind,
    },
    {
        name: "Wordpress",
        ImageName: Wordpress,
    },
    {
        name: "Git",
        ImageName: Git,
    },
]