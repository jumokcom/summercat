# Shared Components

프로젝트 전체에서 공통으로 사용하는 컴포넌트들입니다.

## 📁 구조

```
src/shared/
├── components/
│   ├── ui/           # shadcn/ui 기본 컴포넌트
│   ├── layout/       # 공통 레이아웃 (헤더, 푸터)
│   ├── common/       # 재사용 가능한 공통 컴포넌트
│   ├── providers/    # Context Providers
│   └── index.ts      # Barrel exports
├── hooks/            # 전역 커스텀 훅
├── lib/              # 전역 유틸리티, 설정, 타입
└── index.ts          # Shared exports
```

## 🎨 UI 컴포넌트 (shadcn/ui)

- Button, Card, Badge
- NavigationMenu, Separator
- 모든 기본 UI 컴포넌트들

## 🔧 공통 컴포넌트

- **ProjectCard**: 프로젝트 카드 컴포넌트
- **SectionTitle**: 섹션 제목 컴포넌트
- **Header/Footer**: 공통 레이아웃

## 🎭 Providers

- **ThemeProvider**: 다크/라이트 모드 관리
- **ThemeToggle**: 테마 전환 버튼

## 📦 사용법

```typescript
import { 
  Button, 
  Card, 
  ThemeProvider,
  ProjectCard 
} from '@/shared/components'
```

## ✨ 장점

- 일관된 디자인 시스템
- 재사용성 극대화
- 중앙 집중식 관리
- 타입 안정성

