import React, { Fragment } from "react"
import type { FC } from "react"
import { createGlobalStyle } from "styled-components"

import { COLORS } from "@/constants"

const GlobalStyles = createGlobalStyle`
    * {
        line-height: calc(1em + 0.725rem);
    }
    html {
        font-size: 16px;
        background-color: var(--color-background);
        color: var(--color-text);
    }

    a {
        color: ${COLORS.pink[500]};
    }

    ::selection {
        background-color: ${COLORS.purple[500]};
    }

    :root {
         --font-weight-bold: 600;
        --font-weight-medium: 500;
        --font-weight-light: 400;
        --font-family: "Wotfard","Wotfard-fallback",sans-serif;
        --font-family-mono: "League Mono","Fira Mono",monospace;
        --font-family-spicy: "Sriracha","Wotfard",Futura,-apple-system,sans-serif;
        --reach-dialog: 1;
    }
   
`

type Props = {
    children: React.ReactNode
}

const App: FC<Props> = ({ children }: Props) => {
    return (
        <Fragment>
            {children}
            <GlobalStyles />
        </Fragment>
    )
}
export default App
