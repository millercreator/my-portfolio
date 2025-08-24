import type React from "react"
import type { Metadata } from "next"
import { fontVariable } from "@/lib/fonts"
import { ThemeProvider } from "@/components/theme-provider"
import { FloatingNav } from "@/components/floating-nav"
import "./globals.css"

export const metadata: Metadata = {
  title: "Next.js App",
  description: "A clean Next.js application",
  generator: 'v0.app'
}

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
          <main className="min-h-screen">{children}
            <FloatingNav />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
