import React from "react"
import NextLink from "next/link"
import styled from "styled-components"
import { Url } from "next/dist/shared/lib/router/router"

interface ButtonProps {
    onClick?: () => void
    variant?: string
    href?: string | undefined
    disabled?: boolean
    className?: string
    style?: React.CSSProperties
    children?: React.ReactNode
    icon?: React.ReactNode
    loading?: boolean
    loadingText?: string
    loadingIcon?: React.ReactNode
    size?: "large" | "middle" | "small"
}

const Button: React.FC<ButtonProps> = ({
    variant = "solid",
    href,
    onClick,
    disabled = false,
    className,
    style,
    children,
    icon,
    size = "middle",
}) => {
    const ButtonWrapper = href ? NextLink : _Button

    const getVariantButton = () => {
        switch (variant) {
            case "solid":
                return "bg-color-primary"
            case "outline":
                return "outline outline-1 outline-color-primary bg-color-background"
            case "ghost":
                return "hover:bg-color-primary"
            case "link":
                return "hover:text-underline"
        }
    }

    const getSizeButton = () => {
        switch (size) {
            case "large":
                return "px-4 py-3"
            case "middle":
                return "px-3 py-2"
            case "small":
                return "px-2 py-1"
        }
    }

    return (
        <ButtonWrapper
            style={style}
            disabled={disabled}
            onClick={onClick}
            className={`${className} ${getVariantButton()} ${getSizeButton()} font-semibold font-sans hover:opacity-80 rounded-full flex items-center gap-1`}
            href={href}
        >
            {icon}
            {children}
        </ButtonWrapper>
    )
}

const _Button = styled.button``

export default Button
