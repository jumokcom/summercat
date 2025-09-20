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
      root.classList.remove('light', 'dark')
      root.classList.add(forceTheme)
      
      // localStorage에도 저장
      localStorage.setItem('theme', forceTheme)
    }
  }, [forceTheme])

  if (!mounted) {
    return <div className="min-h-screen">{children}</div>
  }

  return (
    <NextThemesProvider
      {...props}
      defaultTheme={forceTheme}
      forcedTheme={forceTheme}
    >
      {children}
    </NextThemesProvider>
  )
}
