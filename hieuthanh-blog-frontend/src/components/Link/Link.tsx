import React from "react"
import NextLink from "next/link"
import styled from "styled-components"

import { COLORS } from "@/constants"

interface Props {
    href: string
    target: string
    rel: string
    delegated?: object
}

const Link = ({ href, target, rel, ...delegated }: Props) => {
    // Links are external if they start with `http` or `https`
    const external = href.match(/(^http|^mailto)/i)

    // By default, external links should open in a new tab.
    // This is overrideable though.
    if (typeof target === "undefined") {
        target = external ? "_blank" : "_self"
    }

    const LinkComponent = external ? ExternalLink : InternalLink

    const safeRel = target === "_blank" ? "noopener noreferrer" : rel

    return (
        <LinkComponent
            as={external ? "a" : NextLink}
            href={href}
            rel={safeRel}
            target={target}
            {...delegated}
        />
    )
}

const ExternalLink = styled.a`
    color: ${(props) =>
        COLORS.text[props.theme] ? COLORS.text[props.theme] : COLORS.pink[500]};
`

const InternalLink = styled(ExternalLink).attrs((props) => ({
    href: props.href,
}))``

export default Link
