import React, { ReactNode } from 'react';


interface LayoutProps {
    children: ReactNode;
    idName?: string;
}
const Layout = ({ idName, children }: LayoutProps) => {

    return (
        <div id={idName} className={`px-6 py-10 lg:px-0 lg:py-16 w-full max-w-6xl mx-auto cursor-default`}>
            {children}
        </div>
    );
}

export { Layout };