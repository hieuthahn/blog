import React, { Fragment } from "react"
import styled from "styled-components"
import NextLink from "next/link"

import { Z_INDICES } from "@/constants"
import TextLink from "../TextLink/TextLink"
import { useRouter } from "next/router"
import { BsFillMoonFill, BsMoonFill, BsSun, BsSunFill } from "react-icons/bs"
import { IoMdSunny } from "react-icons/io"
import { TbSunFilled } from "react-icons/tb"
import { useColorMode } from "@/components/ColorMode/ColorMode"
import Icon from "../Icon/Icon"

const menuData = [
    {
        label: "Home",
        href: "/",
        lineSize: "small",
    },
    {
        label: "Blog",
        href: "https://hieuthahn.bio",
        lineSize: "small",
    },
    {
        label: "Project",
        href: "/project",
        lineSize: "middle",
    },
    {
        label: "Snippet",
        href: "/snippet",
        lineSize: "large",
    },
]

const Header = () => {
    const router = useRouter()
    const activePath: string = router.asPath
    const { colorMode, setColorMode } = useColorMode()

    return (
        <Wrapper>
            <InnerWrapper>
                <HeaderLeftWrapper>
                    <LogoWrapper href="/">
                        <LogoSVG version="1.1" viewBox="0 0 219.33 40.18">
                            <path
                                d="M22.67,37.06h-4.08V22.04c0-1.81-0.34-3.17-1.02-4.07s-1.65-1.35-2.92-1.35c-0.55,0-1.06,0.07-1.54,0.22
		s-0.97,0.41-1.49,0.77s-1.08,0.86-1.69,1.49s-1.31,1.41-2.11,2.34v15.61H3.75V3.94h4.08v9.59l-0.14,3.7
		c0.64-0.77,1.27-1.41,1.89-1.93s1.23-0.95,1.85-1.28s1.25-0.56,1.89-0.7s1.3-0.21,1.99-0.21c2.34,0,4.16,0.71,5.44,2.14
		s1.92,3.58,1.92,6.46V37.06z"
                            />
                            <path
                                d="M35.76,16.9H28.8v-3.38h11.09v20.13h7.01v3.4H28.03v-3.4h7.73V16.9z M37.19,3.66c0.45,0,0.88,0.08,1.27,0.25
		s0.73,0.39,1.02,0.69s0.52,0.64,0.68,1.02s0.25,0.8,0.25,1.25c0,0.44-0.08,0.85-0.25,1.24s-0.39,0.73-0.68,1.03
		s-0.63,0.53-1.02,0.69s-0.81,0.25-1.27,0.25S36.32,10,35.92,9.84s-0.73-0.39-1.02-0.69s-0.52-0.64-0.68-1.03s-0.25-0.8-0.25-1.24
		c0-0.45,0.08-0.87,0.25-1.25s0.39-0.72,0.68-1.02s0.63-0.53,1.02-0.69S36.74,3.66,37.19,3.66z"
                            />
                            <path
                                d="M71.61,24.05c0,0.58-0.01,1.06-0.02,1.45s-0.04,0.76-0.07,1.1H54.99c0,2.41,0.67,4.25,2.02,5.54s3.28,1.93,5.81,1.93
		c0.69,0,1.38-0.03,2.06-0.08s1.35-0.13,1.99-0.22s1.25-0.2,1.84-0.32s1.13-0.25,1.63-0.39v3.35c-1.11,0.31-2.36,0.57-3.76,0.76
		s-2.85,0.29-4.35,0.29c-2.02,0-3.75-0.27-5.2-0.82s-2.64-1.34-3.57-2.38s-1.62-2.31-2.06-3.82s-0.67-3.21-0.67-5.12
		c0-1.66,0.24-3.22,0.71-4.7s1.17-2.77,2.09-3.89s2.04-2,3.36-2.66s2.84-0.98,4.52-0.98c1.64,0,3.09,0.26,4.36,0.77
		s2.33,1.25,3.2,2.19s1.52,2.09,1.97,3.45S71.61,22.38,71.61,24.05z M67.37,23.47c0.05-1.05-0.05-2-0.3-2.87s-0.64-1.61-1.16-2.24
		s-1.18-1.11-1.96-1.46s-1.69-0.53-2.72-0.53c-0.89,0-1.7,0.17-2.44,0.52s-1.37,0.83-1.9,1.45s-0.96,1.38-1.29,2.25
		s-0.53,1.84-0.61,2.88H67.37z"
                            />
                            <path
                                d="M94.64,37.06h-3.66l-0.14-3.8c-0.7,0.81-1.37,1.49-2,2.03s-1.26,0.97-1.89,1.3s-1.25,0.56-1.89,0.69s-1.3,0.2-2,0.2
		c-2.42,0-4.25-0.71-5.48-2.13s-1.85-3.57-1.85-6.45V13.53h4.08v15.05c0,3.61,1.36,5.41,4.08,5.41c0.5,0,0.99-0.07,1.46-0.22
		s0.98-0.41,1.5-0.77s1.09-0.86,1.69-1.49s1.28-1.41,2.03-2.37V13.53h4.08V37.06z"
                            />
                            <path
                                d="M118.68,36.73c-0.92,0.23-1.88,0.4-2.86,0.5s-1.98,0.15-3,0.15c-2.95,0-5.16-0.67-6.61-2s-2.18-3.39-2.18-6.15V16.95h-6.59
		v-3.42h6.59V7.06L108.11,6v7.52h10.57v3.42h-10.57V28.9c0,1.69,0.45,2.95,1.35,3.79s2.22,1.25,3.97,1.25
		c0.75,0,1.57-0.06,2.46-0.18s1.82-0.3,2.79-0.55V36.73z"
                            />
                            <path
                                d="M142.62,37.06h-4.08V22.04c0-1.81-0.34-3.17-1.02-4.07s-1.65-1.35-2.92-1.35c-0.55,0-1.06,0.07-1.54,0.22
		s-0.97,0.41-1.49,0.77s-1.08,0.86-1.69,1.49s-1.31,1.41-2.11,2.34v15.61h-4.08V3.94h4.08v9.59l-0.14,3.7
		c0.64-0.77,1.27-1.41,1.89-1.93s1.23-0.95,1.85-1.28s1.25-0.56,1.89-0.7s1.3-0.21,1.99-0.21c2.34,0,4.16,0.71,5.44,2.14
		s1.92,3.58,1.92,6.46V37.06z"
                            />
                            <path
                                d="M162.82,37.06l-0.09-3.16c-1.28,1.27-2.58,2.18-3.9,2.74s-2.71,0.84-4.16,0.84c-1.34,0-2.49-0.17-3.45-0.52
		s-1.74-0.82-2.36-1.42s-1.07-1.31-1.36-2.12s-0.43-1.7-0.43-2.65c0-2.36,0.88-4.21,2.64-5.54s4.36-2,7.79-2h4.88v-2.06
		c0-1.39-0.45-2.5-1.34-3.34s-2.25-1.25-4.08-1.25c-1.33,0-2.64,0.15-3.93,0.45s-2.62,0.72-4,1.27v-3.68
		c0.52-0.19,1.09-0.37,1.72-0.55s1.3-0.34,2-0.48s1.44-0.25,2.2-0.34s1.54-0.13,2.32-0.13c1.42,0,2.7,0.16,3.84,0.47
		s2.11,0.79,2.89,1.43s1.39,1.45,1.82,2.41s0.63,2.11,0.63,3.42v16.22H162.82z M162.37,26.35h-5.18c-1.02,0-1.89,0.1-2.62,0.3
		s-1.34,0.49-1.8,0.87s-0.82,0.82-1.04,1.35s-0.34,1.11-0.34,1.77c0,0.45,0.07,0.89,0.21,1.3s0.37,0.78,0.68,1.1
		s0.72,0.57,1.22,0.76s1.11,0.28,1.83,0.28c0.94,0,2.01-0.29,3.22-0.86s2.49-1.47,3.83-2.71V26.35z"
                            />
                            <path
                                d="M171.69,13.53h3.63l0.16,3.8c0.69-0.81,1.35-1.49,1.99-2.03s1.27-0.97,1.89-1.3s1.25-0.56,1.89-0.69s1.3-0.2,1.99-0.2
		c2.42,0,4.25,0.71,5.5,2.14s1.86,3.58,1.86,6.46v15.35h-4.08V22.04c0-1.84-0.34-3.21-1.03-4.09s-1.71-1.32-3.07-1.32
		c-0.5,0-0.99,0.07-1.46,0.22s-0.97,0.41-1.49,0.77s-1.07,0.86-1.68,1.49s-1.28,1.41-2.03,2.34v15.61h-4.08V13.53z"
                            />
                            <path
                                d="M214.59,37.06h-4.08V22.04c0-1.81-0.34-3.17-1.02-4.07s-1.65-1.35-2.92-1.35c-0.55,0-1.06,0.07-1.54,0.22
		s-0.97,0.41-1.49,0.77s-1.08,0.86-1.69,1.49s-1.31,1.41-2.11,2.34v15.61h-4.08V3.94h4.08v9.59l-0.14,3.7
		c0.64-0.77,1.27-1.41,1.89-1.93s1.23-0.95,1.85-1.28s1.25-0.56,1.89-0.7s1.3-0.21,1.99-0.21c2.34,0,4.16,0.71,5.44,2.14
		s1.92,3.58,1.92,6.46V37.06z"
                            />
                        </LogoSVG>
                    </LogoWrapper>
                    <ListMenu>
                        {menuData.map((item, index) => {
                            return (
                                <ListMenuItem key={index}>
                                    <TextLink
                                        activePath={activePath}
                                        lineSize={item?.lineSize}
                                        href={item.href}
                                    >
                                        {item.label}
                                    </TextLink>
                                </ListMenuItem>
                            )
                        })}
                    </ListMenu>
                </HeaderLeftWrapper>
                <HeaderRightWrapper>
                    <Button
                        onClick={() =>
                            setColorMode(
                                colorMode === "dark" ? "light" : "dark"
                            )
                        }
                    >
                        {colorMode === "dark" ? (
                            <BsMoonFill size={20} />
                        ) : (
                            <IoMdSunny size={20} />
                        )}
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
    position: relative;
    top: 0px;
    right: 0px;
    left: 0px;
    z-index: ${Z_INDICES.header};
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media screen and (max-width: 768px) {
        justify-content: center;
        flex-direction: column-reverse;
    }
`

const HeaderLeftWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

const HeaderRightWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        margin-top: 14px;
    }
`

const LogoWrapper = styled(NextLink)`
    font-size: 24px;
    display: flex;
    padding: 0;
    margin-right: 32px;
    letter-spacing: -1px;

    @media screen and (max-width: 768px) {
        margin-right: 0px;
        margin-top: 14px;
    }
`

const LogoSVG = styled(Icon)`
    fill: var(--color-primary);
    stroke: var(--color-primary);
    stroke-width: 2;
    stroke-dasharray: 0;
    stroke-dashoffset: 0;
    animation: show 3s ease-in-out infinite alternate;
    width: 130px;

    @keyframes show {
        0% {
            fill: transparent;
            stroke-dashoffset: 0;
        }
        100% {
            fill: var(--color-primary);
            stroke-dashoffset: 0;
        }
    }

    @media screen and (max-width: 768px) {
        width: 110px;
    }
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
