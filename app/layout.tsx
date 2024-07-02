import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'DnD Helper',
  description: 'A tool to help make your DnD experience more satisfying.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={cn('bg-background min-h-screen font-sans antialiased', inter.variable)}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
