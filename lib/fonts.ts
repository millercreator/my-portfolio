import localFont from "next/font/local"
import { Geist, JetBrains_Mono } from "next/font/google"

const inter = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
})

const newKansas = localFont({
  src: [
    {
      path: '../app/fonts/NewKansas-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../app/fonts/NewKansas-SemiBoldItalic.woff2',
      weight: '600',
      style: 'italic',
    }
  ],
  display: "swap",
  variable: "--font-newkansas",
})

export const fontVariable = `${inter.variable} ${jetbrainsMono.variable} ${newKansas.variable}`
