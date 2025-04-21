'use client'
import { createContext, ReactNode, useState } from 'react'

type SearchContextProviderProps = {
    children: ReactNode
}

type SearchContextType = {
    search: string;
    setSearch: (search: string) => void;
}

export const SearchContext = createContext<SearchContextType>({
    search: '',
    setSearch: (search: string) => {}
})

export const SearchContextProvider = ({ children } : SearchContextProviderProps) => {
  const [search, setSearch] = useState('')

  return (
    <SearchContext.Provider value={{ search, setSearch }} >
        {children}
    </SearchContext.Provider>
  )
}
