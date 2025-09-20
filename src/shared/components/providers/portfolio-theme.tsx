// 포트폴리오 페이지 전용 테마 컴포넌트
// - 포트폴리오 페이지에서 다크모드 강제 적용
// - 클라이언트 사이드에서 테마 설정

"use client"

import { useEffect } from 'react'
import { useTheme } from 'next-themes'

export function PortfolioTheme() {
  const { setTheme } = useTheme()

  useEffect(() => {
    // 포트폴리오 페이지에서는 항상 다크모드로 설정
    setTheme('dark')
    
    // DOM에도 직접 적용
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement
      root.classList.remove('light')
      root.classList.add('dark')
      root.setAttribute('data-theme', 'dark')
      root.style.colorScheme = 'dark'
    }
  }, [setTheme])

  return null
}
