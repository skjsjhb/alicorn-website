import { heroui } from "@heroui/theme";
import theme from "./theme.json";

/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-sans), var(--font-sans-sc)"],
                mono: ["var(--font-mono)"]
            }
        }
    },
    darkMode: "class",

    plugins: [
        heroui({ ...theme })
    ]
};
