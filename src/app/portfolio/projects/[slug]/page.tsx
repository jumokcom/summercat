// 프로젝트 상세 페이지 (/portfolio/projects/[slug])
// - 프로젝트 상세 정보 표시
// - 프로젝트 이미지 갤러리
// - 기술 스택 상세 정보
// - 프로젝트 기능 설명
// - GitHub 링크, 라이브 데모 링크
// - 관련 프로젝트 추천

import { notFound } from 'next/navigation'

interface ProjectDetailPageProps {
  params: {
    slug: string
  }
}

export default function ProjectDetailPage() {
  // 임시로 404 페이지 반환 (나중에 실제 프로젝트 데이터로 구현)
  notFound()
}