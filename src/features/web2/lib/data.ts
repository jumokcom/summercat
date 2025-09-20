// Web2 기본 데이터
export const web2Config = {
  title: 'Web2 Labs',
  description: '전통적인 웹 기술과 현대적인 도구들을 활용한 실험실',
  categories: [
    'Full Stack Development',
    'API Development', 
    'Database Design',
    'Server Architecture',
    'Frontend Frameworks'
  ]
}

// 계획된 Web2 프로젝트들
export const plannedProjects = [
  {
    id: 1,
    title: 'REST API 설계 가이드',
    description: 'RESTful API 설계 원칙과 모범 사례',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    category: 'api' as const,
    status: 'planned' as const
  },
  {
    id: 2,
    title: 'React 컴포넌트 라이브러리',
    description: '재사용 가능한 React 컴포넌트 모음',
    technologies: ['React', 'TypeScript', 'Storybook'],
    category: 'frontend' as const,
    status: 'planned' as const
  },
  {
    id: 3,
    title: 'Database 최적화 실습',
    description: '데이터베이스 성능 최적화 기법들',
    technologies: ['PostgreSQL', 'Redis', 'Prisma'],
    category: 'backend' as const,
    status: 'planned' as const
  }
]

// Web2 기술 스택
export const web2Technologies = [
  {
    name: 'React',
    category: 'frontend' as const,
    description: '사용자 인터페이스 구축을 위한 JavaScript 라이브러리',
    color: '#61DAFB'
  },
  {
    name: 'Node.js',
    category: 'backend' as const,
    description: 'JavaScript 런타임 환경',
    color: '#339933'
  },
  {
    name: 'PostgreSQL',
    category: 'database' as const,
    description: '오픈소스 관계형 데이터베이스',
    color: '#336791'
  }
]
