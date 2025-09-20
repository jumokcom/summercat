import type { Metadata } from 'next'
import { PortfolioHeader } from '@/features/portfolio'
import { ThemeProvider } from '@/shared/components/providers/theme-provider'

export const metadata: Metadata = {
  title: 'Summer Cat | 포트폴리오',
  description: '기획부터 배포까지, 웹 개발의 모든 과정을 책임지는 개발자',
  keywords: ['웹개발', '풀스택', '기획', '디자인', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Summer Cat', url: 'https://github.com/summercat' }],
  openGraph: {
    title: 'Summer Cat | 포트폴리오',
    description: '기획부터 배포까지, 웹 개발의 모든 과정을 책임지는 개발자',
    url: 'https://your-domain.com',
    siteName: 'Summer Cat 포트폴리오',
    locale: 'ko_KR',
    type: 'website',
  },
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange
    >
      <div className="min-h-screen">
        <PortfolioHeader />
        <main>
          {children}
        </main>
      </div>
    </ThemeProvider>
  )
}
