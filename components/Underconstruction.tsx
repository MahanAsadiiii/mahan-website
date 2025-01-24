import React from 'react';
import Image from 'next/image';  // Import Image from Next.js
import { underconstruction } from '@/utilities/Image';

const Underconstruction = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-white'>
            <Image
                src={underconstruction}  // Pass the imported image here
                alt="Under Construction"  // Add a meaningful alt text
                layout="intrinsic"  // You can use "intrinsic", "fixed", or "responsive" depending on your needs
            />
        </div>
    );
};

export { Underconstruction };
