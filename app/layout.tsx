import "@/styles/globals.css";
import Navi from "@/components/Navi";
import { fontSans, fontSansSC } from "@/config/fonts";

import { siteConfig } from "@/config/site";
import clsx from "clsx";
import { Metadata, Viewport } from "next";
import React, { type PropsWithChildren } from "react";

import { Providers } from "./providers";

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`
    },
    description: siteConfig.description,
    icons: {
        icon: "/favicon.ico"
    }
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" }
    ]
};

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html suppressHydrationWarning lang="zh-CN">
        <head>
            <title>Alicorn</title>
        </head>
        <body
            className={clsx(
                "min-h-screen bg-background font-sans antialiased",
                fontSans.variable, fontSansSC.variable
            )}
        >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <Navi />
            <main className="w-full">
                {children}
            </main>
            <Footer />
        </Providers>
        </body>
        </html>
    );
}

function Footer() {
    return <footer className="bg-content1 mt-20">
        <div className="flex flex-col gap-2 p-10">
            <p className="mx-auto">版权所有 © 2025 Ted "skjsjhb" Gao</p>
            <p className="mx-auto">Alicorn 是独立作品，与 Microsoft 和 Mojang Studios 没有任何关联。</p>
        </div>
    </footer>;
}
