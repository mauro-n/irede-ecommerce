import { ReactNode, createContext, useState } from "react";

export const Context = createContext<context>({})

type context = {
    context?: any,
    setContext?: React.Dispatch<React.SetStateAction<any>>
}

export type contextContent = {
    [key: string]: any
}

interface MainContextProvider {
    children: ReactNode
}


export const MainContextProvider = ({ children }: MainContextProvider) => {
    const [context, setContext] = useState<contextContent>({ showSidebar: false })

    return (
        <Context.Provider value={{ context, setContext }}>
            {children}
        </Context.Provider>
    )
}