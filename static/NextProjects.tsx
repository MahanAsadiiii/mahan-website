import { MahanWebsite, PiriykaLogo } from "@/utilities/Image"
import { StaticImageData } from "next/image"

export type NextJsType = {
    id: number,
    name: string,
    imageName: StaticImageData,
    link: string,
    skills:string[]
}


export const NextJsProjects: NextJsType[] = [
    {
        name: 'Piriyka',
        link: "https://piriyka.com/",
        imageName: PiriykaLogo,
        id: 1,
        skills: ["Next.Js", "Framer Motion"],
    },
    {
        name: 'My personal website',
        link: "https://Mahan-asadi.ir/",
        imageName: MahanWebsite,
        id: 2,
        skills: ["Next.Js", "Framer Motion"],
    },
]