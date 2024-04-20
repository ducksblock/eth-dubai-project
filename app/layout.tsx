import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThirdwebProvider } from '@/app/helper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'L2 NFT dApp',
  description: 'A L2 NFT dApp by @ducksblock',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThirdwebProvider>{children}</ThirdwebProvider>
      </body>
    </html>
  )
}
