import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import ThemeSwitcher from "./ui/components/shared/ThemeSwitcher";
import Navbar from "./ui/components/navbar/Navbar";
import localFont from "next/font/local";

// Font files can be colocated inside of `app`
const mudhoney = localFont({
  src: [
    {
      path: "../public/fonts/MudHoney.ttf",
      weight: "700",
    },
  ],
  variable: "--font-mudhoney",
});

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.className} ${mudhoney.variable} relative border-box bg-w bg-white dark:bg-dark  w-full h-full`}
      >
        <Providers>
          <Navbar></Navbar>
          <main className="scroll-smooth md:scroll-auto">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
