import React from "react"
import NextLink from "next/link"
import { useRouter } from "next/router"
import styled from "styled-components"
import Icon from "../Icon/Icon"
import Link from "@/components/Link"

type Props = {
    href: string
    children?: React.ReactNode | string
}

const TextLink = ({ children, ...delegated }: Props) => {
    const router = useRouter()
    const activePath: string = router.asPath

    return (
        <Wrapper>
            <LinkWrapper {...delegated}>
                {children}
                {activePath === delegated?.href && (
                    <Svg width="37" height="8" viewBox="0 0 37 8" fill="none">
                        <path
                            d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                            stroke="hsl(53deg, 100%, 50%)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </Svg>
                )}
            </LinkWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`

const LinkWrapper = styled(Link)`
    position: relative;
    display: flex;
    align-items: center;
    padding: 10px;
    font-size: 1rem;
    color: var(--color-text);
    font-weight: var(--font-weight-bold);
`

const Wra = styled.a`
    font-weight: ${(props) =>
        props.activePath === props.href
            ? "var(--font-weight-medium)"
            : "var(--font-weight-light)"};
    color: var(--color-text};
`

const Svg = styled(Icon)`
    display: block;
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 6px;
    margin: auto;
`

export default TextLink
