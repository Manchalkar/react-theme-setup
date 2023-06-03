import React, { PropsWithChildren, useState } from "react"
import { createCtx } from "./context-helper"

type ThemeContext = {
    toggle:boolean,
    setToggle : React.Dispatch<React.SetStateAction<boolean>>
}

const [useTheme, Provider] = createCtx<ThemeContext>()

function ThemeProvider({ children }: PropsWithChildren<{}>) {
  
  const [toggle, setToggle] = useState(false)

  const value = { toggle, setToggle }
  return <Provider value={value}>{children}</Provider>
}

export { ThemeProvider, useTheme }
