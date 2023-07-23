import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Toolbox',
  description: 'Toolbox from glucn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
          <Sidebar />
          <div className="lg:pl-[19.5rem] min-h-screen flex-col items-center justify-between relative">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
