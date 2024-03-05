'use client'

import { useEffect, useState } from 'react'

import ThemeContext from '@/context/themeContext'

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const themeFromStorage: boolean =
    typeof localStorage !== 'undefined' && localStorage.getItem('app-theme')
      ? JSON.parse(localStorage.getItem('app-theme')!)
      : false

  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(themeFromStorage)
  const [isRenderCmp, setIsRenderCmp] = useState(false)

  useEffect(() => {
    setIsRenderCmp(true)
  }, [])

  if (!isRenderCmp) return <></>

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      <div className={`${isDarkTheme ? 'dark' : ''} min-h-screen`}>
        <div className="dark:text-white dark:bg-black text-[#1E1E1E]">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
