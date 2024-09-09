import { createContext, useState, useEffect, ReactNode } from 'react';

interface GlobalContextObject {
    screenWidth: number;
}

interface GlobalContextProviderProps {
    children: ReactNode;
}

const globalContext = createContext<GlobalContextObject | undefined>(undefined);

export function GlobalContextProvider({ children }: GlobalContextProviderProps) {
    const [screenWidth, recordScreenWidth] = useState<number>(0);

    useEffect(() => {
        const resized = () => {
            recordScreenWidth(window.innerWidth);
        }

        resized();

        window.addEventListener('resize', resized);

        return () => {
            window.removeEventListener('resize', resized);
        }
    }, []);

    return <globalContext.Provider value={{ screenWidth }}>{children}</globalContext.Provider>;
}

export default globalContext;