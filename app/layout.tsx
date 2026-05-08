import type { Metadata } from "next";
import { Bellefair, Barlow, Barlow_Condensed } from "next/font/google"; 
import "./globals.css";
import { AllBgImages } from "./components/all-bg-images";
import { Header } from "./components/header";

const fontBellefair = Bellefair({
  variable: "--font-Bellefair",
  weight: "400",
})

const fontBarlow = Barlow({
  variable: "--font-Barlow",
  weight: "400",
})

const fontBarlowCondensed = Barlow_Condensed({
  variable: "--font-Barlow-Condensed",
  weight: "400",
})

export const metadata: Metadata = {
  title: "Frontend Mentor | Space tourism website",
  description: "Design and assets provided through frontend mentor, website developed by Syed",
};  


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontBellefair.variable} ${fontBarlow.variable} ${fontBarlowCondensed.variable} h-full antialiased`}
    >
      <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png"></link>
      <body className="min-h-full grid">
        <AllBgImages/>
        <div className="[grid-area:1/1] z-5 absolute h-20 top-9 right-0 w-[55%] bg-white/5 backdrop-blur-lg"></div>
        <div className="[grid-area:1/1] z-10 flex flex-col lg:max-w-7xl lg:mx-auto w-full lg:px-10">
          <Header/>
          {children}
        </div>
      </body>
    </html>
  );
}
