// Section Title 컴포넌트
// - 섹션 제목을 표시하는 공통 컴포넌트
// - 제목과 부제목/설명
// - 중앙 정렬 또는 왼쪽 정렬 옵션
// - 애니메이션 효과
// - 재사용 가능한 컴포넌트

import React from 'react'

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionTitle({ 
  title, 
  subtitle, 
  centered = true,
  className = ''
}: SectionTitleProps) {
  return (
    <div className={`${centered ? 'text-center' : 'text-left'} ${className}`}>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}