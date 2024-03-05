import { Dispatch, SetStateAction, createContext } from 'react'

type ThemeContextType = {
  isDarkTheme: boolean
  setIsDarkTheme: Dispatch<SetStateAction<boolean>>
}

const ThemeContext = createContext<ThemeContextType>({
  isDarkTheme: true,
  setIsDarkTheme: () => null,
})

export default ThemeContext
