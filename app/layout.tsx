import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Poppins } from "next/font/google"
import "./globals.css"

const font1 = Montserrat({
  subsets: ["latin"],
  variable: "--font-main",
  display: "swap",
})

const font2 = Poppins({
  subsets: ["latin"],
  variable: "--font-text",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "jase",
  description:
    "Personal portfolio of Jane Doe, a passionate designer and developer creating beautiful digital experiences.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${font1.variable} ${font2.variable}`}>
      <body className={font1.className}>{children}</body>
    </html>
  )
}
