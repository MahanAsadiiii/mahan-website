import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <div className='px-8 py-14 lg:px-0 lg:py-20 w-full max-w-7xl mx-auto'>
            {children}
        </div>
    );
}

export { Layout };