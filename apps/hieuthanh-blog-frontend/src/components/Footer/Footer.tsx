import Link from "next/link"
import { Fragment } from "react"
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillMail,
    AiFillTwitterCircle,
    AiFillTwitterSquare,
    AiOutlineGithub,
    AiOutlineLinkedin,
    AiOutlineMail,
    AiOutlineTwitter,
} from "react-icons/ai"
import styled from "styled-components"

const Footer: React.FC = () => {
    return (
        <div className="p-5 border-t-4 border-solid border-color-secondary">
            <div className="container flex flex-wrap justify-around gap-2 mx-auto text-sm text-color-gray-600">
                <div>
                    <span>Made with </span>
                    <i>❤️ love, </i>
                    <i>🔥 passion,</i>
                    <span> and a </span>
                    <i>⌨️ keyboard.</i>
                </div>
                <div className="flex flex-col flex-wrap items-center gap-2 lg:flex-row">
                    <span>{`© ${new Date().getFullYear()} Hieu Thanh. All rights reserved.`}</span>
                    <span className="flex gap-2">
                        <Link href="#">
                            <AiOutlineTwitter
                                className="hover:text-color-secondary"
                                fontSize={16}
                            />
                        </Link>
                        <Link href="#">
                            <AiFillGithub
                                className="hover:text-color-secondary"
                                fontSize={16}
                            />
                        </Link>
                        <Link href="#">
                            <AiFillLinkedin
                                className="hover:text-color-secondary"
                                fontSize={16}
                            />
                        </Link>
                        <Link href="#">
                            <AiOutlineMail
                                className="hover:text-color-secondary"
                                fontSize={16}
                            />
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer
