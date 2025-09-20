// 공통 헤더 컴포넌트
// - 사이트 로고/브랜딩
// - 메인 네비게이션 메뉴
// - 다크모드 토글
// - 모바일 햄버거 메뉴
// - 반응형 디자인

import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-900 dark:text-white">
            Summer Cat World
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              Home
            </Link>
            <Link href="/portfolio" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              Portfolio
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}