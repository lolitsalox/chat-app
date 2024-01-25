"use client"

import { FC } from 'react'
import { Toaster } from 'sonner'
import { ThemeProvider } from "@/components/theme-provider";
import { SessionProvider } from 'next-auth/react';

interface ProvidersProps {
    children: React.ReactNode
}

const Providers: FC<ProvidersProps> = ({ children}) => {
  return <>
  <SessionProvider>
    <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
      <Toaster position='bottom-center' theme='system'/>
      {children}
   </ThemeProvider>
   </SessionProvider>
  </>
}

export default Providers