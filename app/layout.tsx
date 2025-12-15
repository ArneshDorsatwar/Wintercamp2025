import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BestBrains Winter Camp — AI & ML Learning Program',
  description: 'A 5-Day AI, Machine Learning & Creative Technology Camp for Kids',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

