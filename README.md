# Summer Cat Portfolio

SummerCat의 개인 포트폴리오 웹사이트입니다.

## 🏗️ 아키텍처

### 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router (page.tsx, globals.css 등)
│
├── components/             # 재사용 가능한 컴포넌트 모음
│   ├── portfolio/         # Hero, ProjectsSummary 등 섹션 컴포넌트
│   ├── providers/         # 테마 등 전역 Provider
│   └── ui/                # 버튼, 카드 등 공통 UI
│
└── lib/                    # 공통 데이터, 타입, 유틸리티
    ├── data.ts
    ├── types.ts
    ├── utils.ts
    └── index.ts
```

### 🎯 핵심 특징

- **원페이지 포트폴리오**: Hero, Projects, Experiences 등 전체 섹션이 한 페이지에 구성됩니다.
- **Framer Motion 애니메이션**: 부드러운 인터랙션과 스크롤 애니메이션 제공
- **Tailwind 기반 테마**: 다크 테마를 기본으로 한 커스텀 컬러 스킴

## 🚀 시작하기

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

### 개발 환경

- **Next.js 15** - React 프레임워크
- **TypeScript** - 타입 안정성
- **Tailwind CSS 4** - 스타일링
- **Framer Motion** - 애니메이션
- **Radix UI** - 접근성 있는 UI 컴포넌트

## 🎮 주요 기능

### 주요 섹션
- **Hero**: 핵심 메시지와 개발 프로세스 프리뷰
- **Projects Summary**: 대표 프로젝트 카드, 링크 제공
- **WorkFlow**: 7단계 개발 플로우 인터랙션
- **Experiences Summary**: 다양한 활동 경험 카드 스택
- **Keywords Section**: 핵심 키워드 강조 카드
- **Notes Counter**: 노트/글 수 요약 및 Footer

## 📦 Import 경로

```typescript
// 공통 UI
import { Button, Card } from '@/components'

// 포트폴리오 섹션 컴포넌트
import { HeroSection, ProjectsSummary } from '@/components/portfolio'

// 포트폴리오 데이터/유틸
import { portfolioConfig } from '@/lib/data'
```

## 🔧 확장 가이드

### 섹션 확장

1. `src/components/portfolio/sections/` 에 새 섹션 컴포넌트 추가
2. `src/components/portfolio/index.ts` 에 export 추가
3. `src/app/page.tsx` 에 섹션 배치 및 스타일 조정

## 🎨 디자인 시스템

- **색상**: Tailwind CSS 팔레트 기반
- **타이포그래피**: Inter 폰트 사용
- **컴포넌트**: shadcn/ui 기반 디자인 시스템
- **애니메이션**: Framer Motion 일관된 모션 언어

## 🚀 배포

Vercel을 통한 자동 배포 설정

## 📄 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능

---

**개발자**: SummerCat ([@summercat01](https://github.com/summercat01))  
**이메일**: jumokcom2001@gmail.com
