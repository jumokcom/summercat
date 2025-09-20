'use client'

import { useMemo } from 'react'
import {
  useGameState,
  usePlayerMovement,
  useKeyboardInput,
  useNearBuilding,
  createBuildings,
  StartScreen,
  GameWorld,
  GameUI,
  SettingsModal
} from '@/features/hub'

export default function Home() {
  // 게임 상태 관리
  const {
    gameStarted,
    setGameStarted,
    playerPos,
    setPlayerPos,
    nearBuilding,
    setNearBuilding,
    showSettings,
    setShowSettings,
    playerDirection,
    setPlayerDirection,
    screenSize,
    isDarkMode
  } = useGameState()

  // 플레이어 이동 로직
  const {
    keysPressed,
    setKeysPressed,
    startContinuousMove,
    stopContinuousMove,
    getActiveDirection
  } = usePlayerMovement(screenSize, setPlayerPos, setPlayerDirection)

  // 건물 데이터 생성 (메모이제이션)
  const buildings = useMemo(() => {
    return createBuildings(screenSize, setShowSettings)
  }, [screenSize.width, screenSize.height])

  // 키보드 입력 처리
  useKeyboardInput({
    gameStarted,
    setGameStarted,
    keysPressed,
    setKeysPressed,
    startContinuousMove,
    stopContinuousMove,
    getActiveDirection,
    nearBuilding
  })

  // 근처 건물 확인
  useNearBuilding(playerPos, buildings, gameStarted, setNearBuilding)

  // 테마별 배경 그라데이션
  const getBackgroundGradient = () => {
    if (isDarkMode) {
      return "bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"
    } else {
      return "bg-gradient-to-br from-green-400 via-blue-400 to-purple-500"
    }
  }

  return (
    <div className={`min-h-screen ${getBackgroundGradient()} relative overflow-hidden`}>
      {/* 게임이 시작되지 않은 상태 */}
      {!gameStarted && (
        <StartScreen onStart={() => setGameStarted(true)} />
      )}

      {/* 게임 월드 */}
      {gameStarted && (
        <>
          <GameWorld
            playerPos={playerPos}
            playerDirection={playerDirection}
            buildings={buildings}
            nearBuilding={nearBuilding}
            isDarkMode={isDarkMode}
          />
          <GameUI isDarkMode={isDarkMode} />
        </>
      )}

      {/* 설정 모달 */}
      <SettingsModal 
        showSettings={showSettings} 
        onClose={() => setShowSettings(false)} 
      />
    </div>
  )
}
