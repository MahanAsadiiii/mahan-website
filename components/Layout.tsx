import React, { ReactNode } from 'react';


interface LayoutProps {
    children: ReactNode;
    idName?: string;
}
const Layout = ({ idName, children }: LayoutProps) => {

    return (
        <section id={idName} className={`px-4 py-8 lg:px-0 lg:py-6 w-full max-w-6xl mx-auto cursor-default overflow-x-hidden`}>
            {children}
        </section>
    );
}

export { Layout };