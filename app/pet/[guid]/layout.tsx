"use client"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export default function GUIDLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
