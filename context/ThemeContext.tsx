import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({
    dark: false,
    toggleTheme: () => { }
})

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [dark, setDark] = useState(false)
    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [dark])

    return (
        <ThemeContext.Provider value={{
            dark,
            toggleTheme: () => setDark(!dark)
        }} >
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)