import plugin from "tailwindcss";
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
      keyframes: {
        opacityOnload: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        revealOnload: {
          "0%": {
            opacity: "1",
            maskPosition: "100%",
          },
          "100%": {
            opacity: "1",
            maskPosition: "0%",
          },
        },
        slideInFromLeft: {
          "0%": {
            transform: "translateX(-1000px)",
          },
          "100%": {
            transform: "translateX(0px)",
          },
        },
      },
      animation: {
        opacityOnload: "opacityOnload 1.5s ease-in-out 0ms",
        revealOnload: "revealOnload 5s linear 100ms",
        slideInFromLeft:
          "slideInFromLeft 1s cubic-bezier(0.42, 0, 0.53, 1.2) 0ms",
      },
    },
  },
  plugins: [],
};
export default config;
