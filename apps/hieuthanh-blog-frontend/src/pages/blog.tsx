import Head from "next/head"
import React from "react"
import { Inter } from "next/font/google"
import Main from "@/layouts/Main"

const Blog = () => {
    return (
        <>
            <Head>
                <title>Hieu Thanh | Blog</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div style={{ minHeight: "1000px" }}>
                {" "}
                <div className="flex flex-col items-center justify-center min-h-screen ">
                    <h1 className="mb-8 text-5xl font-bold text-color-text animate-pulse">
                        Coming Soon
                    </h1>
                    <p className="mb-8 text-lg text-color-text">
                        I'm working hard to bring you something amazing. Stay
                        tuned!
                    </p>
                </div>
            </div>
        </>
    )
}

Blog.getLayout = (page: React.ReactNode) => <Main>{page}</Main>

export default Blog
