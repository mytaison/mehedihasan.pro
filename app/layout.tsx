import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
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
  title: "Mehedi Hasan",
  description: "Personal website of Mehedi Hasan",
  metadataBase: new URL(`https://mehedihasan.pro`),
  authors: [{ name: "Mehedi Hasan", url: "https://mehedihasan.pro" }],
  openGraph: {
    type: "website",
    url: "https://mehedihasan.com",
    title: "Mehedi Hasan - My Personal Site",
    description: "Personal site for showcasing portfolio and blogs",
    siteName: "mehedihasan.pro",
  },
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
          <main className="scroll-smooth md:scroll-auto flex flex-col gap-10 ">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
