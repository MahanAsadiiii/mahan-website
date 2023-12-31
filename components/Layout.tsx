import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
    idName?:string;
}

function Layout({ idName, children }: LayoutProps): React.ReactElement {
    return (
        <div id={idName} className='px-6 py-14 lg:px-0 lg:py-28 w-full max-w-6xl mx-auto cursor-default'>
            {children} 
        </div>
    );
}

export { Layout };