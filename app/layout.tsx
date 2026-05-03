import type { Metadata } from "next";
import { Bellefair, Barlow, Barlow_Condensed } from "next/font/google"; 
import "./globals.css";

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
  title: "Digitalbank",
  description: "Landing page for Digitalbank, Frontend Mentor challenge",
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
      <body className="min-h-full">{children}</body>
    </html>
  );
}
