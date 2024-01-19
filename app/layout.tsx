import "./globals.css"

import type { Metadata } from "next"
import { Montserrat } from "next/font/google"

const font = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Spectrum Website",
  description:
    "SDCPL is a leading player in the Indian Dyes industry with its exceptional range of Disperse Dyes and Reactive Dyes.",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}

export default RootLayout
