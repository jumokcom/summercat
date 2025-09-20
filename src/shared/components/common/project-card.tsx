// Project Card 컴포넌트
// - 프로젝트 정보를 표시하는 카드 컴포넌트
// - 프로젝트 이미지, 제목, 설명
// - 기술 스택 태그들
// - GitHub 링크, 라이브 데모 링크
// - 상태 표시 (완성/개발중/예정)
// - 호버 효과
// - 재사용 가능한 컴포넌트

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  status?: 'completed' | 'in-progress' | 'planned'
}

export default function ProjectCard({ 
  title, 
  description, 
  tags, 
  status = 'planned'
}: ProjectCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="text-sm text-gray-500">
          Status: {status}
        </div>
      </CardContent>
    </Card>
  )
}