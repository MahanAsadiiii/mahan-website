import React from 'react'
import { VscCircleFilled } from "react-icons/vsc"

const EducationTimeLine = () => {
    return (
        <div className="flex justify-between basis-2/5 gap-5">
            <div className="w-7 bg-gradient-to-b from-[#5651e5] to-blue-100 rounded-full "></div>
            <div className="flex flex-col justify-between gap-10 basis-[95%] py-4">
                <div className="flex flex-col md:w-1/2 gap-3 group">
                    <div className="lg:group-hover:-translate-x-60 md:group-hover:-translate-x-40 md:group-hover:scale-105 ease-in-out duration-1000 group-hover:p-5 rounded-xl group-hover:shadow-2xl flex flex-col gap-2 group-hover:gap-4 group-hover:bg-[#5651e5d8] group-hover:text-white">
                        <div className=" flex gap-2 items-baseline">
                            <VscCircleFilled className="group-hover:text-green-400" />
                            <h3 className="text-sm md:text-base group-hover:text-green-400">مدرک لیسانس</h3>
                        </div>
                        <h3 style={{ direction: "ltr" }} className="text-sm md:text-base text-end">1394 - 1399</h3>
                        <p className="text-xs md:text-sm">
                            فارغ‌التحصیل مهندسی کامپیوتر, گرایش نرم‌افزار از دانشگاه آزاد
                            تهران شمال
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:w-1/2 group">
                    <div className="lg:group-hover:-translate-x-60 md:group-hover:-translate-x-40 md:group-hover:scale-105 ease-in-out duration-1000 group-hover:p-5 rounded-xl group-hover:shadow-2xl flex flex-col gap-2 group-hover:gap-4 group-hover:bg-[#5651e5d8] group-hover:text-white">
                        <div className=" flex gap-2 items-baseline">
                            <VscCircleFilled className="group-hover:text-green-400" />
                            <h3 className="text-sm md:text-base group-hover:text-green-400">مدرک دیپلم</h3>
                        </div>
                        <h3 style={{ direction: "ltr" }} className="text-sm md:text-base text-end">1390 - 1394</h3>
                        <p className="text-xs md:text-sm">
                            مدرک دیپلم ریاضی از مدرسه خاتم.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { EducationTimeLine }