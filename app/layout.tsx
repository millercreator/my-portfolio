import type React from "react"
import { fontVariable } from "@/lib/fonts"
import { ThemeProvider } from "@/components/theme-provider"
import { FloatingNav } from "@/components/floating-nav"
import { metadata as metaConfig } from "../lib/metadata"
import "./globals.css"

export const metadata = metaConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fontVariable} antialiased`} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen">
            {children}
            <FloatingNav />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
