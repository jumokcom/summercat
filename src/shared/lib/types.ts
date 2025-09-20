// 공통 타입 정의들
// - WebsiteCard: 웹사이트 카드 타입
// - NavigationItem: 네비게이션 아이템 타입
// - Project: 프로젝트 타입
// - Experience: 경험 타입
// - TechStack: 기술 스택 타입
// - Keyword: 키워드 타입
// - Note: 노트 타입
// - 기타 공통으로 사용되는 타입들

// 웹사이트 카드 타입
export interface WebsiteCard {
  id: string
  title: string
  description: string
  image: string
  url: string
  tags: string[]
  category: 'web2' | 'web3'
}

// 네비게이션 아이템 타입
export interface NavigationItem {
  label: string
  href: string
  icon?: string
  children?: NavigationItem[]
}

// 프로젝트 타입
export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  status: 'completed' | 'in-progress' | 'planned'
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}

// 경험 타입
export interface Experience {
  id: string
  title: string
  company: string
  period: string
  description: string
  skills: string[]
  type: 'work' | 'education' | 'project'
}

// 기술 스택 타입
export interface TechStack {
  name: string
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'mobile' | 'other'
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  icon?: string
}

// 키워드 타입
export interface Keyword {
  id: string
  text: string
  category: string
  color?: string
}

// 노트 타입
export interface Note {
  id: string
  title: string
  content: string
  tags: string[]
  createdAt: Date
  updatedAt: Date
  published: boolean
}

// 테마 타입
export type Theme = 'light' | 'dark' | 'system'

// 상태 타입
export type Status = 'idle' | 'loading' | 'success' | 'error'

// API 응답 타입
export interface ApiResponse<T = any> {
  data: T
  message: string
  success: boolean
  error?: string
}

// 페이지네이션 타입
export interface Pagination {
  page: number
  limit: number
  total: number
  totalPages: number
}

// 필터 타입
export interface Filter {
  category?: string
  tags?: string[]
  status?: string
  search?: string
}