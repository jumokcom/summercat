# Hub Feature

인터랙티브 웹 허브 기능을 담당하는 feature입니다.

## 📁 구조

```
src/features/hub/
├── components/
│   ├── ui/           # 허브 전용 UI 컴포넌트
│   └── world/        # 게임 월드 컴포넌트
├── hooks/            # 허브 전용 훅
├── lib/              # 허브 로직과 데이터
└── index.ts          # Feature exports
```

## 🎮 주요 기능

- **게임 상태 관리**: useGameState, usePlayerMovement
- **키보드 입력**: useKeyboardInput  
- **인터랙티브 월드**: Player, Building, GameWorld 컴포넌트
- **UI 요소**: StartScreen, GameUI, SettingsModal

## 📦 사용법

```typescript
import {
  useGameState,
  usePlayerMovement,
  StartScreen,
  GameWorld
} from '@/features/hub'
```

## 🔧 확장 방법

새로운 건물이나 기능을 추가하려면:
1. `lib/buildingData.ts`에 건물 정보 추가
2. 필요시 새로운 컴포넌트 개발
3. `index.ts`에서 export

