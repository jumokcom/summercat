// 공통 상수 및 설정값들
// - SITE_CONFIG: 사이트 기본 설정
// - NAVIGATION_ITEMS: 메인 네비게이션 아이템들
// - PORTFOLIO_NAVIGATION: 포트폴리오 네비게이션 아이템들
// - 기타 공통으로 사용되는 상수들

import type { NavigationItem } from './types'

// 사이트 기본 설정
export const SITE_CONFIG = {
  name: 'SummerCat',
  title: 'SummerCat - Portfolio & Web Development',
  description: 'Full-stack developer specializing in modern web technologies',
  url: 'https://summercat.dev',
  author: 'SummerCat',
  keywords: ['portfolio', 'web development', 'react', 'nextjs', 'typescript'],
  social: {
    github: 'https://github.com/summercat01',
    twitter: 'https://twitter.com/summercat',
    linkedin: 'https://linkedin.com/in/summercat',
    email: 'hello@summercat.dev'
  }
} as const

// 메인 네비게이션 아이템들
export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    label: 'Portfolio',
    href: '/portfolio',
    icon: 'briefcase'
  },
  {
    label: 'Web2',
    href: '/web2',
    icon: 'globe'
  },
  {
    label: 'Web3',
    href: '/web3',
    icon: 'crypto'
  },
  {
    label: 'Hub',
    href: '/hub',
    icon: 'gamepad'
  }
]

// 포트폴리오 네비게이션 아이템들
export const PORTFOLIO_NAVIGATION: NavigationItem[] = [
  {
    label: 'About',
    href: '/portfolio/about',
    icon: 'user'
  },
  {
    label: 'Projects',
    href: '/portfolio/projects',
    icon: 'folder'
  },
  {
    label: 'Experiences',
    href: '/portfolio/experiences',
    icon: 'award'
  },
  {
    label: 'Notes',
    href: '/portfolio/notes',
    icon: 'book'
  }
]

// 기술 스택 카테고리
export const TECH_CATEGORIES = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Database',
  devops: 'DevOps',
  mobile: 'Mobile',
  other: 'Other'
} as const

// 프로젝트 상태
export const PROJECT_STATUS = {
  completed: '완료',
  'in-progress': '개발중',
  planned: '예정'
} as const

// 경험 타입
export const EXPERIENCE_TYPES = {
  work: '업무 경험',
  education: '교육',
  project: '프로젝트'
} as const

// 페이지네이션 기본값
export const PAGINATION_DEFAULTS = {
  page: 1,
  limit: 12,
  maxLimit: 100
} as const

// API 엔드포인트
export const API_ENDPOINTS = {
  projects: '/api/projects',
  experiences: '/api/experiences',
  notes: '/api/notes',
  contact: '/api/contact'
} as const

// 로컬 스토리지 키
export const STORAGE_KEYS = {
  theme: 'summercat-theme',
  language: 'summercat-language',
  preferences: 'summercat-preferences'
} as const

// 애니메이션 지속시간 (ms)
export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500
} as const

// 브레이크포인트 (px)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const