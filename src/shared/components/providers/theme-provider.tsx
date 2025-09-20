// 테마 프로바이더 컴포넌트
// - 다크모드/라이트모드 전환
// - 시스템 테마 감지
// - 테마 상태 관리
// - next-themes 라이브러리 사용

"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
