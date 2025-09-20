// 공통 푸터 컴포넌트
// - 3단 구조
// - 상단: 이용약관 | 개인정보처리방침
// - 중단: © 2025 Summer Cat. All rights reserved. / Developed by Summer Cat
// - 하단: GitHub 링크 | summercat@example.com
// - 소셜 미디어 링크들

import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-sm text-gray-400 mb-4">
            © {currentYear} Summer Cat. All rights reserved.
          </div>
          <div className="text-sm text-gray-500">
            Developed by Summer Cat
          </div>
        </div>
      </div>
    </footer>
  )
}
