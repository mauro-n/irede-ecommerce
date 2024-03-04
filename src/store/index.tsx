import { ReactNode, createContext, useState } from 'react'
import { anyObject } from '..'

export const Context = createContext<context>({})

type context = {
    context?: anyObject,
    setContext?: React.Dispatch<React.SetStateAction<anyObject>>
}

export type contextContent = {
    [key: string]: anyObject
}

interface MainContextProvider {
    children: ReactNode
}


export const MainContextProvider = ({ children }: MainContextProvider) => {
    const [context, setContext] = useState<anyObject>({ showSidebar: false, showSideCart: false })

    return (
        <Context.Provider value={{ context, setContext }}>
            {children}
        </Context.Provider>
    )
}