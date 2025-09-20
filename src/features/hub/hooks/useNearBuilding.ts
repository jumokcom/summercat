import { useEffect, useRef } from 'react'
import { Position, Building } from './useGameState'

export const useNearBuilding = (
  playerPos: Position,
  buildings: Building[],
  gameStarted: boolean,
  setNearBuilding: (building: Building | null) => void
) => {
  const lastNearBuildingRef = useRef<Building | null>(null)
  
  useEffect(() => {
    if (!gameStarted) {
      if (lastNearBuildingRef.current !== null) {
        setNearBuilding(null)
        lastNearBuildingRef.current = null
      }
      return
    }

    const nearby = buildings.find(building => {
      const distance = Math.abs(playerPos.x - (building.x + building.width/2)) + 
                      Math.abs(playerPos.y - (building.y + building.height/2))
      return distance < 80
    })
    
    const newNearBuilding = nearby || null
    
    // 이전 값과 다를 때만 업데이트
    if (lastNearBuildingRef.current?.id !== newNearBuilding?.id) {
      setNearBuilding(newNearBuilding)
      lastNearBuildingRef.current = newNearBuilding
    }
  }, [playerPos.x, playerPos.y, gameStarted, buildings, setNearBuilding])
}
