import { useEffect } from 'react'
import { Building } from './useGameState'

interface UseKeyboardInputProps {
  gameStarted: boolean
  setGameStarted: (started: boolean) => void
  keysPressed: Set<string>
  setKeysPressed: (keys: Set<string> | ((prev: Set<string>) => Set<string>)) => void
  startContinuousMove: (direction: string) => void
  stopContinuousMove: () => void
  getActiveDirection: (keys: Set<string>) => string | null
  nearBuilding: Building | null
}

export const useKeyboardInput = ({
  gameStarted,
  setGameStarted,
  keysPressed,
  setKeysPressed,
  startContinuousMove,
  stopContinuousMove,
  getActiveDirection,
  nearBuilding
}: UseKeyboardInputProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!gameStarted) {
        if (e.code === 'Space') {
          e.preventDefault()
          setGameStarted(true)
        }
        return
      }

      const key = e.key.toLowerCase()
      const keyCode = e.code

      if (['arrowup', 'w', 'arrowdown', 's', 'arrowleft', 'a', 'arrowright', 'd'].includes(key)) {
        e.preventDefault()
        
        if (!keysPressed.has(keyCode)) {
          const newKeysPressed = new Set([...keysPressed, keyCode])
          setKeysPressed(newKeysPressed)
          
          let direction = ''
          switch(key) {
            case 'arrowup':
            case 'w':
              direction = 'up'
              break
            case 'arrowdown':
            case 's':
              direction = 'down'
              break
            case 'arrowleft':
            case 'a':
              direction = 'left'
              break
            case 'arrowright':
            case 'd':
              direction = 'right'
              break
          }
          
          if (direction) {
            startContinuousMove(direction)
          }
        }
      }
      
      if (['e', 'enter'].includes(key)) {
        e.preventDefault()
        if (nearBuilding) {
          if (nearBuilding.href) {
            window.location.href = nearBuilding.href
          } else if (nearBuilding.action) {
            nearBuilding.action()
          }
        }
      }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      if (!gameStarted) return

      const keyCode = e.code
      const key = e.key.toLowerCase()

      if (['arrowup', 'w', 'arrowdown', 's', 'arrowleft', 'a', 'arrowright', 'd'].includes(key)) {
        setKeysPressed(prev => {
          const newSet = new Set(prev)
          newSet.delete(keyCode)
          
          const activeDirection = getActiveDirection(newSet)
          
          if (activeDirection) {
            startContinuousMove(activeDirection)
          } else {
            stopContinuousMove()
          }
          
          return newSet
        })
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [
    gameStarted,
    setGameStarted,
    keysPressed,
    setKeysPressed,
    nearBuilding,
    startContinuousMove,
    stopContinuousMove,
    getActiveDirection
  ])
}
