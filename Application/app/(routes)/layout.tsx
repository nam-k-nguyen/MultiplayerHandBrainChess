import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import Footer from '../_components/Footer'
import Header from '../_components/Header'
import styles from './root.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Multiplaye Hand and Brain Chess',
  description: 'A multiplayer and multi-mode web app that supports traditional and hand and brain chess.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script src="https://kit.fontawesome.com/5c4ca1dfe4.js"></Script>
      <body className={inter.className}>
        <Header />
        <main id={`haha`}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
