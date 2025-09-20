# Summer Cat World

웹 기술을 탐구하는 인터랙티브한 실험실입니다.

## 🎮 프로젝트 개요

포켓몬 DP 스타일의 2D 탑뷰 인터랙티브 허브를 통해 다양한 웹 사이트와 서비스를 탐험할 수 있는 플랫폼입니다.

## 🏗️ 아키텍처

### 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── (main)/            # 메인 허브 라우트 그룹
│   ├── portfolio/         # 포트폴리오 사이트
│   ├── web2/              # Web2 사이트 (준비중)
│   ├── web3/              # Web3 사이트 (준비중)
│   └── globals.css
│
├── shared/                 # 🌐 전역 공통 요소
│   ├── components/        # UI, Layout, Common 컴포넌트
│   ├── hooks/             # 전역 커스텀 훅
│   └── lib/               # 유틸리티, 설정, 타입
│
└── features/               # 🎯 기능별 도메인 모듈
    ├── hub/               # 인터랙티브 허브 (게임)
    ├── portfolio/         # 포트폴리오 사이트
    ├── web2/              # Web2 기능 (준비중)
    └── web3/              # Web3 기능 (준비중)
```

### 🎯 핵심 특징

- **Domain-Driven Design**: 각 기능별 완전 독립적 관리
- **Feature-First Structure**: 기능 중심의 폴더 구조
- **Shared-First**: 공통 요소 우선, 각 도메인 특성 존중

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

### 1. 인터랙티브 허브 (`/`)
- 포켓몬 DP 스타일 2D 탑뷰 게임
- WASD/화살표키로 캐릭터 이동
- 건물 상호작용으로 각 사이트 접근
- 부드러운 애니메이션과 반응형 디자인

### 2. 포트폴리오 (`/portfolio`)
- 개발자 소개 및 프로젝트 showcasing
- 인터랙티브 섹션들
- 다크/라이트 테마 지원

### 3. Web2 Labs (`/web2`) - 준비중
- 전통적인 웹 기술 실험공간

### 4. Web3 Tower (`/web3`) - 준비중  
- 블록체인 및 분산 웹 기술 연구

## 📦 Import 경로

```typescript
// Shared 컴포넌트
import { Button, Card } from '@/shared/components'

// Feature별 컴포넌트
import { GameWorld, useGameState } from '@/features/hub'
import { HeroSection, ProjectsSummary } from '@/features/portfolio'
```

## 🔧 확장 가이드

### 새로운 사이트 추가

1. `src/features/` 아래 새 폴더 생성
2. 해당 feature의 컴포넌트, 훅, 라이브러리 구현  
3. `src/app/` 아래 라우트 생성
4. 허브의 건물 데이터에 새 사이트 추가

### 새로운 공통 컴포넌트 추가

1. `src/shared/components/` 아래 컴포넌트 생성
2. `src/shared/components/index.ts`에 export 추가
3. 모든 feature에서 재사용 가능

## 🎨 디자인 시스템

- **색상**: Tailwind CSS 팔레트 기반
- **타이포그래피**: Inter 폰트 사용
- **컴포넌트**: shadcn/ui 기반 디자인 시스템
- **애니메이션**: Framer Motion 일관된 모션 언어

## 🚀 배포

Vercel을 통한 자동 배포 설정:

```bash
# Vercel CLI로 배포
npx vercel --prod
```

## 📄 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능

---

**개발자**: Summer Cat ([@summercat01](https://github.com/summercat01))  
**이메일**: jumokcom2001@gmail.com
