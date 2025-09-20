// 포트폴리오 전용 유틸리티 함수들
import { Project, Experience, Note } from './types'

// 대표 프로젝트 조회 (3개)
export const getFeaturedProjects = (): Project[] => {
  // 임시 데이터 - 실제로는 데이터베이스나 API에서 가져올 예정
  return [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: '기획부터 배포까지 완성한 전자상거래 플랫폼. 사용자 경험을 중심으로 설계하고 현대적인 기술로 구현했습니다.',
      tags: ['Next.js', 'TypeScript', 'Supabase', 'Stripe'],
      liveUrl: 'https://ecommerce-demo.vercel.app',
      githubUrl: 'https://github.com/username/ecommerce',
      role: '기획, 디자인, 개발, 배포',
      featured: true
    },
    {
      id: 2,
      title: '실시간 협업 도구',
      description: '팀 프로젝트를 위한 실시간 협업 플랫폼. WebSocket을 활용한 실시간 통신과 직관적인 UI로 팀워크를 향상시킵니다.',
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      liveUrl: 'https://collaboration-tool.vercel.app',
      githubUrl: 'https://github.com/username/collaboration',
      role: '기획, 개발, 배포',
      featured: true
    },
    {
      id: 3,
      title: 'AI 기반 학습 플랫폼',
      description: '개인화된 학습 경험을 제공하는 AI 플랫폼. 사용자 데이터를 분석하여 맞춤형 콘텐츠를 추천합니다.',
      tags: ['Next.js', 'Python', 'FastAPI', 'OpenAI'],
      liveUrl: 'https://ai-learning.vercel.app',
      githubUrl: 'https://github.com/username/ai-learning',
      role: '기획, 개발',
      featured: true
    }
  ]
}

// 슬러그로 프로젝트 조회
export const getProjectBySlug = (slug: string): Project | null => {
  // 실제 구현에서는 데이터베이스 쿼리
  const projects = getFeaturedProjects()
  return projects.find(project => 
    project.title.toLowerCase().replace(/\s+/g, '-') === slug
  ) || null
}

// 기술별 프로젝트 필터링
export const getProjectsByTechnology = (tech: string): Project[] => {
  const projects = getFeaturedProjects()
  return projects.filter(project => 
    project.tags.some(tag => 
      tag.toLowerCase().includes(tech.toLowerCase())
    )
  )
}

// 대표 경험 조회
export const getFeaturedExperiences = (): Experience[] => {
  // 임시 데이터 - 실제로는 데이터베이스에서 가져올 예정
  return []
}

// 타입별 경험 필터링
export const getExperiencesByType = (type: string): Experience[] => {
  const experiences = getFeaturedExperiences()
  return experiences.filter(exp => exp.category === type)
}

// 발행된 노트 조회
export const getPublishedNotes = (): Note[] => {
  // 임시 데이터
  return []
}

// 카테고리별 노트 필터링
export const getNotesByCategory = (category: string): Note[] => {
  const notes = getPublishedNotes()
  return notes.filter(note => note.category === category)
}

// 노트 통계 조회
export const getNotesStats = () => {
  const notes = getPublishedNotes()
  return {
    total: notes.length,
    categories: [...new Set(notes.map(note => note.category))].length,
    tags: [...new Set(notes.flatMap(note => note.tags))].length,
    avgReadTime: Math.round(
      notes.reduce((sum, note) => sum + (note.readTime || 0), 0) / notes.length
    ) || 0
  }
}

// 날짜 포맷팅 함수
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// 읽기 시간 계산 함수
export const calculateReadTime = (content: string): number => {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}
