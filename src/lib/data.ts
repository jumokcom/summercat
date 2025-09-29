// 포트폴리오 데이터 집합

import type {
  Experience,
  HeroStat,
  Keyword,
  NavigationLink,
  PortfolioConfig,
  Project,
  TechTag,
  WorkflowStep,
} from './types'

export const portfolioConfig: PortfolioConfig = {
  name: 'Summer Cat',
  title: '웹 개발자',
  description: '기획부터 배포까지, 웹 개발의 모든 과정을 책임집니다',
  email: 'jumokcom2001@gmail.com',
  github: 'https://github.com/summercat01',
  linkedIn: '',
}

export const heroStats: HeroStat[] = [
  { step: '01', title: '기획', desc: '요구사항 분석', color: 'text-blue-600 dark:text-blue-400' },
  { step: '02', title: '디자인', desc: 'UI/UX 설계', color: 'text-green-600 dark:text-green-400' },
  { step: '03', title: '개발', desc: '빠른 구현', color: 'text-orange-600 dark:text-orange-400' },
  { step: '04', title: '배포', desc: '서비스 런칭', color: 'text-purple-600 dark:text-purple-400' },
]

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      '기획부터 배포까지 완성한 전자상거래 플랫폼. 사용자 경험을 중심으로 설계하고 현대적인 기술로 구현했습니다.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Stripe'],
    image: '/images/project1.jpg',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    githubUrl: 'https://github.com/username/ecommerce',
    role: '기획, 디자인, 개발, 배포',
  },
  {
    id: 2,
    title: '실시간 협업 도구',
    description:
      '팀 프로젝트를 위한 실시간 협업 플랫폼. WebSocket을 활용한 실시간 통신과 직관적인 UI로 팀워크를 향상시킵니다.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    image: '/images/project2.jpg',
    liveUrl: 'https://collaboration-tool.vercel.app',
    githubUrl: 'https://github.com/username/collaboration',
    role: '기획, 개발, 배포',
  },
  {
    id: 3,
    title: 'AI 기반 학습 플랫폼',
    description:
      '개인화된 학습 경험을 제공하는 AI 플랫폼. 사용자 데이터를 분석하여 맞춤형 콘텐츠를 추천합니다.',
    tags: ['Next.js', 'Python', 'FastAPI', 'OpenAI'],
    image: '/images/project3.jpg',
    liveUrl: 'https://ai-learning.vercel.app',
    githubUrl: 'https://github.com/username/ai-learning',
    role: '기획, 개발',
  },
]

export const experiences: Experience[] = [
  {
    id: 1,
    category: '학생회 활동',
    title: '컴퓨터공학과 학생회장',
    organization: '순천향대학교',
    period: '2023.03 - 2024.02',
    location: '아산, 충남',
    description:
      '학과 행사 기획 및 운영, 학생들의 목소리를 대변하여 학과 발전에 기여했습니다. 프로젝트 관리와 팀 리더십 경험을 쌓았습니다.',
    impact: '학과 만족도 20% 향상, 15개 행사 성공적 진행',
    skills: ['리더십', '기획', '소통', '프로젝트 관리'],
    iconName: 'Users',
    color: 'text-blue-600 bg-blue-100 dark:bg-blue-950 dark:text-blue-400',
  },
  {
    id: 2,
    category: '봉사활동',
    title: '코딩 교육 봉사',
    organization: '지역아동센터',
    period: '2022.06 - 2023.12',
    location: '천안, 충남',
    description:
      '초등학생들에게 스크래치 프로그래밍을 가르치며 코딩의 즐거움을 전파했습니다. 복잡한 개념을 쉽게 설명하는 능력을 기를 수 있었습니다.',
    impact: '30명의 학생들이 기초 프로그래밍 습득',
    skills: ['교육', '소통', '인내심', '창의적 문제해결'],
    iconName: 'Heart',
    color: 'text-red-600 bg-red-100 dark:bg-red-950 dark:text-red-400',
  },
  {
    id: 3,
    category: '공모전',
    title: '대학생 창업 경진대회 우수상',
    organization: '교육부',
    period: '2023.09',
    location: '서울',
    description:
      '대학생을 위한 스터디 매칭 플랫폼을 기획하고 프로토타입을 개발하여 우수상을 수상했습니다. 팀워크와 창의적 사고를 발휘한 경험입니다.',
    impact: '전국 200팀 중 상위 10팀 선정',
    skills: ['창업', '기획', '팀워크', '프레젠테이션'],
    iconName: 'Trophy',
    color: 'text-yellow-600 bg-yellow-100 dark:bg-yellow-950 dark:text-yellow-400',
  },
  {
    id: 4,
    category: '인턴십',
    title: '프론트엔드 개발 인턴',
    organization: '테크 스타트업',
    period: '2024.01 - 2024.06',
    location: '서울',
    description:
      'React와 TypeScript를 활용한 웹 애플리케이션 개발에 참여했습니다. 실제 서비스에 기여하며 실무 경험을 쌓았습니다.',
    impact: '3개 기능 개발 완료, 코드 리뷰 프로세스 개선',
    skills: ['React', 'TypeScript', '실무', '협업', '코드리뷰'],
    iconName: 'Code2',
    color: 'text-green-600 bg-green-100 dark:bg-green-950 dark:text-green-400',
  },
  {
    id: 5,
    category: '해커톤',
    title: '대학생 해커톤 대상',
    organization: '한국IT기업협회',
    period: '2023.11',
    location: '부산',
    description:
      '24시간 해커톤에서 AI를 활용한 스마트 도시 솔루션을 개발했습니다. 창의적 아이디어와 빠른 프로토타이핑으로 대상을 수상했습니다.',
    impact: '전국 50팀 중 1위, 상금 500만원',
    skills: ['AI', '프로토타이핑', '창의성', '팀워크', '발표'],
    iconName: 'Trophy',
    color: 'text-purple-600 bg-purple-100 dark:bg-purple-950 dark:text-purple-400',
  },
]

export const keywords: Keyword[] = [
  {
    id: 1,
    keyword: '빠른 실행력',
    description:
      '아이디어를 신속하게 프로토타입으로 구현하고, 빠른 피드백을 통해 지속적으로 개선합니다.',
    iconName: 'Zap',
    color: 'text-yellow-600 bg-yellow-100 dark:bg-yellow-950 dark:text-yellow-400',
    bgGradient: 'from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950',
  },
  {
    id: 2,
    keyword: '사용자 중심',
    description:
      '항상 사용자의 관점에서 생각하며, 실제 문제를 해결하는 서비스를 만들기 위해 노력합니다.',
    iconName: 'Target',
    color: 'text-blue-600 bg-blue-100 dark:bg-blue-950 dark:text-blue-400',
    bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950',
  },
  {
    id: 3,
    keyword: '협업 중시',
    description:
      '다양한 배경의 사람들과 효과적으로 소통하고, 함께 더 나은 결과물을 만들어갑니다.',
    iconName: 'Users2',
    color: 'text-green-600 bg-green-100 dark:bg-green-950 dark:text-green-400',
    bgGradient: 'from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950',
  },
]

export const techTags: TechTag[] = [
  { name: 'TypeScript', count: 15, color: 'from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40' },
  { name: 'React', count: 12, color: 'from-cyan-100 to-cyan-200 dark:from-cyan-900/40 dark:to-cyan-800/40' },
  { name: 'Next.js', count: 10, color: 'from-gray-100 to-gray-200 dark:from-gray-900/40 dark:to-gray-800/40' },
  { name: 'TailwindCSS', count: 8, color: 'from-teal-100 to-teal-200 dark:from-teal-900/40 dark:to-teal-800/40' },
  { name: 'Node.js', count: 6, color: 'from-green-100 to-green-200 dark:from-green-900/40 dark:to-green-800/40' },
  { name: 'Supabase', count: 4, color: 'from-emerald-100 to-emerald-200 dark:from-emerald-900/40 dark:to-emerald-800/40' },
  { name: 'Prisma', count: 3, color: 'from-purple-100 to-purple-200 dark:from-purple-900/40 dark:to-purple-800/40' },
  { name: 'Vercel', count: 2, color: 'from-violet-100 to-violet-200 dark:from-violet-900/40 dark:to-violet-800/40' },
]

export const workflowSteps: WorkflowStep[] = [
  {
    id: 1,
    title: '언어 선택',
    subtitle: 'Language',
    icon: '💻',
    color: 'blue',
    description:
      '프로젝트에 적합한 프로그래밍 언어를 선택하고 개발 환경을 구성합니다.',
    details: ['JavaScript', 'TypeScript', 'ESLint/Prettier', 'VS Code', 'Node.js 환경'],
    bgGradient: 'from-red-400 to-orange-400',
  },
  {
    id: 2,
    title: '프로젝트 기획',
    subtitle: 'Planning',
    icon: '📋',
    color: 'purple',
    description: '요구사항 분석과 프로젝트 구조를 설계하고 일정을 계획합니다.',
    details: ['프로젝트 문서화', '업무 플로우 설계', '팀 협업 관리', '데이터베이스 설계', '일정 관리'],
    bgGradient: 'from-orange-400 to-yellow-400',
  },
  {
    id: 3,
    title: 'UI/UX 디자인',
    subtitle: 'Design',
    icon: '🎨',
    color: 'pink',
    description: '사용자 경험을 고려한 인터페이스를 디자인하고 프로토타입을 제작합니다.',
    details: ['프로토타이핑', 'UI 컴포넌트 디자인', '사용자 플로우 설계', '반응형 디자인', '디자인 시스템 구축'],
    bgGradient: 'from-yellow-400 to-green-400',
  },
  {
    id: 4,
    title: '프론트엔드 개발',
    subtitle: 'Frontend',
    icon: '🖥️',
    color: 'green',
    description: '사용자 인터페이스를 구현하고 인터랙티브한 웹 애플리케이션을 개발합니다.',
    details: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', '상태 관리'],
    bgGradient: 'from-green-400 to-blue-400',
  },
  {
    id: 5,
    title: '백엔드 개발',
    subtitle: 'Backend',
    icon: '⚙️',
    color: 'orange',
    description: '서버 로직과 데이터베이스를 구축하고 API를 개발합니다.',
    details: ['Supabase', 'PostgreSQL', '인증 시스템', '실시간 데이터베이스', '파일 스토리지'],
    bgGradient: 'from-blue-400 to-indigo-400',
  },
  {
    id: 6,
    title: '배포 및 운영',
    subtitle: 'Deployment',
    icon: '🚀',
    color: 'red',
    description: '클라우드 플랫폼에 배포하고 모니터링 시스템을 구축합니다.',
    details: ['Vercel 배포', '도메인 설정', '자동 배포', '성능 모니터링', 'CDN 최적화'],
    bgGradient: 'from-indigo-400 to-purple-400',
  },
  {
    id: 7,
    title: 'AI 통합',
    subtitle: 'AI Integration',
    icon: '🤖',
    color: 'cyan',
    description: 'AI 기술을 활용하여 서비스의 가치를 향상시키고 자동화를 구현합니다.',
    details: ['Cursor AI', '코드 자동완성', '코드 리뷰', '디버깅 지원', '개발 효율성 향상'],
    bgGradient: 'from-purple-400 to-pink-400',
  },
]

export const navigationLinks: NavigationLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Notes', href: '/notes' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experiences', href: '/experiences' },
  { name: 'About', href: '/about' },
]
