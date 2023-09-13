import React from 'react'
import { Layout } from './Layout'

const TimeLine = () => {
    return (
        <Layout>
            <h1 className="text-center text-3xl md:text-5xl">تایم لاین تجربه‌های من</h1>
            <div className="pt-14 flex flex-col md:flex-row justify-center gap-10">
                <div className="flex justify-between basis-2/5 px-1">
                    <div className="w-1 bg-violet-500 rounded-full"></div>
                    <div className="flex flex-col justify-between gap-10 basis-[95%] ">
                        <div className="flex flex-col gap-1">
                            <h3 style={{ direction: "ltr" }} className="text-xl text-end">1394 - 1399</h3>
                            <h3 className="">مدرک لیسانس</h3>
                            <p className="text-sm">
                                فارغ‌التحصیل مهندسی کامپیوتر, گرایش نرم‌افزار از دانشگاه آزاد
                                تهران شمال
                            </p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 style={{ direction: "ltr" }} className="text-xl text-end">1390 - 1394</h3>
                            <h3 className="">مدرک دیپلم</h3>
                            <p className="text-sm">
                                مدرک دیپلم ریاضی از مدرسه خاتم.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between basis-2/5 px-1">
                    <div className="w-1 bg-violet-500 rounded-full"></div>
                    <div className="flex flex-col justify-between gap-10 basis-[95%] ">
                        <div className="flex flex-col gap-1">
                            <h3 style={{ direction: "ltr" }} className="text-xl text-end">1400 - حالا</h3>
                            <h3 className="">طراح وب</h3>
                            <p className="">
                                و از سال 1400 به عنوان طراح و توسعه دهنده سایت مشغول به کار
                                هستم.
                            </p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 style={{ direction: "ltr" }} className="text-xl text-end">1394 - 1401</h3>
                            <h3 className="">سیب سرخ ماکو</h3>
                            <p className="">
                                اولین همکاری جدی من با شرکت سیب سرخ ماکو شکل گرفت, از سال 1395
                                تا 1401 در بخش فروش و پشتیبانی مشغول به کار بودم.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export { TimeLine }