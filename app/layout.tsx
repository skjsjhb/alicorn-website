import "@/styles/globals.css";
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
            <main className="w-full">
                {children}
            </main>
        </Providers>
        </body>
        </html>
    );
}
