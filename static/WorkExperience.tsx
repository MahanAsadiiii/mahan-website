export type WorkItemsType = {
    period: string,
    jobTitle: string,
    companyName: string,
    shortDesc: string,
    webSiteAdd?: string[],
}

export const WorkItems: WorkItemsType[] = [
    {
        period: "حالا - خرداد 1402",
        jobTitle: "توسعه دهنده وب",
        companyName: "شرکت هوشمند اول بهشتی (هاب)",
        shortDesc: "- من طی این مدت، با همکاری در تیم استودیو رابین ، با فرهنگ پویای استارتاپ‌ها آشنا شدم و به تسلط نسبی در ری‌اکت رسیدم." ,
        webSiteAdd: ["https://www.mcihub.ir", "https://www.lulugames.ir"] ,
    },
    {
        period: "حالا - خرداد 1402",
        jobTitle: "توسعه دهنده وب",
        companyName: "خانه فناوری پله",
        shortDesc: "من به عنوان یک توسعه‌دهنده WordPress و React در این شرکت فعالیت می‌کنم. همچنین، کار من در این شرکت به عنوان یک شغل پاره‌وقت انجام می‌شود." ,
        webSiteAdd: ["http://www.pelle-co.com" , "https://www.pellex.ir"] ,
    },
    {
        period: "اردیبهشت - خرداد 1402",
        jobTitle: "توسعه دهنده وب",
        companyName: "گروه شرکت های پرورش داده‌ها",
        shortDesc: " با استفاده از فریم ورک Angular، پروژه‌های کوچکی را ایجاد کرده‌ام تا تجربه‌ای در این فریم‌ورک هم داشته باشم. همچنین، در این شرکت، کار با داده‌ها و  پیاده سازی آن‌ها با استفاده از نرم افزار های MYSQL و  Power BI را آموختم ." ,
        webSiteAdd: ["http://www.dpco.net"] ,
    },
    {
        period: "1394 - 1401",
        jobTitle: "فروش و پشتیبانی",
        companyName: "سیب سرخ ماکو",
        shortDesc: "اولین همکاری جدی من با شرکت سیب سرخ ماکو شکل گرفت، از سال 1395 تا 1401 در بخش فروش و پشتیبانی مشغول به کار بودم." ,
    },
]