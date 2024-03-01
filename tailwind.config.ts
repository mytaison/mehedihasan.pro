import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors: {
    //   primary: {
    //     100: "#fbfbfb",
    //     200: "#f7f7f8",
    //     300: "#f3f4f4",
    //     400: "#eff0f1",
    //     500: "#ebeced",
    //     600: "#bcbdbe",
    //     700: "#8d8e8e",
    //     800: "#5e5e5f",
    //     900: "#2f2f2f",
    //   },
    //   black: {
    //     100: "#d7d7d7",
    //     200: "#afafaf",
    //     300: "#868686",
    //     400: "#5e5e5e",
    //     500: "#363636",
    //     600: "#2b2b2b",
    //     700: "#202020",
    //     800: "#161616",
    //     900: "#0b0b0b",
    //   },
    // },
    extend: {
      fontFamily: {
        mudhoney: ["var(--font-mudhoney)"],
      },
    },
  },
  plugins: [],
};
export default config;
