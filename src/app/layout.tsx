import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Summer Cat Portfolio',
  description: '기획부터 배포까지 책임지는 만능 웹 개발자 포트폴리오',
  keywords: ['웹개발', '개발자', 'Summer Cat', '포트폴리오', 'Next.js', 'TypeScript'],
  authors: [{ name: 'SummerCat', url: 'https://github.com/summercat01' }],
  openGraph: {
    title: 'Summer Cat Portfolio',
    description: '기획부터 배포까지 책임지는 만능 웹 개발자 포트폴리오',
    type: 'website',
    locale: 'ko_KR',
  },
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
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
