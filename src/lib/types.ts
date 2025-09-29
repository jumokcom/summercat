// 포트폴리오 전용 타입 정의들

export type ExperienceIconName = 'Users' | 'Heart' | 'Trophy' | 'Code2'
export type KeywordIconName = 'Zap' | 'Target' | 'Users2'

export interface PortfolioConfig {
  name: string
  title: string
  description: string
  email: string
  github: string
  linkedIn?: string
}

export interface HeroStat {
  step: string
  title: string
  desc: string
  color: string
}

export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image?: string
  liveUrl?: string
  githubUrl?: string
  role: string
  startDate?: string
  endDate?: string
  featured?: boolean
}

export interface Experience {
  id: number
  category: string
  title: string
  organization: string
  period: string
  location: string
  description: string
  impact: string
  skills: string[]
  iconName: ExperienceIconName
  color: string
}

export interface TechStack {
  frontend: string[]
  backend: string[]
  tools: string[]
  deployment: string[]
}

export interface Keyword {
  id: number
  keyword: string
  description: string
  iconName: KeywordIconName
  color: string
  bgGradient: string
}

export interface Note {
  id: number
  title: string
  description?: string
  publishedAt: string
  category: string
  tags: string[]
  slug: string
  readTime?: number
}

export interface WorkflowStep {
  id: number
  title: string
  subtitle: string
  icon: string
  color: string
  description: string
  details: string[]
  bgGradient: string
}

export interface TechTag {
  name: string
  count: number
  color: string
}

export interface NavigationLink {
  name: string
  href: string
}

// 컴포넌트 Props 타입들
export interface ProjectCardProps {
  project: Project
  index?: number
}

export interface ExperienceCardProps {
  experience: Experience
  isActive?: boolean
}

export interface KeywordCardProps {
  keyword: Keyword
  index: number
}
