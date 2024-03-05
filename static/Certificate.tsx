import { StaticImageData } from "next/image";
import { AdvancedReact } from "../utilities/Index"

export interface certificateItemsType {
    name: string,
    skills: string[],
    imageName: StaticImageData,
    link: string ,
    btnContent: string
}


export const CertificateDetails: certificateItemsType[] = [
    {
        name: 'Advanced React',
        skills: ["React"],
        imageName: AdvancedReact,
        link: "https://coursera.org/verify/T3LHYNM6V2KA",
        btnContent: "نمایش گواهی"
    },
    
]