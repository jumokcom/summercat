# Portfolio Feature

포트폴리오 사이트 기능을 담당하는 feature입니다.

## 📁 구조

```
src/features/portfolio/
├── components/
│   ├── sections/     # 포트폴리오 섹션들
│   ├── layout/       # 포트폴리오 전용 레이아웃
│   └── index.ts      # 컴포넌트 exports
├── lib/
│   ├── data.ts       # 포트폴리오 데이터
│   ├── types.ts      # 타입 정의
│   └── utils.ts      # 유틸리티 함수
└── index.ts          # Feature exports
```

## 🎨 주요 섹션

- **HeroSection**: 메인 히어로 섹션
- **ProjectsSummary**: 주요 프로젝트 소개  
- **WorkFlow**: 개발 프로세스 시각화
- **ExperiencesSummary**: 주요 경험 카드
- **KeywordsSection**: 핵심 가치 키워드
- **NotesCounter**: 기술 태그 워드클라우드

## 📦 사용법

```typescript
import {
  HeroSection,
  ProjectsSummary,
  PortfolioHeader,
  PortfolioFooter
} from '@/features/portfolio'
```

## 🔧 데이터 관리

- `lib/data.ts`: 정적 데이터 (프로필, 기본 설정)
- `lib/utils.ts`: 프로젝트/경험 조회 함수
- `lib/types.ts`: TypeScript 타입 정의

