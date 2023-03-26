import "@/styles/globals.css"
import "@/styles/reset.css"
import type { ReactElement, ReactNode } from "react"
import type { NextPage } from "next"
import type { AppProps } from "next/app"
import AppWrapper from "@/components/App"
import React from "react"
import ColorModeProvider from "@/components/ColorMode/ColorMode"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout || ((page) => page)

    return (
        <AppWrapper>
            <ColorModeProvider>
                {getLayout(<Component {...pageProps} />)}
            </ColorModeProvider>
        </AppWrapper>
    )
}
