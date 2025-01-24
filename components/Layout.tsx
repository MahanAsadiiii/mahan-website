import React, { ReactNode } from 'react';


interface LayoutProps {
    children: ReactNode;
    idName?: string;
}
const Layout = ({ idName, children }: LayoutProps) => {

    return (
        <section id={idName} className={`relative flex  items-center w-full h-screen cursor-default`}>
            {children}
        </section>
    );
}

export { Layout };