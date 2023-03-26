import { Fragment } from "react"
import type { FC } from "react"
import styled from "styled-components"

const Header: FC = () => {
    return <Wrapper>Header</Wrapper>
}

const Wrapper = styled.header`
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
    z-index: 100;
    transition: opacity 250ms;
    will-change: transfrom;
`

// const Logo

export default Header
