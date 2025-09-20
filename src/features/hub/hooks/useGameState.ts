import { useState, useEffect } from 'react'

export interface Position {
  x: number
  y: number
}

export interface Building {
  id: string
  x: number
  y: number
  width: number
  height: number
  name: string
  icon: string
  href?: string
  action?: () => void
  description: string
  progress?: number
}

export const useGameState = () => {
  const [gameStarted, setGameStarted] = useState(false)
  const [playerPos, setPlayerPos] = useState<Position>({ x: 0, y: 0 })
  const [nearBuilding, setNearBuilding] = useState<Building | null>(null)
  const [showSettings, setShowSettings] = useState(false)
  const [playerDirection, setPlayerDirection] = useState<string>('down')
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 })
  const [isDarkMode, setIsDarkMode] = useState(false)

  // 화면 크기 업데이트
  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight })
    }
    
    updateScreenSize()
    window.addEventListener('resize', updateScreenSize)
    
    return () => window.removeEventListener('resize', updateScreenSize)
  }, [])

  // 플레이어 초기 위치 설정
  useEffect(() => {
    if (screenSize.width > 0 && screenSize.height > 0) {
      setPlayerPos({ 
        x: screenSize.width * 0.5, 
        y: screenSize.height * 0.5 
      })
    }
  }, [screenSize.width, screenSize.height])

  // 다크모드 상태 감지
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark')
      setIsDarkMode(isDark)
    }
    
    checkDarkMode()
    
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    return () => observer.disconnect()
  }, [])

  return {
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
    isDarkMode,
    setIsDarkMode
  }
}
