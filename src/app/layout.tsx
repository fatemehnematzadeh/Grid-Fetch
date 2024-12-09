import './globals.css'
import "./css/button.module.css"
import { Inter } from 'next/font/google'
import {QueryClient, QueryClientProvider} from "react-query";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="fa">

    <body className={inter.className}>{children}</body>

    </html>
  )
}