import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/shared/components/providers/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Summer Cat World',
  description: '다양한 웹 기술과 서비스를 탐구하는 실험실',
  keywords: ['웹개발', '개발자', 'Summer Cat', '포트폴리오', 'Web2', 'Web3', '블록체인'],
  authors: [{ name: 'Summer Cat', url: 'https://github.com/summercat' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
