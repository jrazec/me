"use client"

import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Montserrat, Poppins } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "./theme-provider"

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
  title: "Razec • Backend Systems",
  description:
    "Backend-themed portfolio for John Razec Agno focusing on APIs, observability, and reliable system design.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${font1.variable} ${font2.variable}`}>
      <body className={`${font1.className} bg-background text-foreground antialiased`}>
        <Analytics />
        <ThemeProvider>
          {/* Only show header/footer for non-homepage routes */}
          <div className="min-h-screen">
            {children}
          </div>

          {/* Footer for project pages */}
          <div id="project-footer" className="hidden border-t border-white/10 bg-black/30">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 sm:px-6 py-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
              <span>Version · v2025.12</span>
              <span>Last deployed: 2025-12-03</span>
              <span>PortfolioAPI Status: Online</span>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
