// 포트폴리오 데이터
// - projects: 프로젝트 목록 데이터
// - experiences: 경험/활동 데이터
// - techStacks: 기술 스택 데이터
// - keywords: 핵심 키워드 데이터
// - notes: 노트/블로그 데이터
// - 기타 포트폴리오 관련 데이터들

export const portfolioConfig = {
  name: 'Summer Cat',
  title: '웹 개발자',
  description: '기획부터 배포까지, 웹 개발의 모든 과정을 책임집니다',
  email: 'summercat@example.com',
  github: 'https://github.com/summercat',
  linkedIn: '',
}

export const heroStats = [
  { step: '01', title: '기획', desc: '요구사항 분석', color: 'text-blue-600 dark:text-blue-400' },
  { step: '02', title: '디자인', desc: 'UI/UX 설계', color: 'text-green-600 dark:text-green-400' },
  { step: '03', title: '개발', desc: '빠른 구현', color: 'text-orange-600 dark:text-orange-400' },
  { step: '04', title: '배포', desc: '서비스 런칭', color: 'text-purple-600 dark:text-purple-400' },
]

// 기술 스택 데이터
export const techStacks = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  backend: ['Node.js', 'Supabase', 'PostgreSQL', 'Prisma'],
  tools: ['VS Code', 'Figma', 'Notion', 'Git'],
  deployment: ['Vercel', 'Docker', 'AWS', 'Github Actions']
}

// 더 많은 데이터들은 필요에 따라 추가...
