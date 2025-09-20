// Web2 기본 타입 정의
export interface Web2Project {
  id: number
  title: string
  description: string
  technologies: string[]
  category: 'fullstack' | 'frontend' | 'backend' | 'api'
  status: 'planned' | 'in-progress' | 'completed'
  githubUrl?: string
  liveUrl?: string
}

export interface Web2Technology {
  name: string
  category: 'frontend' | 'backend' | 'database' | 'tools'
  description: string
  icon?: string
  color?: string
}

export interface Web2Tutorial {
  id: number
  title: string
  description: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  estimatedTime: number // in minutes
  technologies: string[]
  content?: string
}
