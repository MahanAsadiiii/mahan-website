import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
    idName?:string;
}

function Layout({ idName, children }: LayoutProps): React.ReactElement {
    return (
        <div id={idName} className='px-2 pb-14 pt-24 lg:px-0 lg:pb-24 lg:pt-32 w-full max-w-7xl mx-auto cursor-default'>
            {children} 
        </div>
    );
}

export { Layout };