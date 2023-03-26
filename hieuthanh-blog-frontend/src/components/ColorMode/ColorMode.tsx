import { COLORS, COLORS_SYNTAX } from "@/constants"
import React from "react"
import type { FC, SetStateAction } from "react"

type ColorContextType = "light" | "dark" | ""

export const ColorModeContext = React.createContext<ColorContextType>("")

type Props = {
    children?: React.ReactNode
}

const ColorModeProvider: FC<Props> = ({ children }: Props) => {
    const [colorMode, rawSetColorMode] = React.useState<ColorContextType>()

    React.useEffect(() => {
        const initialColorMode: SetStateAction<ColorContextType | undefined> =
            getInitialColorMode() ?? "dark"
        rawSetColorMode(initialColorMode)
        const root = window.document.documentElement

        const initialColorValue = root.style.getPropertyValue(
            "--initial-color-mode"
        )
        rawSetColorMode(initialColorValue)
        Object.entries(COLORS).forEach(([name, colorByTheme]) => {
            if (colorByTheme[initialColorValue]) {
                const cssVarName = `--color-${name}`
                root.style.setProperty(
                    cssVarName,
                    colorByTheme[initialColorValue]
                )
            }
        })
        Object.entries(COLORS_SYNTAX).forEach(([name, colorByTheme]) => {
            if (colorByTheme[initialColorValue]) {
                const cssVarName = `--syntax-${name}`
                root.style.setProperty(
                    cssVarName,
                    colorByTheme[initialColorValue]
                )
            }
        })
    }, [])

    const setColorMode = (newValue: "light" | "dark") => {
        const root = window.document.documentElement
        rawSetColorMode(newValue)
        window.localStorage.setItem("color-mode", newValue)
        Object.entries(COLORS).forEach(([name, colorByTheme]) => {
            if (colorByTheme[newValue]) {
                const cssVarName = `--color-${name}`
                root.style.setProperty(cssVarName, colorByTheme[newValue])
            }
        })
        Object.entries(COLORS_SYNTAX).forEach(([name, colorByTheme]) => {
            if (colorByTheme[newValue]) {
                const cssVarName = `--syntax-${name}`
                root.style.setProperty(cssVarName, colorByTheme[newValue])
            }
        })
    }
    return (
        <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
            {children}
        </ColorModeContext.Provider>
    )
}

const getInitialColorMode: () => string = () => {
    const persistedColorPreference = window.localStorage.getItem("color-mode")
    const hasPersistedPreference = typeof persistedColorPreference === "string"
    // If the user has explicitly chosen light or dark,
    // let's use it. Otherwise, this value will be null.
    if (hasPersistedPreference) {
        return persistedColorPreference
    }
    // If they haven't been explicit, let's check the media
    // query
    const mql = window.matchMedia("(prefers-color-scheme: dark)")
    const hasMediaQueryPreference = typeof mql.matches === "boolean"
    if (hasMediaQueryPreference) {
        return mql.matches ? "dark" : "light"
    }
    // If they are using a browser/OS that doesn't support
    // color themes, let's default to 'light'.

    return "light"
}

export const useColorMode = () => {
    const colorContext = React.useContext(ColorModeContext)

    return colorContext
}

export default ColorModeProvider
