'use client'

import { motion } from 'framer-motion'
import { Building, Position } from '@/features/hub/hooks/useGameState'
import Player from './Player'
import BuildingComponent from './BuildingComponent'
import InteractionPrompt from './InteractionPrompt'

interface GameWorldProps {
  playerPos: Position
  playerDirection: string
  buildings: Building[]
  nearBuilding: Building | null
  isDarkMode: boolean
}

export default function GameWorld({ 
  playerPos, 
  playerDirection, 
  buildings, 
  nearBuilding, 
  isDarkMode 
}: GameWorldProps) {
  return (
    <motion.div
      className="relative w-full h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* 배경 격자 */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(${isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.1)'} 1px, transparent 1px),
            linear-gradient(90deg, ${isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.1)'} 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* 건물들 */}
      {buildings.map((building) => (
        <BuildingComponent
          key={building.id}
          building={building}
          isNear={nearBuilding?.id === building.id}
          isDarkMode={isDarkMode}
        />
      ))}

      {/* 플레이어 */}
      <Player position={playerPos} direction={playerDirection} />

      {/* 상호작용 프롬프트 */}
      {nearBuilding && (
        <InteractionPrompt building={nearBuilding} />
      )}
    </motion.div>
  )
}
