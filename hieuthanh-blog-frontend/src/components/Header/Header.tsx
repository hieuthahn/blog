import React, { Fragment } from "react"
import styled from "styled-components"
import NextLink from "next/link"

import { Z_INDICES } from "@/constants"
import TextLink from "../TextLink/TextLink"

const menuData = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Blog",
        href: "/blog",
    },
    {
        label: "Project",
        href: "/project",
    },
    {
        label: "Snippet",
        href: "/project",
    },
]

const Header = () => {
    return (
        <Wrapper>
            <InnerWrapper>
                <HeaderLeftWrapper>
                    <LogoWrapper href="/">
                        <LogoText>hieuthanh</LogoText>
                    </LogoWrapper>
                    <ListMenu>
                        {menuData.map((item, index) => {
                            return (
                                <ListMenuItem key={index}>
                                    <TextLink href={item.href}>
                                        {item.label}
                                    </TextLink>
                                </ListMenuItem>
                            )
                        })}
                    </ListMenu>
                </HeaderLeftWrapper>
                <HeaderRightWrapper>
                    <Button>
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            style={{ transform: "rotate(40deg)" }}
                        >
                            <mask id="moon-mask-main-nav">
                                <rect
                                    x="0"
                                    y="0"
                                    width="18"
                                    height="18"
                                    fill="#FFF"
                                ></rect>
                                <circle
                                    cx="10"
                                    cy="2"
                                    r="8"
                                    fill="black"
                                ></circle>
                            </mask>
                            <circle
                                cx="9"
                                cy="9"
                                fill="var(--color-text)"
                                mask="url(#moon-mask-main-nav)"
                                r="8"
                            ></circle>
                            <g>
                                <circle
                                    cx="17"
                                    cy="9"
                                    r="1.5"
                                    fill="var(--color-text)"
                                    style={{
                                        transformOrigin: "center center",
                                        transform: "scale(0)",
                                    }}
                                ></circle>
                                <circle
                                    cx="13"
                                    cy="15.928203"
                                    r="1.5"
                                    fill="var(--color-text)"
                                    style={{
                                        transformOrigin: "center center",
                                        transform: "scale(0)",
                                    }}
                                ></circle>
                                <circle
                                    cx="5"
                                    cy="15.928203"
                                    r="1.5"
                                    fill="var(--color-text)"
                                    style={{
                                        transformOrigin: "center center",
                                        transform: "scale(0)",
                                    }}
                                ></circle>
                                <circle
                                    cx="1"
                                    cy="9"
                                    r="1.5"
                                    fill="var(--color-text)"
                                    style={{
                                        transformOrigin: "center center",
                                        transform: "scale(0)",
                                    }}
                                ></circle>
                                <circle
                                    cx="5"
                                    cy="2.071797"
                                    r="1.5"
                                    fill="var(--color-text)"
                                    style={{
                                        transformOrigin: "center center",
                                        transform: "scale(0)",
                                    }}
                                ></circle>
                                <circle
                                    cx="13"
                                    cy="2.071797"
                                    r="1.5"
                                    fill="var(--color-text)"
                                    style={{
                                        transformOrigin: "center center",
                                        transform: "scale(0)",
                                    }}
                                ></circle>
                            </g>
                        </svg>
                    </Button>
                </HeaderRightWrapper>
            </InnerWrapper>
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
    z-index: ${Z_INDICES.header};
    display: flex;
    justify-content: space-between;
`

const HeaderLeftWrapper = styled.div`
    display: flex;
    align-items: center;
`

const HeaderRightWrapper = styled(HeaderLeftWrapper)``

const LogoWrapper = styled(NextLink)`
    font-size: 24px;
    display: flex;
    padding: 0;
    margin-right: 32px;
    letter-spacing: -1px;
`

const LogoText = styled.span`
    display: inline-block;
    font-weight: var(--font-weight-medium);
    color: var(--color-primary);
`

const ListMenu = styled.ul`
    display: flex;
`
const ListMenuItem = styled.li`
    margin: 8px;
`

const Button = styled.button`
    opacity: 0.7;
    display: block;
    margin: 0px;
    padding: 0px;
    border: none;
    background: transparent;
    cursor: pointer;
    text-align: left;
    font: inherit;
    color: var(--color-text);

    :hover {
        opacity: 1;
    }
}
`

export default Header
