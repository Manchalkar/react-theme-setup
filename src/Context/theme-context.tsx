import React, { PropsWithChildren, useState } from "react"
import { createCtx } from "./context-helper"

type ThemeContext = {
    toggle:boolean,
    setToggle : React.Dispatch<React.SetStateAction<boolean>>
    isDarkMode:boolean,
    setDarkMode : React.Dispatch<React.SetStateAction<boolean>>
}

const [useTheme, Provider] = createCtx<ThemeContext>()

function ThemeProvider({ children }: PropsWithChildren<{}>) {
  
  const [toggle, setToggle] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false)

  const value = { toggle, setToggle ,isDarkMode , setDarkMode }
  return <Provider value={value}>{children}</Provider>
}

export { ThemeProvider, useTheme }
