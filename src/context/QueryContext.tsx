'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { ReactNode } from 'react'

const queryClient = new QueryClient()

type QueryContextProviderProps = {
    children: ReactNode
}

export const QueryContext = ({ children }: QueryContextProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
