import React, { useState } from 'react';
import { Modal } from 'antd';
import { JsType, wordpressType } from "../static/Index"
import Link from 'next/link';

interface props {
    btnText: string,
    ModalContent: JsType[] | wordpressType[]
}

const ModalObject = (prop: props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(!isModalOpen);
    };
  
    const handleCancel = () => {
      setIsModalOpen(!isModalOpen);
    };

    return (
        <div onClick={showModal} className=' text-center py-3 rounded-lg bg-white text-gray-700 cursor-pointer w-full'>
            <h6 >{prop.btnText}</h6>
            <Modal width={500} cancelText="بستن" title="پروژه‌ها" open={isModalOpen} onCancel={handleCancel} className='font-[estedad-bold]'>
                {prop.ModalContent.map((item) => {
                    return (
                        <div className='flex justify-between my-3 items-baseline' key={item.id}>
                            <div className="flex items-baseline gap-2">
                                <h6 className='text-lg'>{item.id}-</h6>
                                <h6 className='cursor-default'>{item.name}</h6>
                            </div>
                            <Link target='_blank' href={item.link} className='px-3 py-1 border-2 border-blue-500 rounded-md bg-blue-500 text-white hover:bg-white hover:text-black hover:border-blue-500 hover:border-2'>نمایش پروژه</Link>
                        </div>
                    )
                })}
            </Modal>
        </div>
    )
}

export { ModalObject }