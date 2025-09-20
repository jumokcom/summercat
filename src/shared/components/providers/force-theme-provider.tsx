// 강제 테마 프로바이더 컴포넌트
// - 특정 페이지에서 테마를 강제로 설정
// - 포트폴리오 페이지에서 다크모드 강제 적용

"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes"

interface ForceThemeProviderProps extends Omit<ThemeProviderProps, 'defaultTheme'> {
  forceTheme: 'light' | 'dark' | 'system'
  children: React.ReactNode
}

export function ForceThemeProvider({ 
  forceTheme, 
  children, 
  ...props 
}: ForceThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    
    // 강제로 테마 설정
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement
      
      // 기존 테마 클래스 제거
      root.classList.remove('light', 'dark')
      
      // 새 테마 클래스 추가
      root.classList.add(forceTheme)
      
      // data-theme 속성도 설정
      root.setAttribute('data-theme', forceTheme)
      
      // localStorage에 저장
      localStorage.setItem('theme', forceTheme)
      
      // 강제로 스타일 재계산
      root.style.colorScheme = forceTheme
      
      console.log('ForceThemeProvider: 테마를', forceTheme, '로 설정했습니다')
    }
  }, [forceTheme])

  // 마운트 전에도 테마 적용
  React.useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement
      root.classList.remove('light', 'dark')
      root.classList.add(forceTheme)
      root.setAttribute('data-theme', forceTheme)
      root.style.colorScheme = forceTheme
    }
  }, [forceTheme])

  if (!mounted) {
    return (
      <div className={`min-h-screen ${forceTheme}`}>
        {children}
      </div>
    )
  }

  return (
    <NextThemesProvider
      {...props}
      defaultTheme={forceTheme}
      forcedTheme={forceTheme}
      storageKey="theme"
    >
      {children}
    </NextThemesProvider>
  )
}
