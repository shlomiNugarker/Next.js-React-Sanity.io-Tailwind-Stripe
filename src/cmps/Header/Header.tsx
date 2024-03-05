'use client'

import ThemeContext from '@/context/themeContext'
import { useContext } from 'react'

import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'

const Header = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext)

  return (
    <header className="px-5 flex justify-between items-center bg-primary text-white h-14">
      <div className="flex">
        <button>search-btn</button>
        <p>Koshers</p>
        <p>1-700-12-34-56</p>
        <span>logo</span>
        <p>Activity hours</p>
        <div>
          {isDarkTheme ? (
            <MdOutlineLightMode
              className="cursor-pointer"
              onClick={() => {
                setIsDarkTheme(false)
                localStorage.removeItem('app-theme')
              }}
            />
          ) : (
            <MdDarkMode
              className="cursor-pointer"
              onClick={() => {
                setIsDarkTheme(true)
                localStorage.setItem('app-theme', 'true')
              }}
            />
          )}
        </div>
      </div>

      <div>logo</div>
    </header>
  )
}

export default Header
