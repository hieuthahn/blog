import React, { Fragment } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import styled from "styled-components"

type MainProps = {
    children: React.ReactNode
}

const Main = ({ children }: MainProps) => {
    return (
        <Wrapper>
            <Header />
            <main>{children}</main>
            <Footer />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

export default Main
