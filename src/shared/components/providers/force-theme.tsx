// 강제 테마 설정 컴포넌트
// - 특정 테마를 강제로 적용
// - 포트폴리오 페이지에서 다크모드 강제 적용

"use client"

import { useEffect } from 'react'
import { useTheme } from 'next-themes'

interface ForceThemeProps {
  theme: 'light' | 'dark' | 'system'
}

export function ForceTheme({ theme }: ForceThemeProps) {
  const { setTheme } = useTheme()

  useEffect(() => {
    // 테마 강제 설정
    setTheme(theme)
    
    // DOM에도 직접 적용
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement
      root.classList.remove('light', 'dark')
      root.classList.add(theme)
      root.setAttribute('data-theme', theme)
      root.style.colorScheme = theme
      
      console.log('ForceTheme: 테마를', theme, '로 강제 설정했습니다')
    }
  }, [theme, setTheme])

  return null
}
