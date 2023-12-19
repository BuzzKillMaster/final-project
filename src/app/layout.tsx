import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import {ReactNode} from "react";

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Borreby Adfærdsklinik',
    description: 'Borreby Adfærdsklinik er en dyreadfærdsklinik, der tilbyder adfærdstræning til hunde. Vi tilbyder også undervisning og foredrag om dyreadfærd.',
}

export default function RootLayout({children}: {
  children: ReactNode
}) {
    return (
        <html lang="en">
        <body className={openSans.className + " leading-relaxed"}>{children}</body>
        </html>
    )
}
