import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
    dark: false,
    toggleTheme: () => { }, // No-op by default
});

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [dark, setDark] = useState<boolean>(true);
    const isBrowser = typeof window !== 'undefined';


    useEffect(() => {
        if (isBrowser) {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

            const handleChange = (e: MediaQueryListEvent) => {
                setDark(e.matches); // Update based on system preference
            };

            setDark(prefersDark.matches); // Set initial theme based on preference
            prefersDark.addEventListener('change', handleChange);

            return () => {
                prefersDark.removeEventListener('change', handleChange);
            };
        }
    }, [isBrowser]);

    // Apply the theme class to the document root
    useEffect(() => {
        if (isBrowser) {
            if (dark) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    }, [dark, isBrowser]);

    return (
        <ThemeContext.Provider value={{
            dark,
            toggleTheme: () => setDark(!dark)
        }}>
            {children}
        </ThemeContext.Provider>
    );
};


export const useTheme = () => {
    return useContext(ThemeContext);
};
