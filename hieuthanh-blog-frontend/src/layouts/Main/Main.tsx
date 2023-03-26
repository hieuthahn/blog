import React, { Fragment } from "react"
import type { FC, ReactElement } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import styled from "styled-components"

const Main: FC = ({ children }) => {
    return (
        <Wrapper>
            <Header />
            <main>{children}</main>
            <Footer />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 42rem;
    margin: 0 auto;
    text-align: center;
`

export default Main
