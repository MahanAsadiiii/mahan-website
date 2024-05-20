import { StaticImageData } from "next/image";
import { Html, Css, Js, React, Tailwind, Wordpress, Typescript, NextJs, Git, RestApi } from "../utilities/Index"

export interface SkillsType {
    name: string;
    ImageName: StaticImageData
}


export const SkillsItems: SkillsType[] = [
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
        name: "Rest API",
        ImageName: RestApi,
    },
    {
        name: "HTML",
        ImageName: Html,
    },
    {
        name: "CSS",
        ImageName: Css,
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