import React, { Fragment } from "react"
import styled from "styled-components"
import NextLink from "next/link"

const Header = () => {
    return (
        <Wrapper>
            <InnerWrapper>Header</InnerWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    max-width: 1100px;
    padding: 0 32px;
    margin: 0 auto;
`

const InnerWrapper = styled.header`
    position: ${(props) => (props.position ? props.position : "relative")};
    top: 0px;
    right: 0px;
    left: 0px;
    z-index: 100;
    transition: opacity 250ms;
    will-change: transfrom;
`

const LogoWrapper = styled(NextLink)`
    font-size: 24px;
    display: flex;
    padding: 0;
`

const LogoText = styled.span``

export default Header
