import type { Metadata } from 'next'
import { PortfolioHeader } from '@/features/portfolio'
import { PortfolioTheme } from '@/shared/components/providers/portfolio-theme'

export const metadata: Metadata = {
  title: 'Summer Cat | Portfolio',
  description: '기획부터 배포까지, 웹 개발의 모든 과정을 책임지는 개발자',
  keywords: ['웹개발', '풀스택', '기획', '디자인', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Summer Cat', url: 'https://github.com/summercat01' }],
  openGraph: {
    title: 'Summer Cat | Portfolio',
    description: '기획부터 배포까지, 웹 개발의 모든 과정을 책임지는 개발자',
    url: 'https://summercat.vercel.app',
    siteName: 'Summer Cat Portfolio',
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
    <div className="min-h-screen">
      <PortfolioTheme />
      <PortfolioHeader />
      <main>
        {children}
      </main>
    </div>
  )
}
