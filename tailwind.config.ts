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
        opacityOnloadDelayed: {
          "0%": {
            opacity: "0",
          },
          "70%": {
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
        fly: {
          from: {
            transform: "translateY(0.1em)",
          },
          to: {
            transform: "translateY(-0.1em)",
          },
        },
        breath1: {
          "0%": {
            background: "transparent",
          },
          "50%": {
            background: "#0ea87a",
            boxShadow:
              "-10px -10px 15px rgba(14, 168, 122, 0.7), 10px 10px 15px rgba(14, 168, 122, 0.7)",
          },
          "100%": {
            background: "transparent",
          },
        },
        breath2: {
          "0%": {
            background: "transparent",
          },
          "50%": {
            background: "#0e76a8",
            boxShadow:
              "-10px -10px 15px rgba(14, 118, 168, 0.7), 10px 10px 15px rgba(14, 118, 168, 0.7)",
          },
          "100%": {
            background: "transparent",
          },
        },
        visibleWithBlur: {
          to: {
            opacity: "1",
            blur: "0",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        opacityOnload: "opacityOnload 1.5s ease-in-out 0ms",
        opacityOnload5s:
          "opacityOnloadDelayed 5s cubic-bezier(1, -0.01, 0.86, 1.01) 0ms",
        revealOnload: "revealOnload 5s linear 100ms",
        slideInFromLeft:
          "slideInFromLeft 1s cubic-bezier(0.42, 0, 0.53, 1.2) 0ms",
        breath1: "breath1 5s ease-in-out infinite",
        breath2: "breath2 5s ease-in-out infinite",
        visibleWithBlur: "visibleWithBlur 0.5s 1s linear 1 forwards",
      },
    },
  },
  plugins: [],
};
export default config;
