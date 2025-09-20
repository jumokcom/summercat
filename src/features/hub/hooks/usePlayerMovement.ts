import { useState, useEffect, useCallback, useRef } from 'react'
import { Position } from './useGameState'

export const usePlayerMovement = (
  screenSize: { width: number; height: number },
  setPlayerPos: (pos: Position | ((prev: Position) => Position)) => void,
  setPlayerDirection: (direction: string) => void
) => {
  const [keysPressed, setKeysPressed] = useState<Set<string>>(new Set())
  const moveIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // 플레이어 이동 처리
  const movePlayer = useCallback((direction: string) => {
    const moveDistance = Math.min(screenSize.width, screenSize.height) * 0.02
    
    setPlayerDirection(direction)
    setPlayerPos(prev => {
      const newPos = { ...prev }
      
      switch(direction) {
        case 'up':
          newPos.y = Math.max(30, prev.y - moveDistance)
          break
        case 'down':
          newPos.y = Math.min(screenSize.height - 30, prev.y + moveDistance)
          break
        case 'left':
          newPos.x = Math.max(30, prev.x - moveDistance)
          break
        case 'right':
          newPos.x = Math.min(screenSize.width - 30, prev.x + moveDistance)
          break
      }
      
      return newPos
    })
  }, [screenSize.width, screenSize.height, setPlayerPos, setPlayerDirection])

  // 연속 이동 처리
  const startContinuousMove = useCallback((direction: string) => {
    if (moveIntervalRef.current) {
      clearInterval(moveIntervalRef.current)
      moveIntervalRef.current = null
    }
    
    setPlayerDirection(direction)
    
    const interval = setInterval(() => {
      movePlayer(direction)
    }, 50)
    
    moveIntervalRef.current = interval
  }, [movePlayer, setPlayerDirection])

  // 연속 이동 중지
  const stopContinuousMove = useCallback(() => {
    if (moveIntervalRef.current) {
      clearInterval(moveIntervalRef.current)
      moveIntervalRef.current = null
    }
  }, [])

  // 현재 눌린 키들을 기반으로 이동 방향 결정
  const getActiveDirection = useCallback((pressedKeys: Set<string>) => {
    const keyPriority = ['ArrowUp', 'KeyW', 'ArrowDown', 'KeyS', 'ArrowLeft', 'KeyA', 'ArrowRight', 'KeyD']
    
    for (const key of keyPriority) {
      if (pressedKeys.has(key)) {
        switch(key) {
          case 'ArrowUp':
          case 'KeyW':
            return 'up'
          case 'ArrowDown':
          case 'KeyS':
            return 'down'
          case 'ArrowLeft':
          case 'KeyA':
            return 'left'
          case 'ArrowRight':
          case 'KeyD':
            return 'right'
        }
      }
    }
    return null
  }, [])

  // 컴포넌트 언마운트 시 타이머 정리
  useEffect(() => {
    return () => {
      if (moveIntervalRef.current) {
        clearInterval(moveIntervalRef.current)
      }
    }
  }, [])

  return {
    keysPressed,
    setKeysPressed,
    startContinuousMove,
    stopContinuousMove,
    getActiveDirection
  }
}
