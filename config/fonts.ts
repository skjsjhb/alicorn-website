import { JetBrains_Mono as FontMono, Noto_Sans_SC, Nunito as FontSans } from "next/font/google";

export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans"
});

export const fontSansSC = Noto_Sans_SC({
    variable: "--font-sans-sc"
});

export const fontMono = FontMono({
    subsets: ["latin"],
    variable: "--font-mono"
});
